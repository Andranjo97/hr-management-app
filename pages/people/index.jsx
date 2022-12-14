import PropTypes from 'prop-types';
import { Typography, List } from 'antd';
import { POSITIONS } from '@constants/positions';
import PersonCard from '@components/PersonCard';
import MongoDBClient from '@services/clients/MongoClient';
import { PersonProp } from './[personId]';

const { Title } = Typography;

const People = ({ people }) => {
	if (!people.length) {
		return (
			<div className='centered'>
				<Title className='gray-text'>
          Seems like you need to hire
					<br />
          some people!
				</Title>
			</div>
		);
	}

	return (
		<List
			dataSource={people}
			renderItem={(person) => <PersonCard person={person} />}
		/>
	);
};

export async function getStaticProps() {
	const people = await MongoDBClient.getAll('People');

	return {
		props: {
			people: people.map((person) => ({
				...person,
				position: POSITIONS[person.position],
			})),
		},
	};
}

People.propTypes = {
	people: PropTypes.arrayOf(PersonProp),
};

export default People;
