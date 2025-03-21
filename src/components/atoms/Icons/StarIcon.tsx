import { SvgIcon, SvgIconProps } from '@mui/material';
import StarSVG from '@/assets/Star.svg?react';

const StarIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <StarSVG />
    </SvgIcon>
  );
};

export default StarIcon;
