import React, {useCallback} from 'react';
import { Avatar, Card, Button, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
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
                <Menu.Item><HeartOutlined key="follwings"/> 팔로잉 {me.Followings.length}</Menu.Item>
                <Menu.Item><TeamOutlined key="follwings"/> 팔로워 {me.Followers.length}</Menu.Item>
                <Menu.Item><SolutionOutlined key="twit"/> 게시글 {me.Posts.length}</Menu.Item>
                <Menu.Item><MessageOutlined key="comments"/> 댓글</Menu.Item>
                <Menu.Item><BookOutlined key="scraps"/> 저장됨</Menu.Item>
            </Menu>
        </Card>
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