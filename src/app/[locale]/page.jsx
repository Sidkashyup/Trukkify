import Image from 'next/image';
import { Trispace } from 'next/font/google';
import FeatureCard from '@/components/FeatureCard';
import { ArrowUpRight } from 'lucide-react';
import HowWorks from '@/components/HowWorks';
import { useTranslation } from '../i18n';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Link from 'next/link';
// import HeroVideo from '/her-'

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default async function Page({ params }) {
	const { locale } = await params;
	// Updated namespace → homepage
	const { t } = await useTranslation(locale, 'common');

	return (
		<div className="overflow-hidden">
			{/* <Navbar params={params}/> */}
			{/* Hero section */}
			{/* <div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-[72px]">
				<Image
					src="/heroImage.png"
					alt={t('homepage.hero.imageAlt')}
					fill
					className="object-cover"
					priority
				/>

				<div className="absolute top-8 lg:top-20 left-0 w-full px-6 py-4 bg-white/40 lg:bg-white/70 backdrop-blur-sm text-center">
					<h2 className="text-xl lg:text-3xl text-gray-800">
						{t('homepage.hero.subtitle')}
					</h2>
					<h1
						className={`${trispace.className} tracking-tight text-3xl md:text-4xl font-semibold text-blue-700 mt-1`}
					>
						{t('homepage.hero.title')}
					</h1>
				</div>
			</div> */}
			
			{/* temporary */}
			<div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-[72px]">
				{/* Background Video */}
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					autoPlay
					loop
					muted
					playsInline
					src="/hero-video.mp4" // Optional: Good fallback if video loads slowly
				>
					<source src="/hero-video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Overlay Text */}
				<div className="absolute top-8 lg:top-20 left-0 w-full px-6 py-4 bg-white/40 lg:bg-white/70 backdrop-blur-sm text-center z-10">
					<h2 className="text-xl lg:text-3xl text-gray-800">
						{t('homepage.hero.subtitle')}
					</h2>
					<h1
						className={`${trispace.className} tracking-tight text-3xl md:text-4xl font-semibold text-blue-700 mt-1`}
					>
						{t('homepage.hero.title')}
					</h1>
				</div>
			</div>

			{/* Tagline section */}
			<div className="w-full flex-col flex items-center text-center py-6 lg:py-8 text-2xl gap-4 px-2 bg-orange-100">
				<h1
					className={`${trispace.className} tracking-tight font-semibold text-red-950 text-3xl lg:text-4xl`}
				>
					{t('homepage.tagline.main')}
				</h1>
				<p className="text-center text-xl lg:text-2xl lg:max-w-2/4">
					{t('homepage.tagline.description')}
				</p>
			</div>

			{/* Carriers section */}
			<div className="flex flex-col w-full justify-center lg:items-center bg-white px-8 lg:px-20 mt-16 lg:mb-16 gap-12">
				<div className="lg:w-[1324px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-32">
					<div className="flex-1 relative lg:order-2 w-fit flex items-center justify-center">
						<img
							src="/rightImage.png"
							alt={t('homepage.carriers.imageAlt')}
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col lg:order-1 justify-center lg:items-start items-center flex-1 relative">
						<div>
							<p
								className={`${trispace.className} text-gray-500 font-semibold mb-1 text-lg`}
							>
								{t('homepage.carriers.label')}
							</p>
							<h1
								className={`${trispace.className} tracking-tight text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
							>
								{t('homepage.carriers.title')}
							</h1>
						</div>
						<p className="text-center lg:text-left text-xl text-gray-700 mb-6">
							{t('homepage.carriers.description')}
						</p>
						<Link href={`/${locale}/demo-driver`}>
							<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold hover:cursor-pointer hover:scale-105 transition-all  w-fit hover:bg-blue-700">
								{t('homepage.carriers.cta')} <ArrowUpRight size={28} />
							</button>
						</Link>
					</div>
				</div>
			</div>
			{/* Customers section */}
			<div className="flex flex-col w-full justify-center lg:items-center bg-white px-8 lg:px-20 py-16 gap-12">
				<div className="lg:w-[1324px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-32">
					<div className="flex-1 relative w-fit flex items-center justify-center">
						<img
							src="/leftImage.png"
							alt={t('homepage.customers.imageAlt')}
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col justify-center lg:items-end items-center flex-1">
						<div>
							<p
								className={`${trispace.className} text-gray-500 font-semibold text-right mr-2 mb-1 text-lg`}
							>
								{t('homepage.customers.label')}
							</p>
							<h1
								className={`${trispace.className} tracking-tight text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
							>
								{t('homepage.customers.title')}
							</h1>
						</div>
						<p className="text-center lg:text-right text-xl text-gray-700 mb-6">
							{t('homepage.customers.description')}
						</p>
						<Link href={`/${locale}/demo-customer`}>
							<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold hover:cursor-pointer transition-all w-fit hover:bg-blue-700">
								{t('homepage.customers.cta')} <ArrowUpRight size={28} />
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Business Model */}
			<div className="flex items-center justify-center my-8">
				<Image
					src="/bussiness.png"
					height={400}
					width={600}
					alt={t('homepage.businessModel.alt')}
				/>
			</div>

			{/* Core Advantages */}
			<div className="flex flex-col items-center justify-center mb-8">
				<h3
					className={`${trispace.className} tracking-tight lg:mt-8 mb-8 text-3xl lg:text-4xl font-semibold text-blue-800`}
				>
					{t('homepage.features.title')}
				</h3>

				<div className="flex flex-col gap-8">
					<div className="flex justify-center gap-8 mx-auto flex-col lg:flex-row">
						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature1.title')}
								imgSrc="/anywhere-2.png"
								content={t('homepage.features.feature1.content')}
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature2.title')}
								imgSrc="/negotiatio-1.png"
								content={t('homepage.features.feature2.content')}
							/>
						</div>
					</div>

					<div className="flex justify-center flex-col lg:flex-row gap-8">
						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature3.title')}
								imgSrc="/support.png"
								content={t('homepage.features.feature3.content')}
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature4.title')}
								imgSrc="/analytics.png"
								content={t('homepage.features.feature4.content')}
							/>
						</div>
					</div>

					<div className="flex justify-center items-center flex-col lg:flex-row gap-8">
						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature5.title')}
								imgSrc="/contract.png"
								content={t('homepage.features.feature5.content')}
							/>
						</div>

						<div className="flex-1">
							<FeatureCard
								title={t('homepage.features.feature6.title')}
								imgSrc="/interface.png"
								content={t('homepage.features.feature6.content')}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* How it works */}
			<div className="flex flex-col items-center">
				<h3
					className={`${trispace.className} tracking-tight mt-8 mb-8 font-semibold text-4xl text-blue-800`}
				>
					{t('homepage.howItWorks.title')}
				</h3>
				<div>
					<HowWorks number="1" content={t('homepage.howItWorks.step1')} />
					<HowWorks number="2" content={t('homepage.howItWorks.step2')} />
					<HowWorks number="3" content={t('homepage.howItWorks.step3')} />
				</div>
			</div>

			{/* Download app */}
			<div className="flex flex-col justify-center items-center px-8">
				<div className="lg:w-2/5 flex flex-col justify-center items-center">
					<h3
						className={`${trispace.className} tracking-tight mt-8 mb-2 font-semibold text-3xl text-nowrap lg:text-4xl text-blue-800`}
					>
						{t('homepage.download.title')}
					</h3>
					<p className="text-center text-xl lg:text-2xl">
						{t('homepage.download.description')}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row my-12 gap-12">
					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/android.png"
							alt={t('homepage.download.androidAlt')}
							height={160}
							width={160}
						/>
						<a
							href="https://play.google.com/store/apps/details?id=com.tsilteam.Exchangev2&hl=en_IN"
							target="_blank"
							className="flex gap-2 items-center bg-blue-600 border-3 border-blue-600 text-white px-6 py-3 rounded-md text-xl tracking-wide font-semibold hover:bg-blue-700 cursor-pointer"
						>
							{t('homepage.download.downloadNow')}
						</a>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/app-store.png"
							alt={t('homepage.download.iosAlt')}
							height={160}
							width={160}
						/>
						<button className="flex gap-2 items-center border-3 box-border tracking-wide border-blue-600 text-blue-600 px-6 py-3 rounded-md text-xl font-semibold hover:bg-gray-100 cursor-pointer">
							{t('homepage.download.comingSoon')}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
