import React from 'react';

import { addPost } from "../../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import s from "./MyPostsContainer.module.css";
import MessageForm from "../../../common/messageForm/MessageForm";
import PostsRow from "./postsRow/PostsRow";

class _MyPostsContainer extends React.Component {
    onAddPostFormSubmit = ({messageText}) => {
        this.props.addPost(messageText);
    }

    render() {
        const { posts } = this.props;

        return (
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <MessageForm
                    onSubmit={this.onAddPostFormSubmit}
                />
                <PostsRow posts={posts}/>
            </div>
        );
    }
}

const mapStateToProps = ({profileReducer}) => ({
    posts: profileReducer.posts,
});

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(_MyPostsContainer);

export default MyPostsContainer;
