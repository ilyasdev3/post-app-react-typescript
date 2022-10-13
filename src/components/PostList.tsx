import React from 'react'
import { useSelector } from 'react-redux'
import { IPost } from '../types/post.types'
import Post from './Post'

const PostList = () => {
	const posts = useSelector((state: any) => state.post.posts)
	return (
		<div className='row row-cols-3 gy-4 mt-4'>
			{posts.length > 0 &&
				posts.map((post: IPost) => {
					return (
						<Post
							post={post}
							key={post.id}
						/>
					)
				})}
		</div>
	)
}

export default PostList
