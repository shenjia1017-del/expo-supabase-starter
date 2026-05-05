// ⚠️ TODO for new projects:
// Replace the 8 brand colors below (primary + secondary groups) with your app's colors.
// Default values are a friendly blue, safe for initial render but not your brand.
// Semantic colors (Info / Success / Danger / Warning) and neutrals are pre-configured.

export const Colors = {
  // Primary - REPLACE with your app's main brand color
  primary: '#4A90E2',
  primaryDark: '#2A6FBF',
  primaryLight: '#D6E8FA',
  primaryBg: '#EAF3FB',

  // Secondary - REPLACE with your app's accent color
  secondary: '#FF6B9D',
  secondaryDark: '#C2185B',
  secondaryLight: '#FFE0EC',
  secondaryBg: '#FFF0F5',

  // Info - Sky Blue (semantic, keep as-is)
  info: '#4FC3F7',
  infoDark: '#0277BD',
  infoBg: '#E0F4FF',

  // Success (semantic, keep as-is)
  success: '#66BB6A',
  successDark: '#2E7D32',
  successBg: '#E8F5E9',

  // Danger (semantic, keep as-is)
  danger: '#EF5350',
  dangerDark: '#C62828',
  dangerBg: '#FFEBEE',

  // Warning (semantic, keep as-is)
  warning: '#FFB347',
  warningDark: '#BF6500',
  warningBg: '#FFF4E0',

  // Backgrounds
  bgCream: '#FFFBF5',
  bgWhite: '#FFFFFF',
  bgGray: '#F7F7F7',

  // Text
  textPrimary: '#2D2D2D',
  textSecondary: '#888888',
  textTertiary: '#BBBBBB',

  // Borders
  border: '#E5E5E5',
  borderLight: '#F0F0F0',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Radius = {
  small: 6,
  medium: 12,
  large: 16,
  button: 14,
  pill: 999,
};

export const FontSize = {
  tiny: 9,
  small: 10,
  body: 12,
  medium: 14,
  large: 16,
  xlarge: 20,
  title: 24,
  hero: 32,
};

export const Shadow = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
};
