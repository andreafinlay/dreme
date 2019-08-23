import { rgba } from 'polished';

export const stripUnit = (str): number => parseFloat(str);

export const color = (name: string, variant: string) => ({ theme }): string =>
    theme.color[name][variant];
// tslint:disable-next-line:no-shadowed-variable
export const palette = (palette: string, shade: string, opacity: any = 1) => ({
    theme,
}): string => {
    return rgba(theme.palette[palette][shade], opacity);
};

export const spacing = (size: string) => ({ theme }): string => theme.spacing(size);

export const fontSize = (size: string) => ({ theme }): string => theme.fontSize[size];

export const lineHeight = (size: string) => ({ theme }): string => theme.lineHeight[size];

export const fontWeight = (weight: string) => (props: any) => props.theme.fontWeights[weight];

export const component = (name: string): any => ({ theme }): any => theme.components[name];
