import React, {useCallback} from 'react';
import { Avatar, Card, Button, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { TeamOutlined, HeartOutlined, MessageOutlined, SolutionOutlined, BookOutlined  } from '@ant-design/icons';

import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);
    return (
        <Card>
            {/* <div style="display: flex; flex-direction: row; flex-wrap: nowrap"> */}
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}/>
                <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
            {/* </div> */}
            <Menu theme='white' mode="inline">
                <Menu.Item><Link href="/following"><a><HeartOutlined key="follwings"/> 팔로잉 {me.Followings.length}</a></Link></Menu.Item>
                <Menu.Item><Link href="/follower"><a><TeamOutlined key="follwings"/> 팔로워 {me.Followers.length}</a></Link></Menu.Item>
                <Menu.Item><Link href="/myposts"><a><SolutionOutlined key="twit"/> 게시글 {me.Posts.length}</a></Link></Menu.Item>
                <Menu.Item><Link href="/comments"><a><MessageOutlined key="comments"/> 댓글</a></Link></Menu.Item>
                <Menu.Item><Link href="/scrappedposts"><a><BookOutlined key="scraps"/> 저장됨</a></Link></Menu.Item>
            </Menu>
        </Card>
        //<Link href="/profile"><a>
        // <Card
        //     actions={[
        //         <div key="twit">짹짹<br />{me.Posts.length}</div>,
        //         <div key="follwings">팔로잉<br />{me.Followings.length}</div>,
        //         <div key="follwings">팔로워<br />{me.Followers.length}</div>,
        //     ]}>
        //     <Card.Meta 
        //         avatar={<Avatar>{me.nickname[0]}</Avatar>}
        //         title={me.nickname}/>
        //         <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        // </Card>
    );
};

export default UserProfile;