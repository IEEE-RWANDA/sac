import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dialogs from '../components/Dialogs';
export const metadata = {description: 'IEEE SAC Rwanda — student branches, opportunities, and resources.', icons: {icon: '/assets/brand/icon-32.png', apple: '/assets/brand/icon-180.png'}};
export default function RootLayout({children}) { return <html lang="en"><body><Header />{children}<Footer /><Dialogs /><Script src="/site.js" strategy="afterInteractive" /></body></html>; }
