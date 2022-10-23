import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Avatar } from 'antd';
import FollowButtonInList from './FollowButtonInList';


const FollowList = ({header, data}) => {

    return (
        <List 
            bordered
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta 
                    avatar={<Avatar>{item.nickname[0]}</Avatar>}
                    title={item.nickname}
                    />
                    {header=="followinglist"
                    ? <FollowButtonInList item={item} />
                    : <div></div>}
                </List.Item>
            )}
        />
    )
    // return (
    //     <List 
    //         style={{marginBottom: 20}}
    //         grid={{gutter: 4, xs: 2, md: 3}}
    //         size="small"
    //         header={<div>{header}</div>}
    //         loadMore={<div style={{textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
    //         bordered
    //         dataSource={data}
    //         renderItem={(item) => (
    //             <List.Item style={{marginTop:20}}>
    //                 <Card actions={[<StopOutlined key="stop"/>]}>
    //                     <Card.Meta description={item.nickname} />
    //                 </Card>
    //             </List.Item>
    //         )}
    //     />
    // )
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;