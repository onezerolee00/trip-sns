import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Segmented, Timeline } from 'antd';


const PostRouteContents = ({ schedules }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    
    return (
        <>
        <Timeline>
            <Timeline.Item label="1">aber land</Timeline.Item>
            <Timeline.Item label="2">lotte land</Timeline.Item>
        </Timeline>
        </>
    )
};

PostRouteContents.propTypes = {
    numberOfTrip: PropTypes.number.isRequired,
    TripDates: PropTypes.arrayOf(PropTypes.object),
}

export default PostRouteContents;