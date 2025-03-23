import { Card } from '../../atoms/Card';
import { Grid } from '../../atoms/Grid';
import { Divider } from '../../atoms/Divider';
import { StyledBody1 } from './styled';

interface StatCardProps {
  label: string;
  data: string | number;
}

const StatCard = ({ label, data }: StatCardProps) => {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid size={5}>
          <StyledBody1>{label}</StyledBody1>
        </Grid>
        <Grid size={2} display="flex" justifyContent="center" alignItems="center">
          <Divider orientation="vertical" />
        </Grid>
        <Grid size={5}>
          <StyledBody1>{data}</StyledBody1>
        </Grid>
      </Grid>
    </Card>
  );
};

export default StatCard;
