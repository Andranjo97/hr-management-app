import { useState, createElement } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Layout, ConfigProvider } from 'antd';
import AppMenu from './AppMenu';

const MenuFoldOutlined = dynamic(() => import('@ant-design/icons/lib/icons/MenuFoldOutlined'))
const MenuUnfoldOutlined = dynamic(() => import('@ant-design/icons/lib/icons/MenuUnfoldOutlined'))

const { Content, Sider, Header } = Layout;

const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#fff',
                },
            }}
        >
            <Head>
                <title>HR App</title>
                <meta name='description' content='This is an app for HR Management using Next.js' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'/>
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
                <link rel='manifest' href='/site.webmanifest'/>
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5'/>
                <meta name='msapplication-TileColor' content='#da532c'/>
                <meta name='theme-color' content='#ffffff'/>
            </Head>

            <Layout className='layout h-100'>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <AppMenu />
                </Sider>
                <Layout className='site-layout site-layout-background'>
                    <Header
                        className='ant-menu-light'
                    >
                        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className='site-layout-background'
                        style={{
                            padding: 24,
                        }}
                    >
                        {children}
                    </Content>
                    <footer>
                        Jonathan Andres Naranjo
                    </footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AppLayout;
