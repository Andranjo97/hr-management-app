import Link from 'next/link';
import { Menu, Typography } from 'antd';
import Flex from '@components/common/Flex';

const { Title } = Typography;
const { Item } = Menu;

const AppMenuItem = ({ route }) => {
    return (
        <Menu.Item key={route.key}>
            <Link href={route.route}>
                <Flex>
                    {route.icon}
                    <Title level={5}>
                        {route.label}
                    </Title>
                </Flex>
            </Link>
        </Menu.Item>
    );
};

export default AppMenuItem;
