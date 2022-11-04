import { Form, Input, Button, Modal, DatePicker, Radio, Segmented, Space } from 'antd';
import { daysInWeek } from 'date-fns';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';
import PostRoutesForm from './PostRoutesForm';
import { MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';


const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isRadioOpen, setIsRadioOpen] = useState(false);
    const [text, onChangeText, setText] = useInput('');
    const imageInput = useRef();
    const { RangePicker } = DatePicker;
    const [DateList, setDateList] = useState([]);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const showModal2 = () => {
        setIsModal2Open(true);
    };


    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleOk2 = () => {
        setIsModal2Open(false);
    }

    const handleCancle = () => {
        setIsModalOpen(false);
    };

    const handleCancle2 = () => {
        setIsModal2Open(false);
    };


    const onClickImageUpload = useCallback(()=> {
        imageInput.current.click();
    }, [imageInput.current]);

    const [title, onChangeTitle] = useInput('');
    const [mainTexts, onChangeMainTexts] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(title, mainTexts)
    }, [title, mainTexts]);


    var btDay = 0;
    var startDate;
    var endDate;
    var DateArray = [];

    const makeDateRadio = () => {
        console.log(btDay);
        var D = startDate;
        
        for(var i=0; i<btDay; i++) {
            //DateArray.push([D.getFullYear(), D.getMonth(), D.getDate()]);
            DateArray.push(D.getFullYear() + '년 ' + (D.getMonth() + 1) + '월 ' + D.getDate() + '일');
            D.setDate(D.getDate() + 1);
        }

        console.log(DateArray);
        setDateList(DateArray);
        setIsRadioOpen(true);
    }

    const onChangeDate = (range) => {
        const Date1 = range[0].format();
        const Date2 = range[1].format();

        var year1 = Date1.substring(0, 4);
        var year2 = Date2.substring(0, 4);
        var month1 = Date1.substring(5, 7);
        var month2 = Date2.substring(5, 7);
        var day1 = Date1.substring(8, 10);
        var day2 = Date2.substring(8, 10);

        startDate = new Date(year1, month1-1, day1);
        endDate = new Date(year2, month2-1, day2);

        var btMs = endDate.getTime() - startDate.getTime();
        btDay = btMs / (1000*60*60*24) + 1;
        

        console.log('start date', Date1);
        console.log('end date', Date2);
        console.log('start date', startDate);
        console.log('end date', endDate);
        console.log('day', btDay)


    }
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    }

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
                        <Button key="add trip route" type="button" onClick={showModal2}>여행 경로 추가</Button>,
                        <Button key="post" type="primary" htmlType="submit">게시</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <>
                <Modal 
                    title="여행 루트" 
                    open={isModal2Open} 
                    onOk={handleOk2} 
                    onCancel={handleCancle2}
                    footer={[
                    ]}>
                    <Form onFinish={onSubmitForm}>
                        <Form.Item>
                            <RangePicker size="middle" onChange={onChangeDate}/>
                        </Form.Item>
                        <Form.Item>
                            <Button key="post" type="button" onClick={makeDateRadio}>날짜 설정</Button>
                        </Form.Item>
                        {/* <Form.Item>
                            <Radio.Group>
                                {isRadioOpen && DateArray.map((v) => <Radio.Button>{v[0] + `년` + v[1]+1 + `월` + v[2] + `일`}</Radio.Button>)}
                            </Radio.Group>
                        </Form.Item> */}
                        <Form.Item>
                            <Segmented size="small" options={DateList} />
                            {/* {isRadioOpen && <Segmented size="small" options={DateArray} />} */}
                            {/* <Segmented size="small" options={['a', 'b', 'c']} /> */}
                        </Form.Item>

                    </Form>
                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                    <Input placeholder="여행지 명" />
                                    </Form.Item>
                                    <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                    <Input placeholder="여행지 주소" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                                ))}
                                <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                </Modal>
            
            </>
        
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