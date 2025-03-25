import { styled } from '@mui/material/styles';
import { Grid } from '../../components';

const StyledGridMainContent = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const StyledItemsContainer = styled(Grid)({
  margin: '1rem',
  position: 'relative',
  top: '-4rem',
  zIndex: 10,
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: '0 5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  },
}));

export { StyledItemsContainer, StyledGridItem, StyledGridMainContent };
