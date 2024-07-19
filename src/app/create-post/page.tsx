import { createPost } from '@/actions/actions';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Page() {
	return (
		<main className='text-center pt-16'>
			<h1 className='text-4xl font-bold mb-5 md:text-5xl'>Create Post</h1>

			<form
				action={createPost}
				className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'
			>
				<input
					className='border rounded px-3 h-10'
					type='text'
					name='title'
					placeholder='title for new post...'
					required
				/>
				<textarea
					name='body'
					placeholder='Body content for new post'
					className='border rounded px-3 py-2'
					rows={6}
					required
				/>
				<button className='h-10 bg-blue-500 px-5 rounded text-white'>suybbmit</button>

				<LogoutLink className='bg-black text-white px-3 py-2 rounded'>Log Out</LogoutLink>
			</form>
		</main>
	);
}
