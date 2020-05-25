import React from 'react';
import s from './PostsRow.module.css';
import PostItem from "../../../../common/postItem/PostItem";

const PostsRow = ({posts}) => {
    const postsElements = posts.map(({message, author, likesCount}, key) => (
        <PostItem
            key={key}
            name={author}
            message={message}
            likesCount={likesCount}
        />
    ));

    return (
        <div className={s.rowPosts}>
            { postsElements }
        </div>
    );
};

export default PostsRow;
