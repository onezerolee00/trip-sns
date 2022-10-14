import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { PictureTwoTone, ScheduleOutlined, ScheduleTwoTone, PictureOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import FollowButton from './FollowButton';

import { REMOVE_POST_REQUEST } from '../reducers/post';
import styled from 'styled-components';
import PostRoutes from './PostRoutes';
import PostRouteContents from './PostRouteContents';

const Title = styled.div`
    margin: 10px 10px;
    font-weight: bold;
`;

const Icons = styled.div`
    display: flex;
    fontSize: 30px;
    margin: 5px 10px;

`;

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state) => state.post);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [pictureOrRoute, setPictureOrRoute] = useState(true);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev); //true를 false로 false를 true로 만드는 코드
    }, []);

    const onTogglePictureOrRoute = useCallback(() => {
        setPictureOrRoute((prev) => !prev);
    }, []);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, []);

    const { me } = useSelector((state) => state.user);
    const id = me?.id;
    return (
        <div style={{marginBottom: 20}}>
            <Card 
                title={[<Avatar style={{margin:'0px 15px 0px 0px'}}>{post.User.nickname[0]}</Avatar>,
                    post.User.nickname,
                ]}
                //title={post.User.nickname}
                cover={[ 
                    <Icons>
                        {pictureOrRoute 
                        ? <PictureTwoTone twoToneColor="#9c9c9c" style={{fontSize: '25px', color: '#9f9f9f', margin: '5px 5px 0px 0px'}} onClick={onTogglePictureOrRoute} />
                        :<PictureOutlined style={{fontSize: '25px', color: '#9f9f9f', margin: '5px 5px 0px 0px'}} onClick={onTogglePictureOrRoute}/>}
                        {pictureOrRoute 
                        ? <ScheduleOutlined style={{fontSize: '25px', color: '#9f9f9f', margin: '5px 5px 0px 0px'}} onClick={onTogglePictureOrRoute}/>
                        : <ScheduleTwoTone twoToneColor="#9c9c9c" style={{fontSize: '25px', color: '#9f9f9f' , margin: '5px 5px 0px 0px' }} onClick={onTogglePictureOrRoute} />}
                    </Icons>,
                    <Title>{'제목 : ' + post.Title}</Title>,
                    <div>
                        {pictureOrRoute
                        ? post.Images[0] && <PostImages images={post.Images} />
                        : <PostRoutes />}
                    </div>,
                    
                    ]}
                actions={[
                    //<RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                        : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            { id && post.User.id === id ? (
                            <>
                                <Button>수정</Button>
                                <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                            </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                extra={id && <FollowButton post={post} />} // id : 내가 로그인 했을 때만 팔로우 버튼 보이기
            >
                <Card.Meta 
                    description={pictureOrRoute 
                        ? <PostCardContent postData={post.content} />
                        : <PostRouteContents />}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post}/>
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    )
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;