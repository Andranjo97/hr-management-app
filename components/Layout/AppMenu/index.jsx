import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Typography } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';


import UIRoutes from '@constants/ui-routes';
import Flex from '@components/common/Flex';

import styles from './AppMenu.module.scss';

const { Title } = Typography;

UIRoutes.people.icon = <UserOutlined className={styles.menuItemIcon} />;
UIRoutes.calendar.icon = <CalendarOutlined className={styles.menuItemIcon} />;

const AppMenu = () => {
    return (
        <Menu
            className={`${styles.navBar} app-blue-shade-bg-color`}
            mode='inline'
            defaultSelectedKeys={[UIRoutes.people.key]}
        >
            <Link className={`${styles.logo} app-blue-bg-color`} href={UIRoutes.people.route}>
                <>
                    <Image src='/favicon-32x32.png' alt='HR Logo' width={25} height={25} />
                    <Title level={3}>HR App</Title>
                </>
            </Link>
            <Menu.Divider />
            <Menu.Item key={UIRoutes.people.key}>
                <Link href={UIRoutes.people.route}>
                    <Flex>
                        {UIRoutes.people.icon}
                        <Title className={styles.menuItemLabel} level={5}>
                            {UIRoutes.people.label}
                        </Title>
                    </Flex>
                </Link>
            </Menu.Item>
            <Menu.Item key={UIRoutes.calendar.key}>
                <Link href={UIRoutes.calendar.route}>
                    <Flex>
                        {UIRoutes.calendar.icon}
                        <Title className={styles.menuItemLabel} level={5}>
                            {UIRoutes.calendar.label}
                        </Title>
                    </Flex>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default memo(AppMenu);
