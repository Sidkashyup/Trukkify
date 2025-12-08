import CustomerSteps from '@/components/CustomerAppSteps';
import { Trispace } from 'next/font/google';
import { useTranslation } from '../../i18n';
import Image from 'next/image';
import CustomerStepCard from '@/components/CustomerAppSteps';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default async function CustomerDemo({ params }) {
	const { locale } = await params;
	const { t } = await useTranslation(locale, 'common');

	return (
		<div className="bg-gray-50">
			<div className="w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100 mt-[72px]">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					{t('customer.hero.title')}
				</h1>
				<p className="text-center text-xl lg:text-2xl lg:max-w-2/4">
					{t('customer.hero.description')}
				</p>
			</div>
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* 1 */}
			

			<CustomerStepCard
							image="/customer_steps/login.png"
							title={t('customer.steps.step1.title')}
							points={[
								t('customer.steps.step1.point1'),
								t('customer.steps.step1.point2'),
								t('customer.steps.step1.point3'),
							]}
						/>
			
						<CustomerStepCard
							image="/customer_steps/profile.png"
							title={t('customer.steps.step2.title')}
							points={[
								t('customer.steps.step2.point1'),
								t('customer.steps.step2.point2'),
								t('customer.steps.step2.point3'),
							]}
							reverse
						/>
			
						<CustomerStepCard
							image="/customer_steps/negotiation.png"
							title={t('customer.steps.step3.title')}
							points={[
								t('customer.steps.step3.point1'),
								t('customer.steps.step3.point2'),
								t('customer.steps.step3.point3'),
							]}
						/>
			
						<CustomerStepCard
							image="/customer_steps/ongoing.png"
							title={t('customer.steps.step4.title')}
							points={[
								t('customer.steps.step4.point1'),
								t('customer.steps.step4.point2'),
								t('customer.steps.step4.point3'),
							]}
							reverse
						/>
			
						<CustomerStepCard
							image="/customer_steps/wallet.png"
							title={t('customer.steps.step5.title')}
							points={[
								t('customer.steps.step5.point1'),
								t('customer.steps.step5.point2'),
								t('customer.steps.step5.point3'),
							]}
						/>
		</div>
	);
}
