import { AvatarWrapper, OuterContainer, StyledAvatar } from './styled';
import { UserProfileCardProps } from '../../../interfaces';

const UserProfileCard = ({ urlImage, type = 'large' }: UserProfileCardProps) => {
  return (
    <OuterContainer type={type} elevation={0}>
      <AvatarWrapper elevation={1}>
        <StyledAvatar type={type} src={urlImage} />
      </AvatarWrapper>
    </OuterContainer>
  );
};

export default UserProfileCard;
