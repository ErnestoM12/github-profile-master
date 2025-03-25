import { SearchBar } from '../../molecules/SearchBar';
import { Grid } from '../../atoms/Grid';
import { Body1 } from '../../atoms/Typography';
import { StyledGridContainer, StyledGridBackground, StyledGridContentItems } from './styled';
import { HeroProps } from '../../../interfaces';

const Hero = ({ onSearch, searchText, handleChangeText, textPlaceHolder, error }: HeroProps) => {
  return (
    <StyledGridContainer container size={12}>
      <StyledGridBackground size={12} />
      <StyledGridContentItems container spacing={2}>
        <Grid size={{ xs: 11, md: 8, lg: 4 }} justifyContent="center">
          <SearchBar
            onSearch={onSearch}
            searchText={searchText}
            handleChangeText={handleChangeText}
            textPlaceHolder={textPlaceHolder}
          />
        </Grid>
        {error && <Body1>{error}</Body1>}
      </StyledGridContentItems>
    </StyledGridContainer>
  );
};

export default Hero;
