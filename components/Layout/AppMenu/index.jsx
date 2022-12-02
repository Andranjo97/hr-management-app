import Image from 'next/image';
import Link from 'next/link';
import { Menu, Typography } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

import styles from './AppMenu.module.scss';
import AppMenuItem from './AppMenuItem';
import UIRoutes from '@constants/ui-routes';

const { Title } = Typography;

UIRoutes.people.icon = <UserOutlined style={{ marginRight: '0.5rem' }} />;
UIRoutes.calendar.icon = <CalendarOutlined style={{ marginRight: '0.5rem' }} />;

const AppMenu = () => {
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
                        {UIRoutes.people.icon}
                        <Title level={5}>
                            {UIRoutes.people.label}
                        </Title>
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item key={UIRoutes.calendar.key}>
                <Link href={UIRoutes.calendar.route}>
                    <div style={{ display: 'flex' }}>
                        {UIRoutes.calendar.icon}
                        <Title level={5}>
                            {UIRoutes.calendar.label}
                        </Title>
                    </div>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default AppMenu;
