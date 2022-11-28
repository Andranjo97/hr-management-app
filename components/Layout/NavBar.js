import Image from 'next/image';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

import styles from './NavBar.module.css';

const { Header } = Layout;

const NavBar = () => {
    return (
        <Header>
            <Menu
                mode='horizontal'
                defaultSelectedKeys={['people']}
            >
                <Link className={styles.logo} href='/people'>
                    <section>
                        <Image src='/favicon-32x32.png' alt='HR Logo' width={25} height={25} />
                    </section>
                    <h3>HR App</h3>
                </Link>
                <Menu.Divider />
                <Menu.Item key='people'>
                    <Link href='/people'>
                        People
                    </Link>
                </Menu.Item>
                <Menu.Item key='calendar'>
                    <Link href='/calendar'>
                        Calendar
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default NavBar;
