import styled, { css } from 'styled-components';
import { palette, spacing } from '../../utils';
import { Button, ButtonProps } from '../Button';

const Calendar = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CalendarGrid = styled('div')`
    display: grid;
    height: 80%;
    grid-template: repeat(7, auto) / repeat(7, auto);
    grid-gap: ${spacing('xs')};
    padding-right: ${spacing('md')};
    padding-left: ${spacing('md')};
`;

const Header = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${spacing('xs')};
    color: ${palette('primary', '500')};
`;

const Arrow = styled(Button)<ButtonProps>``;

const CalendarDay = styled.div`
    color: ${palette('primary', '500')};
    border: 1px solid transparent;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
`;

const CalendarDate = styled.div<{ inMonth?: boolean }>`
    cursor: pointer;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    color: ${palette('primary', '500')};
    transition: all 0.4s ease-out;
    :hover {
        color: ${palette('secondary', '700')};
        border-right: 1px solid ${palette('secondary', '700')};
        border-top: 1px solid ${palette('secondary', '700')};
    }
    padding-top: ${spacing('xs')};
    padding-left: ${spacing('xs')};
    ${({ inMonth }) =>
        !inMonth &&
        css`
            color: ${palette('neutral', '400')};
            :hover {
                color: ${palette('secondary', '700')};
                border-right: 1px solid ${palette('secondary', '700')};
                border-top: 1px solid ${palette('secondary', '700')};
            }
        `}
`;

const HighlightedCalendarDate = styled(CalendarDate)`
    color: ${palette('secondary', '700')};
    border-right: 1px solid ${palette('secondary', '700')};
    border-top: 1px solid ${palette('secondary', '700')};
`;

const TodayCalendarDate = styled(HighlightedCalendarDate)`
    color: ${palette('primary', '500')};
    border-right: 1px solid ${palette('primary', '500')};
    border-top: 1px solid ${palette('primary', '500')};
`;

export const Styled = {
    Arrow,
    Header,
    Calendar,
    CalendarDay,
    CalendarGrid,
    CalendarDate,
    HighlightedCalendarDate,
    TodayCalendarDate,
};
