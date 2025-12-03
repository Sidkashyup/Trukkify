'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const languages = [
	{ code: 'en', label: 'English' },
	{ code: 'hi', label: 'हिंदी' },
	{ code: 'bn', label: 'বাংলা' },
	{ code: 'gu', label: 'ગુજરાતી' },
	{ code: 'mr', label: 'मराठी' },
	{ code: 'ta', label: 'தமிழ்' },
	{ code: 'te', label: 'తెలుగు' },
	{ code: 'or', label: 'ଓଡ଼ିଆ' },
	{ code: 'kn', label: 'ಕನ್ನಡ' },
	{ code: 'ml', label: 'മലയാളം' },
	{ code: 'as', label: 'অসমীয়া' },
	{ code: 'pu', label: 'ਪੰਜਾਬੀ' },
];

export default function LanguageSwitcher({ locale }) {
	const router = useRouter();
	const pathname = usePathname();
	const [currentLang, setCurrentLang] = useState(locale || 'en');

	const handleChange = (e) => {
		const newLocale = e.target.value;
		setCurrentLang(newLocale);

		// Replace locale in URL
		const segments = pathname.split('/');
		segments[1] = newLocale; // update locale segment

		router.push(segments.join('/'));
	};

	return (
		<div className="fixed bottom-6 right-6 z-9999 w-fit">
			<select
				value={currentLang}
				onChange={handleChange}
				className="px-4 py-2 rounded-md bg-white appearance-none shadow-lg border border-gray-300 text-gray-800 text-lg cursor-pointer focus:outline-none"
			>
				{languages.map((lang) => (
					<option key={lang.code} value={lang.code}>
						{lang.label}
					</option>
				))}
			</select>
		</div>
	);
}
