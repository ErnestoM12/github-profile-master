import { AvatarWrapper, OuterContainer, StyledAvatar } from './styled';

interface UserProfileCardPRops {
  urlImage: string;
  type?: 'large' | 'medium' | 'small';
}

const UserProfileCard = ({ urlImage, type = 'large' }: UserProfileCardPRops) => {
  return (
    <OuterContainer type={type} elevation={0}>
      <AvatarWrapper elevation={1}>
        <StyledAvatar type={type} src={urlImage} />
      </AvatarWrapper>
    </OuterContainer>
  );
};

export default UserProfileCard;
