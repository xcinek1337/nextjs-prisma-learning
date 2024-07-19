import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Blog | All Posts',
	description: 'Generated by create next app',
};

//pobieramy dane w komponencie serwerowym - jest to popularna metoda fetchowania danych na serverze, nie na kliencie
export default async function Page() {
	const response = await fetch('https://dummyjson.com/posts?limit=10');
	const data = await response.json();
	
	return (
		<main className='text-center pt-16 px-5'>
			<h1 className='text-4xl md:text-5xl font-bold mb-5'>All posts</h1>

			<ul>
				{data.posts.map((post) => {
					return (
						<li className='mb-5' key={post.id}>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
