"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Translations } from '@/app/[lang]/dictionary';
import clsx from 'clsx';

interface MobileMenuTriggerProps {
	translations: Translations;
	pathname: string;
}

const MobileMenuTrigger: React.FC<MobileMenuTriggerProps> = ({ translations, pathname }) => {
	const [menuVisible, setMenuVisible] = useState(false);

	const handleMenuToggle = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<>
			<div className="lg:hidden items-center space-x-6 text-xl font-bold ">
				{/* Mobile Menu */}
				<div
					id="menu-sm"
					className={clsx(
						'lg:hidden fixed top-32 left-0 duration-200 opacity-0 right-0 w-full text-gray-800 dark:text-white dark:bg-gray-900 bg-opacity-50 flex justify-center',
						menuVisible && ' opacity-100'
					)}
				>
					<div className="p-8 w-full">
						<ul className="items-stretch space-y-6 font-bold text-gray-800 dark:text-white">
							<li className="flex">
								<Link href="/" className={clsx('flex items-center px-4 -mb-1 hover:text-[#2ce5a7]')}>{translations.navigation.home}</Link>
							</li>
							<li className="flex">
								<Link href="/blog" className={clsx('flex items-center px-4 -mb-1 hover:text-[#2ce5a7]')}>{translations.navigation.blog}</Link>
							</li>
							<li className="flex">
								<Link href="/about" className={clsx('flex items-center px-4 -mb-1 hover:text-[#2ce5a7]')}>{translations.navigation.about}</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<button className="p-4 lg:hidden relative" onClick={handleMenuToggle}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black dark:text-white">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</>
	);
};

MobileMenuTrigger.displayName = 'Mobile Menu Trigger';

export { MobileMenuTrigger };
