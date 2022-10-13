import { Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost'
import Header from './components/Header'
import PostList from './components/PostList'

function App() {
	return (
		<div className='container mt-3'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<PostList />}
				/>
				<Route
					path='/add-post'
					element={<AddPost />}
				/>
			</Routes>
		</div>
	)
}

export default App
