import Link from 'next/link';
import { Menu, Typography } from 'antd';

const { Title } = Typography;
const { Item } = Menu;

const AppMenuItem = ({ route }) => {
    return (
        <Item key={route.key}>
            <Link href={route.route}>
                <div style={{ display: 'flex' }}>
                    {route.icon}
                    <Title level={5}>
                        {route.label}
                    </Title>
                </div>
            </Link>
        </Item>
    );
};

export default AppMenuItem;
