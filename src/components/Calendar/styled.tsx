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
    grid-template-columns: repeat(7, minmax(${spacing('md')}, 1fr));
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

const Title = styled.div`
    pointer-events: none;
`;

const Arrow = styled(Button)<ButtonProps>``;

const CalendarDay = styled.div`
    grid-column: ${props => (props.index % 7) + 1} / span 1;
    color: ${palette('primary', '500')};
    border: 1px solid transparent;
    display: flex;
    align-items: flex-start;
    pointer-events: none;
`;

const CalendarDate = styled.div<{ inMonth?: boolean }>`
    grid-column: ${props => (props.index % 7) + 1} / span 1;
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
    Title,
    Calendar,
    CalendarDay,
    CalendarGrid,
    CalendarDate,
    HighlightedCalendarDate,
    TodayCalendarDate,
};
