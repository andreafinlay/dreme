import React, { useState, useEffect } from 'react';
import { Breakpoint, Orientation } from '../types/tokens';

export type BreakpointsState = {
    [k: string]: boolean | undefined;
};

export type OrientationState = {
    portrait: boolean;
    landscape: boolean;
};

export type DeviceState = {
    isMobile: boolean;
    isDesktop: boolean;
    isAndroid: boolean;
    isIos: boolean;
};

export type ResponsiveState = {
    breakpoints: BreakpointsState;
    orientation: OrientationState;
    device: DeviceState;
};

export const ResponsiveContext = React.createContext<ResponsiveState>({
    breakpoints: {},
    orientation: {
        portrait: false,
        landscape: false,
    },
    device: {
        isMobile: false,
        isDesktop: false,
        isAndroid: false,
        isIos: false,
    },
});

function registerBreakpoint(theme, size: Breakpoint): BreakpointsState {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const query = window.matchMedia(`(max-width: ${theme.breakpoints[size]})`);

        // Initial state
        setState(query.matches);

        // Future changes
        const listener = (e: any) => {
            setState(query.matches);
        };

        query.addListener(listener);

        return () => query.removeListener(listener);
    }, [theme]);

    return {
        [size]: state,
    };
}

function registerOrientation(): OrientationState {
    if (typeof window === 'undefined') {
        return { portrait: false, landscape: false };
    }

    const mql = window.matchMedia('(orientation: portrait)');

    const updateOrientation = m => (m.matches ? 'portrait' : 'landscape');

    const [orientation, setOrientation] = useState<Orientation>(updateOrientation(mql.matches));

    useEffect(() => {
        const updateOrientationHandler = m => setOrientation(updateOrientation(m));

        mql.addListener(updateOrientationHandler);

        return mql.removeListener(updateOrientationHandler);
    }, []);

    return {
        portrait: orientation === 'portrait',
        landscape: orientation === 'landscape',
    };
}

function registerDevice(): DeviceState {
    if (typeof window === 'undefined') {
        return { isMobile: false, isDesktop: false, isAndroid: false, isIos: false };
    }
    const { userAgent } = navigator;

    const isOpera = Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = Boolean(userAgent.match(/IEMobile/i));

    const isAndroid = Boolean(userAgent.match(/Android/i));
    const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isMobile = Boolean(isAndroid || isIos || isOpera || isWindows);
    const isDesktop = !isMobile;

    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
    };
}

export const ResponsiveProvider: React.FC<any> = ({ children, theme }) => {
    const state = {
        breakpoints: {
            ...registerBreakpoint(theme, 'xs'),
            ...registerBreakpoint(theme, 'sm'),
            ...registerBreakpoint(theme, 'md'),
            ...registerBreakpoint(theme, 'lg'),
            ...registerBreakpoint(theme, 'xl'),
            ...registerBreakpoint(theme, 'xxl'),
        },
        orientation: registerOrientation(),
        device: registerDevice(),
    };

    return <ResponsiveContext.Provider value={state}>{children}</ResponsiveContext.Provider>;
};
