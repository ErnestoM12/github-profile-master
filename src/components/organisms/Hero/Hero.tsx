import { SearchBar } from '../../molecules/SearchBar';
import { Grid } from '../../atoms/Grid';
import { StyledGridContainer, StyledGridBackground, StyledGridContentItems } from './styled';
import { SearchBarProps } from '../../../interfaces';

const Hero = ({ onSearch, searchText, handleChangeText, textPlaceHolder }: SearchBarProps) => {
  return (
    <StyledGridContainer container>
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
      </StyledGridContentItems>
    </StyledGridContainer>
  );
};

export default Hero;
