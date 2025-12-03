// import driverSteps from '@/components/driverAppSteps';
import { Trispace } from 'next/font/google';
import { useTranslation } from '../../i18n';
import Image from 'next/image';

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
				<p className="text-center text-2xl max-w-2/4">
					{t('driver.hero.description')}
				</p>
			</div>
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* new section */}
			{/* 1 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl overflow-hidden bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 relative h-full bg-gray-100 overflow-hidden rounded-2xl">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/login.png"
							alt={t('homepage.driver.steps.step1.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step1.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-700 leading-relaxed font-medium">
								{t('driver.steps.step1.point1')}
							</li>
							<li className="text-lg text-gray-700 leading-relaxed font-medium">
								{t('driver.steps.step1.point2')}
							</li>
							<li className="text-lg text-gray-700 leading-relaxed font-medium">
								{t('driver.steps.step1.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* 2 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 order-2 relative h-full bg-gray-100 overflow-hidden rounded-2xl">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/profile.png"
							alt={t('homepage.driver.steps.step2.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 order-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step2.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step2.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step2.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step2.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* 3 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 relative h-full bg-gray-100 overflow-hidden rounded-2xl">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/trips.png"
							alt={t('homepage.driver.steps.step3.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step3.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step3.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step3.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step3.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* 4 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 order-2 relative h-full bg-gray-100 rounded-2xl overflow-hidden">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/negotiation.png"
							alt={t('homepage.driver.steps.step4.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 order-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step4.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step4.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step4.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step4.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* 5 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 relative rounded-2xl h-full bg-gray-100 overflow-hidden">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/progress.png"
							alt={t('homepage.driver.steps.step5.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step5.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step5.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step5.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step5.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* 6 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 order-2 relative rounded-2xl h-full bg-gray-100 overflow-hidden">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/wallet.png"
							alt={t('homepage.driver.steps.step6.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex order-1 flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step6.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step6.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step6.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step6.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* 7 */}
			<div className="w-[1000px] flex mx-auto m-16 box-content p-8 border-gray-200 shadow-lg border-2 rounded-4xl bg-white">
				<div className="flex w-full gap-8 items-center h-[600px]">
					{/* LEFT: IMAGE STACK */}
					<div className="flex-1 w-1/2 relative rounded-2xl h-full bg-gray-100 overflow-hidden">
						{/* <div className="inset-0"> */}
						<Image
							src="/driver_steps/documents-new.png"
							alt={t('homepage.driver.steps.step7.title')}
							fill
							className="object-cover"
						/>
						{/* </div> */}
					</div>
					{/* RIGHT: TEXT CONTENT */}
					<div className="flex-1 flex flex-col justify-center space-y-6">
						<h2 className="text-3xl font-bold text-gray-800">
							{t('driver.steps.step7.title')}
						</h2>
						<ul className='space-y-4'>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step7.point1')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step7.point2')}
							</li>
							<li className="text-lg text-gray-600 leading-relaxed font-medium">
								{t('driver.steps.step7.point3')}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
