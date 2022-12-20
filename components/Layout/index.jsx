import { useState, createElement } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Layout, ConfigProvider } from 'antd';
import Footer from '@components/common/Footer';
import { useMediaQuery } from '@utils/hooks';
import { mediaMd } from '@styles/export.module.scss';
import AppMenu from './AppMenu';
import styles from './Layout.module.scss';

const MenuFoldOutlined = dynamic(() =>
	import('@ant-design/icons/lib/icons/MenuFoldOutlined')
);
const MenuUnfoldOutlined = dynamic(() =>
	import('@ant-design/icons/lib/icons/MenuUnfoldOutlined')
);

const { Content, Sider, Header } = Layout;

const AppLayout = ({ children }) => {
	const isMediumScreen = useMediaQuery(mediaMd);

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#76b5c5',
				},
			}}
		>
			<Head>
				<title>HR App</title>
				<meta
					name='description'
					content='This is an app for HR Management using Next.js'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>

			<Layout className={`layout ${styles.container}`}>
				<Sider
					className={styles.sider}
					trigger={null}
					collapsible
					collapsed={isMediumScreen}
				>
					<AppMenu />
				</Sider>
				<Layout className='site-layout site-layout-background'>
					<Header className='app-blue-shade-bg-color' />
					<Content className={`site-layout-background ${styles.content}`}>
						{children}
					</Content>
					<Footer />
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

export default AppLayout;
