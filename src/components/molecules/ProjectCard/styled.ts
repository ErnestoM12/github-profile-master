import { styled } from '@mui/material/styles';
import { ChieldAltIcon, NestingIcon, StarIcon } from '../../atoms/Icons';

const StyledChieldAltIcon = styled(ChieldAltIcon)({
  marginRight: '0.125rem',
});

const StyledNestingIcon = styled(NestingIcon)({
  marginRight: '0.125rem',
});

const StyledStarIcon = styled(StarIcon)({
  marginRight: '0.125rem',
});
const StyledLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
});

export { StyledChieldAltIcon, StyledNestingIcon, StyledStarIcon, StyledLink };
