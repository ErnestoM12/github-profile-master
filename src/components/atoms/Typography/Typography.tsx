import { Typography, TypographyProps } from '@mui/material';

const VARIANTS = {
  H1: 'h1',
  H2: 'h2',
  Body1: 'body1',
  Body2: 'body2',
} as const;

type VariantKey = keyof typeof VARIANTS;

const generateVariants = () => {
  return Object.keys(VARIANTS).reduce(
    (previous, variantKey) => {
      const key = variantKey as VariantKey;

      return {
        ...previous,
        [key]: (props: TypographyProps) => {
          return <Typography variant={VARIANTS[key]} {...props} />;
        },
      };
    },
    {} as Record<VariantKey, React.FC<TypographyProps>>
  );
};

const { H1, H2, Body1, Body2 } = generateVariants();

export { H1, H2, Body1, Body2 };
