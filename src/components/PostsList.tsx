import prisma from '@/lib/db';
import Link from 'next/link';

export default async function PostsList() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const data = await prisma.post.findMany();
	

	return (
		<ul>
			{data.map((post) => {
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
