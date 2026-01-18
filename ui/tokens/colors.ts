/**
 * Color tokens
 * Accent is UI-only — never alters logo geometry
 */

export const colors = {
  light: {
    background: '#FFFFFF',
    surface: '#F8F9FB',
    textPrimary: '#111111',
    textSecondary: '#555555',
    border: '#E5E7EB',
    accent: '#2563EB' // locked system blue
  },

  dark: {
    background: '#0B0D10',
    surface: '#151922',
    textPrimary: '#F5F7FA',
    textSecondary: '#9CA3AF',
    border: '#2A2F3A',
    accent: '#3B82F6'
  }
} as const;

export type ThemeMode = keyof typeof colors;
