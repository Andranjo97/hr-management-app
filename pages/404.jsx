import Image from 'next/image';
import { Typography } from 'antd';

const { Title } = Typography;

const Custom404 = () => {
    return (
        <div className='centered'>
            <Image src='/apple-touch-icon.png' alt='HR Logo' width={80} height={80} />
            <Title className='gray-text'>Oops! Not found</Title>
        </div>
    );
};

export default Custom404;
