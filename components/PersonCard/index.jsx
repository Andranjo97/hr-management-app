import Link from 'next/link';
import { Avatar, Card, List, Typography } from 'antd';
import Flex from '@components/common/Flex';
import UIRoutes from '@constants/ui-routes';
import styles from './PersonCard.module.scss';
import { mediaSm } from '@styles/export.module.scss';
import { useMediaQuery } from '@utils/hooks';

const { Title, Text } = Typography;

const PersonCard = ({ person }) => {
    const isSmallScreen = useMediaQuery(mediaSm);
    const fullName = (
        <Title level={isSmallScreen ? 4 : 3}>
            {`${person.firstName} ${person.middleName && !isSmallScreen ? `${person.middleName} ` : ''}${person.lastName}`}
        </Title>
    );

    return (
        <Card className={styles.card}>
            <Link href={`${UIRoutes.people.route}/${person._id}`}>
                <List.Item>
                    <Flex column={isSmallScreen}>
                        <Flex>
                            <div style={{ flex: '2' }}>
                                <Avatar size={isSmallScreen ? 70 : 100} src={person.profilePicUrl}/>
                            </div>
                            <div style={{ flex: '3' }}>
                                {isSmallScreen && fullName}
                            </div>
                        </Flex>
                        <Flex className={styles.details} column justify='evenly'>
                            <div>
                                {!isSmallScreen && fullName}
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
