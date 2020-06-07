import React from 'react'
import {addPost} from '../../../../redux/reducers/profileReducer'
import {connect, ConnectedProps} from 'react-redux'
import s from './MyPostsContainer.module.css'
import MessageForm from '../../../common/messageForm/MessageForm'
import PostsRow from './postsRow/PostsRow'
import {AppStateType} from '../../../../redux/store'
import {getPosts} from '../../../../redux/selectors/profile'

const mapState = (state: AppStateType) => ({
    posts: getPosts(state),
})
const mapDispatch = {
    addPost,
}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

class _MyPostsContainer extends React.Component<Props> {
    onAddPostFormSubmit = ({messageText}: any) => {
        this.props.addPost(messageText)
    }

    render() {
        const { posts } = this.props

        return (
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <MessageForm
                    captchaUrl={null}
                    onSubmit={this.onAddPostFormSubmit}
                />
                <PostsRow posts={posts}/>
            </div>
        )
    }
}

export default connector(_MyPostsContainer)
