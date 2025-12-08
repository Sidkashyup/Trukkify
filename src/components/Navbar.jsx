'use client';

import Image from 'next/image';
import { TextAlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Trispace } from 'next/font/google';
import { useTranslation } from '@/app/i18n/client'; // 👈 CLIENT TRANSLATION HOOK

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Navbar = ({ locale = 'en' }) => {
	// const { locale } = params || { locale: 'en' };
	const { t } = useTranslation(locale, 'common'); // 👈 LOAD STRINGS

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed z-50 top-0 w-full">
			{/* Top Navbar */}
			<div className="flex items-center justify-between px-6 py-3 bg-white shadow-md xl:px-72">
				{/* Logo */}
				<div className='flex  items-center gap-4'>
					<Link href={`/${locale}`}>
						<Image
							src="/TWILogo.png"
							alt="TWI logo"
							width={48}
							height={48}
							className=""
						/>
					</Link>
					{/* <Link href="/"> */}
					<div
						className={`${trispace.className} md:text-3xl font-bold tracking-widest text-blue-800`}
					>
						<Link href={`/${locale}`} className="text-2xl">
							{t('nav.brand')}
						</Link>
					</div>
				</div>

				{/* Brand */}

				{/* Hamburger */}
				<TextAlignJustify
					color="black"
					size={24}
					onClick={() => setIsOpen(true)}
					className="xl:hidden"
				/>

				{/* Desktop Menu */}
				<div className="hidden xl:block">
					<div className="flex items-center gap-4">
						<Link href={`/${locale}/about`}>
							<div className="text-xl">{t('nav.about')}</div>
						</Link>
						<Link href={`/${locale}/contact`}>
							<button className="bg-blue-600 py-2 tracking-wide text-xl font-semibold text-white px-4 rounded-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:cursor-pointer">
								{t('nav.buttonContact')}
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-opacity-50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Slide-In Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Close */}
				<X
					className="absolute top-8 right-8 text-2xl"
					onClick={() => setIsOpen(false)}
					size={24}
					color="black"
				/>

				{/* Mobile Menu */}
				<nav className="mt-20 flex flex-col px-6 space-y-4">
					<Link
						href={`/${locale}`}
						className="block text-lg font-medium text-gray-900 hover:text-blue-600"
						onClick={() => setIsOpen(false)}
					>
						{t('nav.home')}
					</Link>

					<Link
						href={`/${locale}/about`}
						className="block text-lg font-medium text-gray-900 hover:text-blue-600"
						onClick={() => setIsOpen(false)}
					>
						{t('nav.about')}
					</Link>

					<Link href={`/${locale}/contact`}>
						<button
							className="block text-lg tracking-wide text-white bg-blue-700 w-full py-1 mt-2 rounded-md"
							onClick={() => setIsOpen(false)}
						>
							{t('nav.buttonContact')}
						</button>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
