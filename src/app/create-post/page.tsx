import { createPost } from '@/actions/actions';

export default async function Page() {
	return (
		<main className='text-center pt-16'>
			<h1 className='text-4xl font-bold mb-5 md:text-5xl'>Create Post</h1>

			<form
				action={createPost}
				className='h-10 space-x-2 mt-10'
			>
				<input
					className='border rounded px-3 h-full'
					type='text'
					name='title'
					placeholder='title for new post...'
					required
				/>
				<button className='h-full bg-blue-500 px-5 rounded text-white'>suybbmit</button>
			</form>
		</main>
	);
}
