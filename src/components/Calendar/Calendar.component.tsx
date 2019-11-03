import React, { useState, useEffect, useRef } from 'react';
import { WEEK_DAYS, CALENDAR_MONTHS } from '../../constants';
import { Styled } from './styled';
import calendar, {
    isDate,
    isSameDay,
    isSameMonth,
    getDateISO,
    getNextMonth,
    getPreviousMonth,
} from '../../helpers/calendar';

export interface CalendarProps {
    date?: any;
    onDateChanged?: any;
}

const Calendar: React.FC<CalendarProps> = ({ date, onDateChanged }) => {
    let dayTimeout;
    let pressureTimeout;
    let pressureTimer;

    const [state, setState] = useState({
        today: new Date(),
        current: new Date(),
        month: +new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    const resolveStateFromDate = inputDate => {
        const _date = isDate(inputDate) ? inputDate : new Date();

        setState({
            ...state,
            current: isDate(inputDate) ? inputDate : new Date(),
            month: +_date.getMonth() + 1,
            year: _date.getFullYear(),
        });
    };

    const getCalendarDates = () => {
        const { current, month, year } = state;
        const calendarMonth = month || +current.getMonth() + 1;
        const calendarYear = year || current.getFullYear();

        return calendar(calendarMonth, calendarYear);
    };

    const gotoDate = inputDate => e => {
        e && e.preventDefault();
        const { current } = state;

        const onDateChangedHandler = () => {
            resolveStateFromDate(inputDate);
            typeof onDateChanged === 'function' && onDateChanged(inputDate);
        };

        !(current && isSameDay(inputDate, current)) && onDateChangedHandler();
    };

    const gotoPreviousMonth = () => {
        const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(state.month, state.year);
        setState({ ...state, month: prevMonth, year: prevMonthYear });
    };

    const gotoNextMonth = () => {
        const { month: nextMonth, year: nextMonthYear } = getNextMonth(state.month, state.year);
        setState({ ...state, month: nextMonth, year: nextMonthYear });
    };

    const gotoPreviousYear = () => {
        setState({ ...state, year: state.year - 1 });
    };

    const gotoNextYear = () => {
        setState({ ...state, year: state.year + 1 });
    };

    const handlePressure = fn => {
        if (typeof fn === 'function') {
            fn();
            pressureTimeout = setTimeout(() => {
                pressureTimer = setInterval(fn, 100);
            }, 500);
        }
    };

    const clearPressureTimer = () => {
        pressureTimer && clearInterval(pressureTimer);
        pressureTimeout && clearTimeout(pressureTimeout);
    };

    const handlePrevious = evt => {
        evt && evt.preventDefault();
        const fn = evt.shiftKey ? gotoPreviousYear : gotoPreviousMonth;
        handlePressure(fn);
    };

    const handleNext = evt => {
        evt && evt.preventDefault();
        const fn = evt.shiftKey ? gotoNextYear : gotoNextMonth;
        handlePressure(fn);
    };

    const clearDayTimeout = () => {
        dayTimeout && clearTimeout(dayTimeout);
    };

    const usePrevious = value => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };

    const prevDate = usePrevious(date);

    const renderMonthAndYear = () => {
        const { month, year } = state;

        const monthname = Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];

        return (
            <Styled.Header>
                <Styled.Arrow
                    onMouseDown={handlePrevious}
                    onMouseUp={clearPressureTimer}
                    title='Previous Month'
                    variant='primary'
                    kind='minimal'
                >
                    {'<'}
                </Styled.Arrow>
                {monthname} {year}
                <Styled.Arrow
                    onMouseDown={handleNext}
                    onMouseUp={clearPressureTimer}
                    title='Next Month'
                    variant='primary'
                    kind='minimal'
                >
                    {'>'}
                </Styled.Arrow>
            </Styled.Header>
        );
    };

    const renderDayLabel = (day, index) => {
        const daylabel = WEEK_DAYS[day].toUpperCase();
        return (
            <Styled.CalendarDay key={daylabel} index={index}>
                {daylabel}
            </Styled.CalendarDay>
        );
    };

    const renderCalendarDate = (inputDate, index) => {
        const { current, month, year, today } = state;
        const _date = new Date(inputDate.join('-'));

        const isToday = isSameDay(_date, today);

        const isCurrent = current && isSameDay(_date, current);

        const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join('-')));

        const onClick = gotoDate(_date);

        const props = { index, inMonth, onClick, title: _date.toDateString() };

        const DateComponent = isCurrent
            ? Styled.HighlightedCalendarDate
            : isToday
            ? Styled.TodayCalendarDate
            : Styled.CalendarDate;

        return (
            <DateComponent key={getDateISO(_date)} {...props}>
                {_date.getDate()}
            </DateComponent>
        );
    };

    useEffect(() => {
        const now = +new Date();
        const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
        const ms = tomorrow - now;
        const dateMatch = date === prevDate || isSameDay(date, prevDate);

        dayTimeout = setTimeout(() => {
            setState({ ...state, today: new Date() });
            clearDayTimeout();
        }, ms);

        const onDateMatchFailed = () => {
            resolveStateFromDate(date);
            typeof onDateChanged === 'function' && onDateChanged(date);
        };

        !dateMatch && onDateMatchFailed();

        return () => {
            clearPressureTimer();
            clearDayTimeout();
        };
    }, [
        date,
        isSameDay,
        dayTimeout,
        resolveStateFromDate,
        onDateChanged,
        clearDayTimeout,
        clearPressureTimer,
    ]);

    return (
        <Styled.Calendar>
            {renderMonthAndYear()}
            <Styled.CalendarGrid>
                <>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</>
                <>{getCalendarDates().map(renderCalendarDate)}</>
            </Styled.CalendarGrid>
        </Styled.Calendar>
    );
};

export { Calendar };
