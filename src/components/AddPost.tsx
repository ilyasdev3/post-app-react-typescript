import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IForm } from '../types/form.types'

const AddPost = () => {
	const posts = useSelector((state: any) => state.post.posts)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	console.log('posts', posts)

	const [form, setForm] = useState<IForm>({
		image: '',
		title: '',
		description: '',
		createdAt: new Date(),
	})

	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = event.target
		setForm({
			...form,
			[name]: value,
		})
	}

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const img = event.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onload = () => {
			setForm({
				...form,
				image: reader.result,
			})
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const post = { ...form, id: posts.length + 1 }
		dispatch({
			type: 'ADD_POST',
			post,
		})
		navigate('/')
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='mx-auto'
			style={{ width: '550px' }}>
			<div className='mb-3'>
				<label
					htmlFor='formFile'
					className='form-label'>
					Cover Image
				</label>
				<input
					className='form-control'
					type='file'
					name='image'
					onChange={handleImageUpload}
					id='formFile'
				/>
				{form.image && (
					<img
						src={form.image.toString()}
						alt=''
						className='w-25 mt-4'
					/>
				)}
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlInput1'
					className='form-label'>
					Post Title
				</label>
				<input
					type='text'
					className='form-control'
					id='exampleFormControlInput1'
					name='title'
					value={form.title}
					onChange={handleChange}
					placeholder='Enter Post Title'
				/>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlTextarea1'
					className='form-label'>
					Post Description
				</label>
				<textarea
					className='form-control'
					name='description'
					value={form.description}
					onChange={handleChange}
					id='exampleFormControlTextarea1'></textarea>
			</div>
			<button className='btn btn-lg w-100 btn-success'>Submit</button>
		</form>
	)
}

export default AddPost
