/**
 * Typography tokens
 * Neutral, legible, system-oriented
 */

export const typography = {
  fontFamily: {
    base: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    mono: `'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace`
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px'
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600
  },

  letterSpacing: {
    tight: '-0.01em',
    normal: '0',
    wide: '0.02em'
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7
  }
} as const;

