import PropTypes from 'prop-types';
import Link from 'next/link';
import MongoDBClient from '../../services/clients/MongoClient';
import { Typography, List, Avatar, Card } from 'antd';
import { POSITIONS } from '../../constants/positions';
import { PersonProp } from './[personId]';
import UIRoutes from '../../constants/ui-routes';

const { Title, Text } = Typography;

const People = ({ people }) => {
    if (!people.length) {
        return (
            <div className='centered'>
                <Title className='gray-text'>
                    Seems like you need to hire
                    <br/>
                    some people!
                </Title>
            </div>
        );
    }

    return (
        <List
            dataSource={people}
            renderItem={person => {
                const fullName = `${person.firstName} ${person.middleName ? `${person.middleName} ` : ''}${person.lastName}`;
                return (
                    <Card>
                        <Link href={`${UIRoutes.people.route}/${person._id}`}>
                            <List.Item>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Avatar size={100} src={person.profilePicUrl}/>
                                    <div style={{ marginLeft: '1rem' }}>
                                        <Title level={3}>{fullName}</Title>
                                        <Text style={{ color: 'gray' }}>{person.position}</Text>
                                        <br/>
                                        <Text style={{ color: 'gray' }}>{person.email}</Text>
                                    </div>
                                </div>
                            </List.Item>
                        </Link>
                    </Card>
                );
            }}
        />
    );
};

export async function getStaticProps() {
    const people = await MongoDBClient.getAll('People');

    return {
        props: {
            people: people.map(person => ({ ...person, position: POSITIONS[person.position] })),
        }
    };
}

People.propTypes = {
    people: PropTypes.arrayOf(PersonProp),
};

export default People;
