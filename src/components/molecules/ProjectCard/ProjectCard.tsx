import { Card } from '../../atoms/Card';
import { H2, Body1, Body2 } from '../../atoms/Typography';
import { StyledChieldAltIcon, StyledNestingIcon, StyledStarIcon } from './styled';
import { Grid } from '../../atoms/Grid';
import { ProjectCardProps } from '../../../interfaces';

const ProjectCard = ({
  projectaName,
  projectDescription,
  license,
  forks = 0,
  stars = 0,
  lastUpdated,
}: ProjectCardProps) => {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid size={12}>
          <H2>{projectaName}</H2>
        </Grid>
        <Grid size={12}>
          <Body1>{projectDescription}</Body1>
        </Grid>
        <Grid size={12} container>
          {license && (
            <Grid size="auto" display="flex" alignItems="center">
              <StyledChieldAltIcon />
              <Body1>{license}</Body1>
            </Grid>
          )}
          <Grid size="auto" display="flex" alignItems="center">
            <StyledNestingIcon />
            <Body1>{forks}</Body1>
          </Grid>

          <Grid size="auto" display="flex" alignItems="center">
            <StyledStarIcon />
            <Body1>{stars}</Body1>
          </Grid>

          <Grid size="auto" display="flex" alignItems="center">
            <Body2>{lastUpdated}</Body2>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
