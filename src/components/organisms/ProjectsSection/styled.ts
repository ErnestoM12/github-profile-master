import { styled } from '@mui/material/styles';
import { Grid } from '../../atoms/Grid';

const ScrollableGridContainer = styled(Grid)(({ theme }) => ({
  maxHeight: '15rem',
  overflowY: 'auto',
  width: '100%',

  '&::-webkit-scrollbar': {
    width: '0.24rem',
    height: '0.24rem',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.text.primary,
    borderRadius: '0.5rem',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.text.secondary,
  },

  [theme.breakpoints.down('sm')]: {
    maxHeight: '31.60rem',
  },
}));

const ScrollableGridItem = styled(Grid)({
  display: 'inline-block',
  width: 'auto',
});

export { ScrollableGridContainer, ScrollableGridItem };
