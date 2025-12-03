'use client';

import { useState } from 'react';
import { useTranslation } from '../app/i18n/client';

const LeadershipCard = ({ locale }) => {
	const { t } = useTranslation(locale, 'common');
	const [openIds, setOpenIds] = useState([]);

	const profiles = [
		{
			id: 1,
			image: '/pp.png',
			nameKey: 'about.leadership.ceo.name',
			titleKey: 'about.leadership.ceo.title',
			descriptionKey: 'about.leadership.ceo.description',
		},
		{
			id: 2,
			image: '/us.png',
			nameKey: 'about.leadership.md.name',
			titleKey: 'about.leadership.md.title',
			descriptionKey: 'about.leadership.md.description',
		},
	];

	const toggleCard = (id) => {
		setOpenIds((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
		);
	};

	return (
		<div className="flex flex-col w-full items-center lg:w-3/5 px-4 gap-8 lg:gap-4">
			{profiles.map((profile) => (
				<div
					key={profile.id}
					className="border rounded-lg p-6 shadow-md w-full lg:w-1/2 flex flex-col items-center transition-all duration-300"
				>
					<div className="flex flex-col justify-center items-center">
						<div className="border-4 border-blue-600 rounded-full overflow-hidden">
							<img
								src={profile.image}
								alt={t(profile.nameKey)}
								className="w-24 h-24 object-cover"
							/>
						</div>
						<div className="text-center mt-4">
							<h3 className="text-2xl font-bold">{t(profile.nameKey)}</h3>
							<p className="text-gray-600 text-xl">{t(profile.titleKey)}</p>
						</div>
					</div>

					<button
						onClick={() => toggleCard(profile.id)}
						className="bg-blue-600 text-white w-full px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 mt-4"
					>
						{openIds.includes(profile.id) ? t('about.leadership.collapse') : t('about.leadership.viewMore')}
					</button>

					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							openIds.includes(profile.id) ? 'max-h-96 mt-4' : 'max-h-0'
						}`}
					>
						<div className="text-sm text-gray-700 leading-relaxed text-center">
							{t(profile.descriptionKey)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LeadershipCard;