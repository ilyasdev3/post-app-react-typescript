import { IPost } from '../../types/post.types'

export interface IState {
	posts: IPost[]
}

const initalState: IState = {
	posts: [],
}

export const postReducer = (
	state = initalState,
	action: {
		type: String
		post?: IPost
		id?: string | number
	}
) => {
	if (action.type === 'ADD_POST') {
		return {
			...state,
			posts: [...state.posts, action.post],
		}
	}
	if (action.type === 'DELETE_POST') {
		const newPosts = state.posts.filter((post: IPost) => {
			post.id !== action.id
		})
		return {
			posts: newPosts,
		}
	}
	return state
}
