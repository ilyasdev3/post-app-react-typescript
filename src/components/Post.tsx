import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../types/post.types'

interface IProps {
	post: IPost
}

const Post = ({ post }: IProps) => {
	const posts = useSelector((state: any) => state.post.posts)
	const dispatch = useDispatch()
	return (
		<div>
			<article
				className='card shadow'
				style={{ width: '23rem' }}>
				<img
					src={post.image?.toString()}
					className='card-img-top'
					alt='...'
				/>
				<main className='card-body'>
					<h4 className='card-title'>{post.title}</h4>
					<p className='card-text'>{post.description}</p>
				</main>
				<footer className='card-footer px-3 py-3 bg-white d-flex justify-content-between '>
					<span>{moment(post.createdAt).fromNow()}</span>
					<i
						className='fa-solid fa-trash'
						onClick={() => {
							dispatch({
								type: 'DELETE_POST',
								id: post.id,
							})
							// handlePostDelete(post.id)
						}}
						style={{
							fontSize: '22px',
						}}></i>
				</footer>
			</article>
		</div>
	)
}

export default Post
