/**
 * Spacing scale
 * Base unit: 8px
 * Derived from logo unit discipline
 */

export const spacing = {
  xxs: 4,   // micro adjustments
  xs: 8,    // 1X
  sm: 12,
  md: 16,   // 2X
  lg: 24,   // 3X
  xl: 32,   // 4X
  xxl: 48,  // 6X
  xxxl: 64  // 8X
} as const;

export type SpacingKey = keyof typeof spacing;

/**
 * Helper for inline styles
 */
export const space = (key: SpacingKey): number => spacing[key];

