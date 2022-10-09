import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me, followLoading, unfollowLoading } = useSelector((state) => state.user); // 리덕스에서 내 정보 받아오고
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id) // 포스트 작성한 사람들 중에 내가 팔로윙한 사람들
    const onClickButton = useCallback(() => {
        if (isFollowing) { // 내가 팔로잉을 하고 있는데 버튼을 눌렀다
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            });
        }
    }, [isFollowing]);
    
    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
    );
};

FollowButton.propTypes = {
    // object말고 shape가 더 좋은 코드이니 여러분은 shape로 하세요
    post: PropTypes.object.isRequired,
};

export default FollowButton;