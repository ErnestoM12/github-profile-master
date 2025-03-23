import { BUTTON_VARIANTS } from '../../atoms/Button';
import { SearchIcon } from '../../atoms/Icons';
import { InputBase } from '../../atoms/InputBase';
import { StyledPaper, StyledButton } from './styled';

interface SearchBarProps {
  onSearch: () => Promise<void>;
  searchText: string;
  handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textPlaceHolder: string;
}

const SearchBar = ({ onSearch, searchText, handleChangeText, textPlaceHolder }: SearchBarProps) => {
  return (
    <StyledPaper elevation={1}>
      <StyledButton
        variant={BUTTON_VARIANTS.TEXT}
        onClick={() => {
          void onSearch();
        }}
      >
        <SearchIcon />
      </StyledButton>
      <InputBase value={searchText} onChange={handleChangeText} placeholder={textPlaceHolder} />
    </StyledPaper>
  );
};

export default SearchBar;
