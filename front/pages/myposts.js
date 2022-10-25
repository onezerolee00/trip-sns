import React, { useEffect } from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';
import { Router } from 'next/dist/client/router';
import { faker } from '@faker-js/faker';
import shortId from 'shortid';
import PostList from '../components/PostList';

const generateMyDummyPost = (number) => Array(number).fill().map(() => ({
    id: number,
    Title: faker.lorem.sentence(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName()
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image()
    }, {
        src: faker.image.image()
    }, {
        src: faker.image.image()
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}))

const MyPosts = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    const Posts = generateMyDummyPost(5)
    console.log(Posts)

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
                <title>내 게시글 | </title>
            </Head>
            <AppLayout>
                <PostList myPosts={me.Posts} totalPosts={Posts}/>
            </AppLayout>
        </>
    );
}

export default MyPosts;