import { SvgIcon, SvgIconProps } from '@mui/material';
import SEARCHSVG from '@/assets/Search.svg?react';

const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <SEARCHSVG />
    </SvgIcon>
  );
};

export default SearchIcon;
