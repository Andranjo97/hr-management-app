import PropTypes from 'prop-types';
import { Avatar, Typography } from 'antd';
import MongoDBClient from '@services/clients/MongoClient';
import Flex from '@components/common/Flex';
import { POSITIONS } from '@constants/positions';

const { Title, Text } = Typography;

const PersonDetails = ({ person }) => {
	if (!person) {
		return <span>There seems to be an error!</span>;
	}

	const fullName = `${person.firstName} ${
		person.middleName ? `${person.middleName} ` : ''
	}${person.lastName}`;

	return (
		<div>
			<Flex>
				<Avatar size={128} src={person.profilePicUrl} />
				<Flex column style={{ marginLeft: '1rem' }} justify='center'>
					<Title level={3}>{fullName}</Title>
					<Text>{person.position}</Text>
				</Flex>
			</Flex>
		</div>
	);
};

export async function getStaticPaths() {
	const people = await MongoDBClient.getWithLimit('People');
	const defaultPaths = people.map((person) => ({
		params: { personId: person._id },
	}));

	return {
		paths: defaultPaths,
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { personId } = context.params;
	const person = await MongoDBClient.getOneByAttribute(
		'_id',
		personId,
		'People'
	);

	return {
		props: {
			person: { ...person, position: POSITIONS[person.position] },
		},
	};
}

export const PersonProp = PropTypes.shape({
	_id: PropTypes.string,
	firstName: PropTypes.string,
	middleName: PropTypes.string,
	lastName: PropTypes.string,
	dob: PropTypes.string,
	startDate: PropTypes.string,
	position: PropTypes.string,
	profilePicUrl: PropTypes.string,
	email: PropTypes.string,
});

PersonDetails.propTypes = {
	person: PersonProp,
};

export default PersonDetails;
