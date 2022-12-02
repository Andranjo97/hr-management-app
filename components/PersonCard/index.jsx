import Link from 'next/link';
import { Avatar, Card, List, Typography } from 'antd';
import Flex from '@components/common/Flex';
import UIRoutes from '@constants/ui-routes';
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
                        <Flex className={styles.details} column justify='evenly'>
                            <div>
                                <Title level={3}>{fullName}</Title>
                            </div>
                            <div>
                                <Text className={styles.position}>{person.position}</Text>
                                <br/>
                                <Text className={styles.grayText}>{person.email}</Text>
                            </div>
                        </Flex>
                    </Flex>
                </List.Item>
            </Link>
        </Card>
    );
};

export default PersonCard;
