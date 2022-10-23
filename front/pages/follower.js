import React, { useEffect } from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';
import { Router } from 'next/dist/client/router';

const Follower = () => {
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    // 로그인 안한 상태에서 프로필 클릭 안되게
    if (!me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>내 팔로워 | </title>
            </Head>
            <AppLayout>
                <FollowList header='followerlist' data={me.Followers}/>
            </AppLayout>
        </>
    );
}

export default Follower;