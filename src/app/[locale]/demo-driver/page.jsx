// import driverSteps from '@/components/driverAppSteps';
import { Trispace } from 'next/font/google';
import { useTranslation } from '../../i18n';
import Image from 'next/image';
import DriverStepCard from '@/components/DriverAppSteps';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default async function driverDemo({ params }) {
	const { locale } = await params;
	const { t } = await useTranslation(locale, 'common');

	return (
		<div className="bg-gray-50">
			<div className="w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100 mt-[72px]">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					{t('driver.hero.title')}
				</h1>
				<p className="text-center text-xl lg:text-2xl lg:max-w-2/4">
					{t('driver.hero.description')}
				</p>
			</div>
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* 1 */}

			<DriverStepCard
				image="/driver_steps/login.png"
				title={t('driver.steps.step1.title')}
				points={[
					t('driver.steps.step1.point1'),
					t('driver.steps.step1.point2'),
					t('driver.steps.step1.point3'),
				]}
			/>

			<DriverStepCard
				image="/driver_steps/profile.png"
				title={t('driver.steps.step2.title')}
				points={[
					t('driver.steps.step2.point1'),
					t('driver.steps.step2.point2'),
					t('driver.steps.step2.point3'),
				]}
				reverse
			/>

			<DriverStepCard
				image="/driver_steps/trips.png"
				title={t('driver.steps.step3.title')}
				points={[
					t('driver.steps.step3.point1'),
					t('driver.steps.step3.point2'),
					t('driver.steps.step3.point3'),
				]}
			/>

			<DriverStepCard
				image="/driver_steps/negotiation.png"
				title={t('driver.steps.step4.title')}
				points={[
					t('driver.steps.step4.point1'),
					t('driver.steps.step4.point2'),
					t('driver.steps.step4.point3'),
				]}
				reverse
			/>

			<DriverStepCard
				image="/driver_steps/progress.png"
				title={t('driver.steps.step5.title')}
				points={[
					t('driver.steps.step5.point1'),
					t('driver.steps.step5.point2'),
					t('driver.steps.step5.point3'),
				]}
			/>

			<DriverStepCard
				image="/driver_steps/wallet.png"
				title={t('driver.steps.step6.title')}
				points={[
					t('driver.steps.step6.point1'),
					t('driver.steps.step6.point2'),
					t('driver.steps.step6.point3'),
				]}
				reverse
			/>

			<DriverStepCard
				image="/driver_steps/documents-new.png"
				title={t('driver.steps.step7.title')}
				points={[
					t('driver.steps.step7.point1'),
					t('driver.steps.step7.point2'),
					t('driver.steps.step7.point3'),
				]}
			/>
		</div>
	);
}
