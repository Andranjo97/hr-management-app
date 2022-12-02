import Link from 'next/link';
import { Avatar, Card, List, Typography } from 'antd';
import UIRoutes from '../../constants/ui-routes';
import Flex from '@components/common/Flex';
import styles from './PersonCard.module.scss';

const { Title, Text } = Typography;

const PersonCard = ({ person }) => {
    const fullName = `${person.firstName} ${person.middleName ? `${person.middleName} ` : ''}${person.lastName}`;

    return (
        <Card className={styles.card}>
            <Link href={`${UIRoutes.people.route}/${person._id}`}>
                <List.Item>
                    <Flex>
                        <Avatar size={100} src={person.profilePicUrl}/>
                        <div className={styles.details}>
                            <Title level={3}>{fullName}</Title>
                            <Text className={styles.grayText}>{person.position}</Text>
                            <br/>
                            <Text className={styles.grayText}>{person.email}</Text>
                        </div>
                    </Flex>
                </List.Item>
            </Link>
        </Card>
    );
};

export default PersonCard;
