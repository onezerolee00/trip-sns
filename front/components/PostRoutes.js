import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Segmented } from 'antd';


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
        </>
    )
};

PostRoutes.propTypes = {
    numberOfTrip: PropTypes.number.isRequired,
    TripDates: PropTypes.arrayOf(PropTypes.object),
}

export default PostRoutes;