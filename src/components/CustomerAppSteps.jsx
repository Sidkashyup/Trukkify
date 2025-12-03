'use client';

import Image from 'next/image';
import { useTranslation } from '../app/i18n/client';

const CustomerSteps = ({ locale }) => {
	const { t } = useTranslation(locale, 'common');

	return (
		<div className="w-[1000px] flex mx-auto m-16">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 relative h-full bg-gray-100 rounded-2xl">
						{/* <div className="inset-0"> */}
							<Image
								src="/customer_steps/login.png"
								alt={t('homepage.customer.steps.step1.title')}
								fill
								className="object-cover"
							/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('customer.steps.step1.title')}
						</h2>

						<p className="text-lg text-gray-600 leading-relaxed">
							{t('customer.steps.step1.description')}
						</p>
					</div>
				</div>
			</div>
	);
};

export default CustomerSteps;
