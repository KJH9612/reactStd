import React from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";

const CommentList = props => {
    return (
        <div>
            <Comment name={"김진혁"} comment={"안녕하세요"}/>
            <Comment name={"감스트"} comment={"FIFA21"}/>
        </div>
    );
};

CommentList.propTypes = {
    
};

export default CommentList;