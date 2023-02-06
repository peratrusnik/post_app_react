import React from "react";
import Post from "./Post";

function PostLayout({ tag, selectedTag, allPosts}) {
    
    const renderPost = () => allPosts.map((post, index) => {
        if (post.tags.includes(tag)) {
            return <Post key={index} post={post} selectedTag={selectedTag} />           
        }
    })
    return (
        <div className="row">
            {renderPost()}
        </div>
    );
}

export default PostLayout;