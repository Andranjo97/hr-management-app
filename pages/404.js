import Image from 'next/image';
import { Typography } from 'antd';

import styles from '../styles/404.module.css';

const { Title } = Typography;

const Custom404 = () => {
    return (
        <div className={styles.container}>
            <Image src='/apple-touch-icon.png' alt='HR Logo' width={80} height={80} />
            <Title>Oops! Not found</Title>
        </div>
    );
};

export default Custom404;
