import { Grid } from '../../atoms/Grid';
import { UserProfileCard } from '../../molecules/UserProfileCard';
import { StatCard } from '../../molecules/StatCard';
import { TopSectionProps } from '../../../interfaces';

const TopSection = ({ userInfo, followers, following, location }: TopSectionProps) => {
  return (
    <Grid container spacing={2} alignItems="flex-end" size={12} mb={3}>
      <Grid size={{ xs: 12, sm: 3, md: 1.7, lg: 1.5 }} display="flex">
        <UserProfileCard urlImage={userInfo.urlImage} />
      </Grid>
      <Grid size={{ xs: 5, sm: 2.5, md: 2, lg: 2 }}>
        <StatCard label={followers.label} data={followers.data} />
      </Grid>
      <Grid size={{ xs: 5, sm: 2.5, md: 2, lg: 2 }}>
        <StatCard label={following.label} data={following.data} />
      </Grid>
      <Grid size={{ xs: 10, sm: 4, md: 5, lg: 4 }}>
        <StatCard label={location.label} data={location.data} />
      </Grid>
    </Grid>
  );
};

export default TopSection;
