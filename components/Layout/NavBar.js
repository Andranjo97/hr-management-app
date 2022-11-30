import Image from 'next/image';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

import styles from './NavBar.module.css';
import UIRoutes from '../../constants/ui-routes';

const { Header } = Layout;

const NavBar = () => {
    return (
        <Header className={styles.navBar}>
            <Menu
                mode='horizontal'
                defaultSelectedKeys={[UIRoutes.people.key]}
            >
                <Link className={styles.logo} href={UIRoutes.people.route}>
                    <section>
                        <Image src='/favicon-32x32.png' alt='HR Logo' width={25} height={25} />
                    </section>
                    <h3>HR App</h3>
                </Link>
                <Menu.Divider />
                <Menu.Item key={UIRoutes.people.key}>
                    <Link href={UIRoutes.people.route}>
                        {UIRoutes.people.label}
                    </Link>
                </Menu.Item>
                <Menu.Item key={UIRoutes.calendar.key}>
                    <Link href={UIRoutes.calendar.route}>
                        {UIRoutes.calendar.label}
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default NavBar;
