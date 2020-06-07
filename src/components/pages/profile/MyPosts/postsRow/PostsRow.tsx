import React, {FC} from 'react'
import s from './PostsRow.module.css'
import PostItem from '../../../../common/postItem/PostItem'
import {PostsRowType} from '../../../../../models/profile'

type Props = {
    posts: PostsRowType
}

const PostsRow: FC<Props> = ({posts}) => {
    const postsElements = posts.map(({message, author, likesCount}, key) => (
        <PostItem
            key={key}
            author={author}
            message={message}
            likesCount={likesCount}
        />
    ))

    return (
        <div className={s.rowPosts}>
            { postsElements }
        </div>
    )
}

export default PostsRow
