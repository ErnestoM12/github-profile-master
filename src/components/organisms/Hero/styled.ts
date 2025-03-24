import { styled } from '@mui/material/styles';
import { Grid } from '../../atoms/Grid';
import heroLargeImage from '../../../assets/hero-image-github-profile.jpg';
import heroSmallImage from '../../../assets/hero-image-github-profile-sm.jpg';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  height: 300,
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    height: 220,
  },
}));

const StyledGridBackground = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${heroLargeImage})`,
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${heroSmallImage})`,
  },
}));

const StyledGridContentItems = styled(Grid)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '3.5rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '0.5rem',
  },
}));

export { StyledGridContainer, StyledGridBackground, StyledGridContentItems };
