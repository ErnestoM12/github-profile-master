import { useTheme, Theme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Grid } from '../../atoms/Grid';
import { UserProfileCard } from '../../molecules/UserProfileCard';
import { StatCard } from '../../molecules/StatCard';
import { TopSectionProps } from '../../../interfaces';

const TopSection = ({ userInfo, followers, following, location }: TopSectionProps) => {
  const theme: Theme = useTheme();
  const isSmBreakpoint: boolean = useMediaQuery(theme.breakpoints.up('sm'));
  const justifyContent: 'left' | 'right' = isSmBreakpoint ? 'right' : 'left';

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid size={{ xs: 12, sm: 3, md: 2, lg: 2 }} display="flex" justifyContent={justifyContent}>
        <UserProfileCard urlImage={userInfo.urlImage} />
      </Grid>
      <Grid size={{ xs: 5, sm: 2.5, md: 2, lg: 2 }}>
        <StatCard label={followers.label} data={followers.data} />
      </Grid>
      <Grid size={{ xs: 5, sm: 2.5, md: 2, lg: 2 }}>
        <StatCard label={following.label} data={following.data} />
      </Grid>
      <Grid size={{ xs: 10, sm: 4, md: 6, lg: 4 }}>
        <StatCard label={location.label} data={location.data} />
      </Grid>
    </Grid>
  );
};

export default TopSection;
