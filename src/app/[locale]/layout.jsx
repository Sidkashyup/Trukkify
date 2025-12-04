import { languages } from '../i18n/settings';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export async function generateStaticParams() {
	return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
	const { locale } = await params;

	return {
		icons: {
			icon: '/icon.png',
		},
		title: 'Trukkify: Smart Logistics for India',
		description:
			'TWI Exchange connects customers who need to ship cargo with trusted truck drivers across India. Manage contracts, track deliveries, and communicate — all in one streamlined logistics app.',
	};
}

// export const metadata = {};

export default async function RootLayout({ children, params }) {
	const { locale } = await params;

	return (
		<html lang={locale}>
			<body suppressHydrationWarning>
				<Navbar locale={locale} />
				<LanguageSwitcher locale={locale} />
				{children}
				<Footer locale={locale} />
			</body>
		</html>
	);
}
