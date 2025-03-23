import { styled } from '@mui/material/styles';
import { Paper } from '../../atoms/Paper';
import { Avatar } from '../../atoms/Avatar';

type UserProfileCardType = 'large' | 'medium' | 'small';

interface OuterContainerProps {
  type: UserProfileCardType;
}

const getUserProfileCardSize = (
  component: 'AvatarSize' | 'OuterContainerSize',
  type: UserProfileCardType
): { width: string; height: string } => {
  const sizes = {
    AvatarSize: {
      large: { width: '5.7rem', height: '5.7rem' },
      medium: { width: '3.7rem', height: '3.7rem' },
      small: { width: '2.7rem', height: '2.7rem' },
    },
    OuterContainerSize: {
      large: { width: '6rem', height: '6rem' },
      medium: { width: '4rem', height: '4rem' },
      small: { width: '3rem', height: '3rem' },
    },
  };

  return sizes[component][type];
};

const OuterContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'type',
})<OuterContainerProps>(({ type }) => ({
  padding: '0.563rem',
  ...getUserProfileCardSize('OuterContainerSize', type),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1rem',
}));

const AvatarWrapper = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1rem',
}));

const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'type',
})<OuterContainerProps>(({ type, theme }) => ({
  backgroundColor: theme.palette.primary.light,
  ...getUserProfileCardSize('AvatarSize', type),
}));

export { OuterContainer, AvatarWrapper, StyledAvatar };
