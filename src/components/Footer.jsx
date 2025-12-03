'use client';

import Image from 'next/image';
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Phone,
	Mail,
	Clock,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../app/i18n/client';

const Footer = ({ locale = 'en' }) => {
	const { t } = useTranslation(locale, 'common');

	return (
		<footer className="bg-[#0c1c2c] text-white py-10 px-6 md:px-16 text-xl">
			<div className="max-w-4/5 mx-auto flex-col flex justify-center lg:flex-row items-center gap-10 xl:items-start">
				
				{/* Logo + Brand */}
				<div className="flex flex-1 flex-col items-center gap-4">
					<Image src="/TWILogo.png" height={64} width={64} alt="TWI logo" />
					<div className="font-medium text-xl">{t('footer.brand')}</div>
				</div>

				{/* Navigation + Social */}
				<div className="text-center flex-1">
					<nav className="flex justify-center gap-6 mb-4 font-medium">
						<Link href={`/${locale}/about`} className="hover:text-gray-300">
							{t('footer.about')}
						</Link>
						<span className="text-gray-500">|</span>
						<Link href="#" className="hover:text-gray-300">
							{t('footer.services')}
						</Link>
						<span className="text-gray-500">|</span>
						<Link href={`/${locale}/contact`} className="hover:text-gray-300">
							{t('footer.contact')}
						</Link>
					</nav>

					<div className="flex justify-center gap-5 text-lg">
						<a href="#" className="hover:text-blue-600">
							<Twitter />
						</a>
						<a href="#" className="hover:text-blue-600">
							<Facebook />
						</a>
						<a href="#" className="hover:text-black">
							<Instagram />
						</a>
						<a href="#" className="hover:text-gray-400">
							<Linkedin />
						</a>
					</div>
				</div>

				{/* Contact Info */}
				<div className="space-y-3 flex-1 w-full flex flex-col items-start">
					<p className="uppercase whitespace-pre-line">
						{t('footer.address')}
					</p>

					<div className="flex flex-col gap-2 mt-2">
						<div className="flex items-center gap-2">
							<Clock className="mt-1" />
							<a>{t('footer.hours')}</a>
						</div>

						<div className="flex items-center gap-2">
							<Mail className="mt-1" />
							<a href="mailto:ces@usli.in" className="hover:underline text-xl">
								ces@usli.in
							</a>
						</div>

						<div className="flex items-center gap-2">
							<Phone className="mt-1" />
							<a href="tel:+911127351631" className="hover:underline text-xl">
								+91 11 27351631
							</a>
						</div>
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
