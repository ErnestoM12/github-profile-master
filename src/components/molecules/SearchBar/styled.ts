import { styled } from '@mui/material/styles';
import { Paper } from '../../atoms/Paper';
import { Button } from '../../atoms/Button';

const StyledPaper = styled(Paper)({
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const StyledButton = styled(Button)({
  margin: 0,
  width: '1rem',
});

export { StyledButton, StyledPaper };
