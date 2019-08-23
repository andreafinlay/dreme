import { css } from 'styled-components';

import { FontWeight, FontSize, Breakpoint, Spacing } from './tokens';
import { stripUnit } from '../utils';

const baseFontSize = '15px';

const containers = {
    xs: '324px',
    sm: '512px',
    md: '512px',
    lg: '936px',
    xl: '1280px',
};

// Base Unit
const BASE_UNIT = 4;
const BASE_UNIT_REM = 4 / stripUnit(baseFontSize);
const baseUnit = (multiplier: number) => `${multiplier * BASE_UNIT}px`;

const space = {
    none: baseUnit(0),
    xxs: baseUnit(1),
    xs: baseUnit(2),
    sm: baseUnit(3),
    md: baseUnit(4),
    lg: baseUnit(5),
    xl: baseUnit(6),
    xxl: baseUnit(9),
    jb: baseUnit(12),
    mg: baseUnit(18),
};

const spacing = (amount: Spacing): string => {
    if (amount in space) {
        return space[amount];
    } else if (amount === 'auto') {
        return amount;
    } else {
        let value = amount as number;
        return baseUnit(value);
    }
};

// Font Family
const fontFamily = {
    base: `'NTR',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto, '
        Helvetica Neue',
        Arial,
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol'`,
};

// Font Sizes
const fontSize: { [key in FontSize]: string } = {
    xs: '0.7333333rem',
    sm: '0.8666667rem',
    base: '1rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.6rem',
    xxl: '2rem',
    jb: '3.2rem',
    mg: '4rem',
};

// Font weights
const fontWeights: { [key in FontWeight]: number } = {
    light: 300,
    regular: 400,
    bold: 700,
    extrabold: 900,
};

// Line heights
const lineHeight: { [key in FontSize]: string } = {
    xs: baseUnit(4),
    sm: baseUnit(5),
    base: baseUnit(6),
    md: baseUnit(6),
    lg: baseUnit(7),
    xl: baseUnit(9),
    xxl: baseUnit(10),
    jb: baseUnit(15),
    mg: baseUnit(16),
};

// Breakpoints
const breakpoints: { [key in Breakpoint]: string } = {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1330px',
};

// Breakpoint Function
// tslint:disable-next-line:no-shadowed-variable
const breakpoint = (breakpoint: Breakpoint = 'md') => (
    literals: TemplateStringsArray,
    ...args: any[]
) => css`
    @media (max-width: ${breakpoints[breakpoint]}) {
        ${css(literals, ...args)}
    }
`;

const borderRadius = {
    base: '5px',
};

const palette = {
    primary: {
        100: '#EBEDFF',
        200: '#DEE5FF',
        300: '#C8D7FF',
        400: '#ABC7FE',
        500: '#88B5F6',
        600: '#739AE5',
        700: '#5E7ED2',
        800: '#4D65C0',
        900: '#4151B2',
    },
    secondary: {
        300: '#E9D8FF',
        400: '#DDCDFF',
        500: '#C9BAFF',
        600: '#B6A3EF',
        700: '#A18ADC',
    },
    tertiary: {
        300: '#B5FDFD',
        400: '#97F9F9',
        500: '#75F4F4',
        600: '#58EBEB',
        700: '#40E2E3',
    },
    neutral: {
        100: '#FBF6FF',
        200: '#ECE8F0',
        300: '#DDDAE2',
        400: '#BEB8C9',
        500: '#948CA9',
        600: '#686085',
        700: '#454065',
        800: '#2F2D4C',
        900: '#22223B',
    },
    danger: {
        300: '#FFA2A3',
        400: '#F47D87',
        500: '#EA5B70',
        600: '#F43545',
        700: '#FF2F32',
    },
    warning: {
        300: '#FFF89A',
        400: '#F9E872',
        500: '#F3D44C',
        600: '#F9DD18',
        700: '#FFEF0C',
    },
    success: {
        300: '#B5FDFD',
        400: '#97F9F9',
        500: '#75F4F4',
        600: '#58EBEB',
        700: '#40E2E3',
    },
    facebook: { 500: '#4267b2', 700: '#35528e' },
    twitter: { 500: '#00aced', 700: '#008abe' },
};

const components = {};

const theme: any = {
    BASE_UNIT,
    BASE_UNIT_REM,
    baseUnit,
    containers,
    spacing,
    space,
    palette,
    fontFamily,
    fontSize,
    fontWeights,
    baseFontSize,
    lineHeight,
    breakpoints,
    breakpoint,
    components,
    borderRadius,
};

export { theme };
