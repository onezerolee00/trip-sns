import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Segmented, Timeline } from 'antd';


const PostRoutes = ({ schedules }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    
    return (
        <>
        <Segmented size='small'
      options={[
        {
          label: (
            <div style={{ padding: 1, fontSize: '10px' }}>
              <div>1일차</div>
              <div>07/23 토</div>
            </div>
          ),
          value: '1일차',
        },
        {
          label: (
            <div style={{ padding: 1, fontSize: '10px'}}>
              <div>2일차</div>
              <div>07/24 일</div>
            </div>
          ),
          value: '2일차',
        },
      ]}
    />
    <Timeline style={{margin: '20px 20px'}}>
      <Timeline.Item dot={<img style={{width: '40px', height: '35px'}} src="https://velog.velcdn.com/images/lwy210/post/3e661171-8b4b-421a-b6a6-2f4ec2fce0a8/image.png"/>}>에버랜드</Timeline.Item>
      <Timeline.Item dot={<img style={{width: '28px', height: '30px'}} src="https://velog.velcdn.com/images/lwy210/post/3f1f6b25-172a-4431-b8b3-c248a2dd99ab/image.png"/>}>롯데월드</Timeline.Item>
    </Timeline>
        </>
    )
};

PostRoutes.propTypes = {
    numberOfTrip: PropTypes.number.isRequired,
    TripDates: PropTypes.arrayOf(PropTypes.object),
}

export default PostRoutes;