import { Card } from '../../atoms/Card';
import { Grid } from '../../atoms/Grid';
import { Divider } from '../../atoms/Divider';
import { StyledBody1 } from './styled';
import { StatCardProps } from '../../../interfaces';

const StatCard = ({ label, data }: StatCardProps) => {
  return (
    <Card>
      <Grid container spacing={1} alignItems="stretch">
        <Grid size={5} display="flex" alignItems="center" justifyContent="center">
          <StyledBody1>{label}</StyledBody1>
        </Grid>
        <Grid size={2} display="flex" alignItems="center" justifyContent="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid size={5} display="flex" alignItems="center" justifyContent="center">
          <StyledBody1>{data}</StyledBody1>
        </Grid>
      </Grid>
    </Card>
  );
};

export default StatCard;
