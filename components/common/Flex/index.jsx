import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Flex.module.scss';

const Flex = forwardRef((
    {
        children,
        className,
        column = false,
        align = 'normal',
        justify = 'normal',
        gap,
        center,
        style,
        fullHeight,
        fullWidth,
        maxWidth,
        fitWidth,
        ...rest
    },
    ref,
) => {
    const classes = cn(styles['container'], className, {
        [styles['container--row']]: !column,
        [styles['container--column']]: column,
        [styles['container--alignCenter']]: align === 'center' || center,
        [styles['container--alignStart']]: align === 'start',
        [styles['container--alignEnd']]: align === 'end',
        [styles['container--alignBaseline']]: align === 'baseline',
        [styles['container--justifyCenter']]: justify === 'center' || center,
        [styles['container--justifyStart']]: justify === 'start',
        [styles['container--justifyEnd']]: justify === 'end',
        [styles['container--justifyBetween']]: justify === 'between',
        [styles['container--justifyAround']]: justify === 'around',
        [styles['container--justifyEvenly']]: justify === 'evenly',
        [styles['container--1gap']]: gap === 1,
        [styles['container--2gap']]: gap === 2,
        [styles['container--3gap']]: gap === 3,
        [styles['container--4gap']]: gap === 4,
        [styles['container--5gap']]: gap === 5,
        [styles['container--fullHeight']]: fullHeight,
        [styles['container--fullWidth']]: fullWidth,
        [styles['container--maxWidth']]: maxWidth,
        [styles['container--fitWidth']]: fitWidth,
    });

    return (
        <div className={classes} ref={ref} style={style} {...rest}>
            {children}
        </div>
    );
});

Flex.displayName = 'Flex';

export default Flex;
