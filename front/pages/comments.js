import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Head from 'next/head';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import CommentList from '../components/CommentList';

const Comments = () => {
    // useEffect로 컴포넌트 마운트 효과를 넣을 수 있다. 뒤에 빈배열만 넣는 다면.
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);


    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);


    useEffect(() => {
        function onScroll() {
            console.log(parseInt(window.scrollY) + document.documentElement.clientHeight > document.documentElement.scrollHeight-300,parseInt(window.scrollY), document.documentElement.clientHeight, document.documentElement.scrollHeight);
        
        // 스크롤 끝까지 내렸을 때 게시글 더 로드해서 다시 내려가게 하는 거
        if (parseInt(window.scrollY) + document.documentElement.clientHeight > document.documentElement.scrollHeight-300) {
            if (hasMorePosts && !loadPostsLoading) { // 리듀서에서 정의했음. 50개 이하면 true
                dispatch({
                    type: LOAD_POSTS_REQUEST,
                });
            }
        }
    }

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePosts, loadPostsLoading]);


    return (
        <>
            <Head>
                <title>내 댓글 | </title>
            </Head>
            <AppLayout>
                {mainPosts.map((post) => <CommentList key={post.id} post={post} />)}
            </AppLayout>
        </>
    );
}

export default Comments; 