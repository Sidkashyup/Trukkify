import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone, Mail, MapPinHouse } from 'lucide-react';
import { Trispace } from 'next/font/google';
import { useTranslation } from '@/app/i18n';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Contact = async ({ params }) => {
	const { locale } = await params;
	const { t } = await useTranslation(locale, 'common');
	return (
		<div>
			{/* <Navbar /> */}
			<div className="mt-[72px] w-full flex-col flex items-center py-6 text-2xl gap-4 px-2 bg-orange-100">
				<h1
					className={`${trispace.className} font-semibold text-yellow-950 tracking-tight md:text-4xl`}
				>
					{t('contact.header.title')}
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					{t('contact.header.description')}
				</p>
			</div>
			<div className="block md:hidden">
				<form
					action=""
					className="mx-4 p-6 shadow-lg border border-gray-400 flex flex-col gap-6 mt-6 rounded-md"
				>
					<div id="inputs" className="flex flex-col gap-2">
						<div>
							<label htmlFor="name">{t('contact.form.name')}</label>
							<Input
								id="name"
								type="text"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="company">{t('contact.form.company')}</label>
							<Input
								id="company"
								type="text"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="name">{t('contact.form.email')}</label>
							<Input
								id="email"
								type="email"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="name">{t('contact.form.phone')}</label>
							<Input
								id="phone"
								type="number"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="message">{t('contact.form.message')}</label>
							<Textarea
								id="message"
								type="number"
								className="border rounded-sm border-black"
							/>
						</div>
					</div>

					<button className="flex tracking-wide bg-blue-600 items-center justify-center py-2 text-white text-lg gap-2">
						{t('contact.form.send')}
						<Send color="white" size={20} />
					</button>
				</form>
			</div>

			<div className="hidden md:block max-w-[1100px] mx-auto my-8">
				<div className="mx-4 md:mx-0 p-6 shadow-lg border gap-3 border-gray-400 flex rounded-md">
					{/* Image */}
					<div className="relative w-[496px] h-[478px]">
						<Image src="/truckImage.png" fill alt="truck image" />
					</div>

					{/* Divider */}
					<div className="w-px bg-gray-900"></div>

					{/* Form */}
					<form action="" className="flex-1">
						<div className="space-y-4">
							<div id="inputs" className="flex flex-col gap-2">
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										{t('contact.form.name')}
									</label>
									<Input
										id="name"
										type="text"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="company"
										className="md:text-xl md:font-semibold"
									>
										{t('contact.form.company')}
									</label>
									<Input
										id="company"
										type="text"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										{t('contact.form.email')}
									</label>
									<Input
										id="email"
										type="email"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										{t('contact.form.phone')}
									</label>
									<Input
										id="phone"
										type="number"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="message"
										className="md:text-xl md:font-semibold"
									>
										{t('contact.form.message')}
									</label>
									<Textarea
										id="message"
										type="message"
										rows={4}
										className="border rounded-sm border-black"
									/>
								</div>
							</div>

							<button className="flex w-full tracking-wide rounded-md hover:cursor-pointer hover:scale-102 transition-all bg-blue-600 items-center justify-center py-2 text-white text-xl gap-2">
								{t('contact.form.send')}
								<Send color="white" size={20} />
							</button>
						</div>
					</form>
				</div>
				
			</div>

			{/* <div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>

				</div>
			</div> */}

			{/* <Footer /> */}
		</div>
	);
};
export default Contact;
