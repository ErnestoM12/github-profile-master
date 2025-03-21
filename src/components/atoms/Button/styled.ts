import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { LETTER_CASE, LetterCaseType } from './constants';

interface ButtonProps {
  letterCase?: LetterCaseType;
  margin?: string;
  borderRadius?: string;
}

const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'letterCase' && prop !== 'margin' && prop !== 'borderRadius', // Evitar que borderRadius se pase al DOM
})<ButtonProps & MuiButtonProps>(({ theme, letterCase, margin, borderRadius }) => {
  const themeBorderRadius =
    (theme.components?.MuiButton?.styleOverrides?.root as { borderRadius?: string }).borderRadius ?? '8px';

  return {
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: letterCase ?? LETTER_CASE.UPPERCASE,
    borderRadius: borderRadius ?? themeBorderRadius,
    margin: margin ?? '0 0.5rem',
    '&, &:hover': {
      boxShadow: 'none',
    },
    variants: [],
  };
});

export { Button };
