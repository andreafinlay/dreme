import { css } from 'styled-components';
import { palette, fontSize } from '../../utils';

const BUTTON_HEIGHT = {
    xs: '24px',
    sm: '36px',
    md: '48px',
    lg: '64px',
};

const ButtonBase = css`
    font-weight: 700;
    padding: 0;
    text-decoration: none;
    a {
        text-decoration: none;
    }
`;

const ButtonSize = {
    xs: [
        css`
            font-size: ${fontSize('sm')};
            line-height: 16px;
            padding: 0 12px;
            height: ${BUTTON_HEIGHT.xs};
            width: ${BUTTON_HEIGHT.xs};
        `,
    ],
    sm: [
        css`
            font-size: ${fontSize('md')};
            line-height: 20px;
            padding: 0 16px;
            height: ${BUTTON_HEIGHT.sm};
            width: ${BUTTON_HEIGHT.sm};
        `,
    ],
    md: [
        css`
            font-size: ${fontSize('lg')};
            line-height: 24px;
            padding: 0 24px;
            height: ${BUTTON_HEIGHT.md};
            width: ${BUTTON_HEIGHT.md};
        `,
    ],
    lg: [
        css`
            font-size: ${fontSize('lg')};
            line-height: 24px;
            padding: 0 36px;
            height: ${BUTTON_HEIGHT.lg};
            width: ${BUTTON_HEIGHT.lg};
        `,
    ],
};

const ButtonKind = {
    minimal: css`
        background-color: transparent;
        padding: 0;
    `,
    outline: css`
        border-width: 1px;
        border-style: solid;
    `,
};

const ButtonShape = {
    default: css`
        border-radius: 2px;
    `,
    rounded: css`
        border-radius: 25px;
    `,
    round: css<{ size: string }>`
        width: ${({ size }) => BUTTON_HEIGHT[size]};
        padding: 0;
        border-radius: 100%;
    `,
};

const ButtonVariant: any = {
    primary: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('primary', '500')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('primary', '600')};
            `,
        },
        minimal: {
            normal: [
                css`
                    color: ${palette('primary', '500')};
                `,
            ],
            hover: css`
                color: ${palette('primary', '700')};
            `,
        },
        outline: {
            normal: [
                css`
                    border-color: ${palette('primary', '500')};
                    color: ${palette('primary', '500')};
                `,
            ],
            hover: css`
                border-color: ${palette('primary', '700')};
                color: ${palette('primary', '700')};
            `,
        },
    },
    secondary: {
        base: {
            normal: css`
                color: ${palette('neutral', '100')};
                background-color: ${palette('neutral', '900')};
            `,
            hover: css`
                color: ${palette('neutral', '100')};
                background-color: ${palette('neutral', '700')};
            `,
        },
        minimal: {
            normal: css`
                color: ${palette('neutral', '300')};
            `,

            hover: css`
                color: ${palette('neutral', '500')};
            `,
        },
        outline: {
            normal: css`
                color: ${palette('neutral', '0')};
                border-color: ${palette('neutral', '0')};
            `,
            hover: css`
                color: ${palette('neutral', '300')};
                border-color: ${palette('neutral', '300')};
            `,
        },
    },
    ghost: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('neutral', '800')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('neutral', '700')};
            `,
        },
        minimal: {
            normal: css`
                color: ${palette('neutral', '800')};
            `,
            hover: css`
                color: ${palette('neutral', '700')};
            `,
        },
        outline: {
            normal: css`
                color: ${palette('neutral', '0')};
                border-color: ${palette('neutral', '700')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                border-color: ${palette('neutral', '700')};
                background-color: ${palette('neutral', '700')};
            `,
        },
    },
    inverted: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('neutral', '1000')};
            `,
            hover: css`
                color: ${palette('neutral', '300')};
                background-color: ${palette('neutral', '1000')};
            `,
        },
        minimal: {
            normal: css`
                color: ${palette('neutral', '0')};
            `,
            hover: css`
                color: ${palette('neutral', '300')};
            `,
        },
        outline: {
            normal: css`
                color: ${palette('neutral', '0')};
                border-color: ${palette('neutral', '0')};
            `,
            hover: css`
                color: ${palette('neutral', '300')};
                border-color: ${palette('neutral', '300')};
            `,
        },
    },
    danger: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('danger', '500')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('danger', '700')};
            `,
        },
        minimal: {
            normal: [
                css`
                    color: ${palette('danger', '500')};
                `,
            ],
            hover: css`
                color: ${palette('danger', '700')};
            `,
        },
        outline: {
            normal: [
                css`
                    color: ${palette('danger', '500')};
                    border-color: ${palette('danger', '500')};
                `,
            ],
            hover: css`
                color: ${palette('danger', '700')};
                border-color: ${palette('danger', '700')};
            `,
        },
    },
    warning: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('warning', '500')};
                border-color: ${palette('warning', '500')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('warning', '700')};
                border-color: ${palette('warning', '700')};
            `,
        },
        minimal: {
            normal: css`
                color: ${palette('warning', '500')};
            `,
            hover: css`
                color: ${palette('warning', '700')};
            `,
        },
        outline: {
            normal: css`
                color: ${palette('warning', '500')};
                border-color: ${palette('warning', '500')};
            `,
            hover: css`
                color: ${palette('warning', '700')};
                border-color: ${palette('warning', '700')};
            `,
        },
    },
    success: {
        base: {
            normal: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('success', '500')};
                border-color: ${palette('success', '500')};
            `,
            hover: css`
                color: ${palette('neutral', '0')};
                background-color: ${palette('success', '700')};
                border-color: ${palette('success', '700')};
            `,
        },
        minimal: {
            normal: css`
                color: ${palette('success', '500')};
            `,
            hover: css`
                color: ${palette('success', '700')};
            `,
        },
        outline: {
            normal: css`
                color: ${palette('success', '500')};
                border-color: ${palette('success', '500')};
            `,
            hover: css`
                color: ${palette('success', '700')};
                border-color: ${palette('success', '700')};
            `,
        },
    },
};

const ButtonDisabled = {
    base: css`
        color: ${palette('neutral', '300')};
        background-color: ${palette('neutral', '100')};
        pointer-events: none;
    `,
    minimal: css`
        color: ${palette('neutral', '300')};
    `,
    outline: css`
        color: ${palette('neutral', '300')};
        border-color: ${palette('neutral', '100')};
    `,
};

const config = {
    base: ButtonBase,
    size: ButtonSize,
    kind: ButtonKind,
    shape: ButtonShape,
    variant: ButtonVariant,
    disabled: ButtonDisabled,
    height: BUTTON_HEIGHT,
};

export { config };
