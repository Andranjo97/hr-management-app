import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import MongoDBClient from '../../services/clients/MongoClient';

const PersonDetails = ({ person }) => {
    if (!person) {
        return <span>There seems to be an error!</span>
    }

    return (
        <div>
            <Avatar size={128} src={person.profilePicUrl}/>
            {person.firstName}
        </div>
    );
};

export async function getStaticPaths() {
    const people = await MongoDBClient.getWithLimit('People');
    const defaultPaths = people.map(person => ({ params: { personId: person._id } }));

    return {
        paths: defaultPaths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { personId } = context.params;
    const person = await MongoDBClient.getOneByAttribute('_id', personId, 'People');

    return {
        props: {
            person,
        }
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
