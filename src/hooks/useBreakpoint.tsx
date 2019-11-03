import { useContext } from 'react';
import { Breakpoint } from '../types/tokens';
import { ResponsiveState, ResponsiveContext } from '../utils/responsive';

/**
 * Check if screen max-width **<=** requested size.
 * @xs `320px`
 * @sm `480px`
 * @md `768px`
 * @lg `1024px`
 * @xl `1280px`
 * @xxl `1330px`
 */
export function useBreakpoint(size: Breakpoint): boolean {
    const state = useContext<ResponsiveState>(ResponsiveContext);

    // Return true/false
    return !!state.breakpoints[size];
}
