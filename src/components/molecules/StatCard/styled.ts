import { styled } from '@mui/material/styles';
import { Body1 } from '../../atoms/Typography';
import { Card } from '../../atoms/Card';

const StyledBody1 = styled(Body1)({
  textAlign: 'center',
});

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.default,
}));

export { StyledBody1, StyledCard };
