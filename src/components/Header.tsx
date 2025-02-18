'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/posts', label: 'Posts' },
	{ href: '/create-post', label: 'Create Post' },
];

export const Header = () => {
	const pathname = usePathname();

	return (
		<header className='flex justify-between items-center py-4 px-7 border-b'>
			<Link href={'/'}>
				<Image
					src={'https://bytegrad.com/course-assets/youtube/example-logo.png'}
					alt={'logo'}
					width={35}
					height={35}
					className='w-[35px] h-[35px]'
				/>
			</Link>

			<nav>
				<ul className='flex gap-5 text-[14px] '>
					{navLinks.map((link) => {
						return (
							<li key={link.href}>
								<Link
									className={`${pathname === link.href ? "text-zinc-900 font-semibold" : ""} text-zinc-400` }
									href={link.href}
								>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
