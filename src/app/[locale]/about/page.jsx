import Image from 'next/image';
import LeadershipCard from '@/components/LeadershipCard';
import { Trispace } from 'next/font/google';
import { useTranslation } from '../../i18n'; // ⬅️ add translation hook

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const About = async ({ params }) => {
	const { locale } = await params;
	const { t } = await useTranslation(locale, 'common'); // ⬅️ Using common.json

	return (
		<div className="">
			{/* <div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-[72px]">
				<Image
					src="/team.JPG"
					alt="TWI Team"
					fill
					className="object-cover"
					priority
				/>
			</div> */}

			{/* Header */}
			<div className="w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100 mt-[72px]">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					{t('about.header.title')}
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					{t('about.header.description')}
				</p>
			</div>

			{/* Leadership */}
			<div className="flex flex-col items-center mb-16">
				<h3
					className={`${trispace.className} mt-8 mb-2 tracking-tight text-center font-semibold text-2xl lg:text-4xl text-blue-800`}
				>
					{t('about.leadership.title')}
				</h3>
				<h4
					className={`${trispace.className} mb-4 tracking-tight font-semibold text lg:text-2xl text-gray-800`}
				>
					{t('about.leadership.subtitle')}
				</h4>
				<p className="text-gray-800 ml-8 mb-8 lg:max-w-2/4 text-center text-2xl">
					{t('about.leadership.description')}
				</p>

				<LeadershipCard />
			</div>

			{/* Industries We Serve */}
			<div className="w-full flex flex-col items-center px-4">
				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-8">
					<div className="relative w-full h-full flex-1">
						<img
							src="/industry.png"
							alt="industries"
							className="rounded-md w-full h-fit"
						/>
					</div>

					<div className="flex-1 font-semibold">
						<h4
							className={`${trispace.className} text-2xl mb-2 lg:text-left text-center`}
						>
							{t('about.industries.title')}
						</h4>

						<ul className="list-disc px-5 pb-2">
							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.industries.agri.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.industries.agri.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.industries.coldChain.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.industries.coldChain.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.industries.manufacturing.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.industries.manufacturing.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.industries.chemicals.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.industries.chemicals.content')}
								</p>
							</li>
						</ul>
					</div>
				</div>

				{/* Core Values */}
				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-4 lg:gap-8">
					<div className="relative w-full h-full flex-1">
						<img
							src="/values-2.jpeg"
							alt="core values"
							className="rounded-md w-full h-full"
						/>
					</div>

					<div className="flex-1 font-semibold">
						<h4
							className={`${trispace.className} text-2xl text-center lg:text-left`}
						>
							{t('about.values.title')}
						</h4>

						<ul className="list-disc px-5 pb-2">
							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.values.integrity.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.values.integrity.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.values.excellence.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.values.excellence.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.values.innovation.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.values.innovation.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.values.customerFocus.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.values.customerFocus.content')}
								</p>
							</li>

							<li>
								<span className="text-2xl lg:text-xl font-normal">
									{t('about.values.collaboration.title')}
								</span>
								<p className="text-xl lg:text-lg text-gray-700">
									{t('about.values.collaboration.content')}
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
