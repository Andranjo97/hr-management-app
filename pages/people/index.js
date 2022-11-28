import Link from 'next/link';

const People = () => {
    return (
        <ul>
            <Link href={`/people/${1}`}>
                <li>Person 1</li>
            </Link>
            <Link href={`/people/${2}`}>
                <li>Person 2</li>
            </Link>
            <Link href={`/people/${3}`}>
                <li>Person 3</li>
            </Link>
        </ul>
    );
};

export default People;
