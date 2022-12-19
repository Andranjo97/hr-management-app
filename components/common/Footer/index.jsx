import { memo } from 'react';
import { useMediaQuery } from '@utils/hooks';
import { mediaSm } from '@styles/export.module.scss';

const Footer = () => {
    const isSmallScreen = useMediaQuery(mediaSm);
    const label = isSmallScreen ? 'J. A. Naranjo' : 'Jonathan Andrés Naranjo';

    return (
        <footer>
            <span>{label}</span>
        </footer>
    );
};

export default memo(Footer);

'{"id": {"S": "USR#tEnmsa7Cuhtr"}, "sk": {"S": "USR#tEnmsa7Cuhtr"}, "firstName": {"S": "Astrid"}, "lastName": {"S": "Schneider"}, "dob": {"S": "1988-11-15T00:00:00-05:00"}, "startDate": {"S":"2017-03-12T00:00:00-05:00"}, "position": {"S":"hr"}, "profilePicUrl": {"S":"https://ca.slack-edge.com/T03VCBF1Z-U4ETV7S6N-329d70e36545-512"}, "email": {"S": "aschneider@company.com"}}'
