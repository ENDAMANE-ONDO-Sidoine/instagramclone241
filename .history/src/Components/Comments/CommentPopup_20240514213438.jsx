

import React from 'react';
import CommentList from './CommentList'; 

const CommentPopup = ({ postId, setShowComments }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Comments</h2>
                    <button onClick={() => setShowComments(false)} className="text-red-600">Close</button>
                </div>
                <CommentList postId={postId} /> {/* Intégration du CommentList */}
            </div>
        </div>
    );
};

export default CommentPopup;
