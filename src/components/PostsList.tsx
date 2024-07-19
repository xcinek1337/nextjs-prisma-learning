import Link from 'next/link';

export default async function PostsList() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch('https://dummyjson.com/posts?limit=10');
	const data = await response.json();

	return (
		<ul>
			{data.posts.map((post) => {
				return (
					<li
						className='mb-5'
						key={post.id}
					>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				);
			})}
		</ul>
	);
}
