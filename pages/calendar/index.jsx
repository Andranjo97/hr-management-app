import { Calendar, Badge, Typography } from 'antd';
import styles from './Calendar.module.scss';
import Flex from '@components/common/Flex';

const { Text } = Typography;

const HRCalendar = () => {
    const getMonthData = value => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const getListData = value => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'Holiday',
                    },
                    {
                        type: 'success',
                        content: 'Birthday',
                    },
                ];
                break;
            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'Holiday',
                    },
                    {
                        type: 'success',
                        content: 'Birthday',
                    },
                    {
                        type: 'error',
                        content: 'Birthday',
                    },
                ];
                break;
            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event。。....',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div>
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <Flex className={styles.dateCell} column>
                {listData.map((item) => (
                    <Text key={item.content} ellipsis>{item.content}</Text>
                ))}
            </Flex>
        );
    };

    const onChange = (value) => {
        console.log(value.format('YYYY-MM-DD'));
    };

    return (
        <Calendar
            className={styles.calendar}
            onChange={onChange}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
        />
    );
};

export default HRCalendar;
