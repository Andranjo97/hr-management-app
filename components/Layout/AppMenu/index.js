import Image from 'next/image';
import Link from 'next/link';
import { Menu, Typography } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

import UIRoutes from '../../constants/ui-routes';
import styles from './NavBar.module.css';

const { Title } = Typography;

const NavBar = () => {
    return (
        <Menu
            className={styles.navBar}
            mode='inline'
            defaultSelectedKeys={[UIRoutes.people.key]}
        >
            <Link className={styles.logo} href={UIRoutes.people.route}>
                <>
                    <Image src='/favicon-32x32.png' alt='HR Logo' width={25} height={25} />
                    <Title level={3}>HR App</Title>
                </>
            </Link>
            <Menu.Divider />
            <Menu.Item key={UIRoutes.people.key}>
                <Link href={UIRoutes.people.route}>
                    <div style={{ display: 'flex' }}>
                        <UserOutlined style={{ marginRight: '0.5rem' }} />
                        <Title level={5}>
                            {UIRoutes.people.label}
                        </Title>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item key={UIRoutes.calendar.key}>
                <Link href={UIRoutes.calendar.route}>
                    <div style={{ display: 'flex' }}>
                        <CalendarOutlined style={{ marginRight: '0.5rem' }} />
                        <Title level={5}>
                            {UIRoutes.calendar.label}
                        </Title>
                    </div>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default NavBar;
