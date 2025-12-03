'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '../app/i18n/client';

const DriverSteps = ({ locale }) => {
	const { t } = useTranslation(locale, 'common');

	const guideSteps = [
		{
			image: '/driver_steps/login.png',
			titleKey: 'driver.steps.step1.title',
			descriptionKey: 'driver.steps.step1.description',
		},
		{
			image: '/driver_steps/profile.png',
			titleKey: 'driver.steps.step2.title',
			descriptionKey: 'driver.steps.step2.description',
		},
		{
			image: '/driver_steps/trips.png',
			titleKey: 'driver.steps.step3.title',
			descriptionKey: 'driver.steps.step3.description',
		},
		{
			image: '/driver_steps/negotiation.png',
			titleKey: 'driver.steps.step4.title',
			descriptionKey: 'driver.steps.step4.description',
		},
		{
			image: '/driver_steps/progress.png',
			titleKey: 'driver.steps.step5.title',
			descriptionKey: 'driver.steps.step5.description',
		},
		{
			image: '/driver_steps/wallet.png',
			titleKey: 'driver.steps.step6.title',
			descriptionKey: 'driver.steps.step6.description',
		},
		{
			image: '/driver_steps/documents-new.png',
			titleKey: 'driver.steps.step7.title',
			descriptionKey: 'driver.steps.step7.description',
		},
	];

	const [current, setCurrent] = useState(0);
	const total = guideSteps.length;

	const goPrev = () => current > 0 && setCurrent((c) => c - 1);
	const goNext = () => current < total - 1 && setCurrent((c) => c + 1);
	const goTo = (i) => setCurrent(i);

	return (
		<div className="w-1/2 mx-auto p-4 md:p-8">
			<div className="flex flex-col md:flex-row gap-8 items-center">
				{/* LEFT: IMAGE STACK */}
				<div className="w-full lg:w-1/2 flex-1 relative h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
					{guideSteps.slice(0, current + 1).map((step, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="absolute inset-0"
						>
							<Image
								src={step.image}
								alt={`${t(step.titleKey)} (step ${i + 1})`}
								fill
								className="object-cover"
								priority={i === 0}
							/>
						</motion.div>
					))}
				</div>

				{/* RIGHT: TEXT CONTENT */}
				<div className="w-full flex-1 lg:w-1/2 flex flex-col justify-center min-h-80 space-y-5">
					<motion.h2
						key={`title-${current}`}
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="text-2xl md:text-3xl font-bold text-gray-800"
					>
						{t(guideSteps[current].titleKey)}
					</motion.h2>

					<motion.p
						key={`desc-${current}`}
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.45, delay: 0.1 }}
						className="text-base md:text-lg text-gray-600 leading-relaxed"
					>
						{t(guideSteps[current].descriptionKey)}
					</motion.p>

					{/* Navigation Buttons */}
					<div className="flex items-center justify-between mt-6">
						<button
							onClick={goPrev}
							disabled={current === 0}
							className="px-5 py-2 bg-white border-2 border-blue-600 font-semibold text-blue-600 rounded disabled:bg-gray-300 disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-gray-100 transition"
						>
							{t('driver.steps.navigation.previous')}
						</button>

						<button
							onClick={goNext}
							disabled={current === total - 1}
							className="px-5 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
						>
							{t('driver.steps.navigation.next')}
						</button>
					</div>

					{/* Dot Indicators */}
					<div className="flex justify-center space-x-2 mt-4">
						{guideSteps.map((_, i) => (
							<button
								key={i}
								onClick={() => goTo(i)}
								className={`w-3 h-3 rounded-full transition ${
									i <= current ? 'bg-blue-600' : 'bg-gray-300'
								}`}
								aria-label={`Go to step ${i + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DriverSteps;