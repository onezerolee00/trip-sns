import { Form, Input, Button, Modal } from 'antd';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [text, onChangeText, setText] = useInput('');
    const imageInput = useRef();


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancle = () => {
        setIsModalOpen(false);
    };

    const onClickImageUpload = useCallback(()=> {
        imageInput.current.click();
    }, [imageInput.current]);

    const [title, onChangeTitle] = useInput('');
    const [mainTexts, onChangeMainTexts] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(title, mainTexts)
    }, [title, mainTexts]);

    return(
        <>
            <Button block onClick={showModal}>+ 내 여행 게시글 작성하기</Button>
            <Modal 
                title="게시글 작성하기" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancle}
                footer={[
                ]}>
                <Form onFinish={onSubmitForm}>
                    <Form.Item><Input value={title} onChange={onChangeTitle} style={{margin: '5px 0px'}} placeholder="게시글 제목을 입력하세요" /></Form.Item>
                    <Form.Item><Input.TextArea value={mainTexts} style={{margin: '5px 0px'}} onChange={onChangeMainTexts} maxLength={140} placeholder="게시글 본문을 작성하세요." /></Form.Item>
                    <Form.Item>
                        <div>
                        <input type="file" multiple hidden ref={imageInput}/>
                        <Button onClick={onClickImageUpload}>+ 사진 업로드</Button> 
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button key="add trip route" type="button">여행 경로 추가</Button>,
                        <Button key="post" type="primary" htmlType="submit">게시</Button>
                    </Form.Item>
                </Form>
            </Modal>
        
        </>

    )




    // const { imagePaths, addPostDone } = useSelector((state) => state.post);
    // const dispatch = useDispatch();
    // const imageInput = useRef();
    // const [text, onChangeText, setText] = useInput('');

    // useEffect(() => {
    //     if (addPostDone) {
    //         setText('');
    //     }
    // }, [addPostDone]);


    // const onSubmit = useCallback(() => {
    //     dispatch(addPost(text));

    // }, [text]);

    // const onClickImageUpload = useCallback(()=> {
    //     imageInput.current.click();
    // }, [imageInput.current]);
    // return (
    //     <Form style={{margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={onSubmit}>
    //         <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
    //         <div>
    //             <input type="file" multiple hidden ref={imageInput}/>
    //             <Button onClick={onClickImageUpload}>이미지 업로드</Button>
    //             <Button type="primary" style={{float: 'right'}} htmlType="submit">짹짹</Button>
    //         </div>
    //         <div>
    //             {imagePaths.map((v) => (
    //                 <div key={v} style={{display:'inline-block'}}>
    //                     <img src={v} style={{width:'200px'}} alt={v} />
    //                     <div>
    //                         <Button>제거</Button>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </Form>
    // )
};

export default PostForm;