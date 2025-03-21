import { SvgIcon, SvgIconProps } from '@mui/material';
import NESTINGSVG from '@/assets/Nesting.svg?react';

const NestingIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <NESTINGSVG />
    </SvgIcon>
  );
};

export default NestingIcon;
