export const VARIANTS = {
  TEXT: 'text',
  OUTLINED: 'outlined',
  CONTAINED: 'contained',
} as const;

export type VariantType = keyof typeof VARIANTS;

export const LETTER_CASE = {
  UPPERCASE: 'uppercase',
  CAPITALIZED: 'capitalize',
  INHERIT: 'inherit',
  UNSET: 'unset',
} as const;

export type LetterCaseType = keyof typeof LETTER_CASE;

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type SizeType = keyof typeof SIZES;
