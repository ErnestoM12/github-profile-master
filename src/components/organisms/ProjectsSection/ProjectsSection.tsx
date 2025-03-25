import { useState } from 'react';
import { Grid } from '../../atoms/Grid';
import { H1, H2, Body1 } from '../../atoms/Typography';
import { Button, BUTTON_VARIANTS } from '../../atoms/Button';
import { ProjectCard } from '../../molecules/ProjectCard';
import { ScrollableGridContainer, ScrollableGridItem } from './styled';
import { ProjectsSectionProps } from '../../../interfaces';

const ProjectsSection = ({ title, description, buttonText, projects }: ProjectsSectionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleShowAll = () => {
    setIsExpanded(true);
  };

  return (
    <Grid container spacing={2} size={12}>
      <Grid size={12}>
        <H1 mb={1}>{title}</H1>
        <H2>{description}</H2>
      </Grid>
      <ScrollableGridContainer
        container
        size={12}
        spacing={2.5}
        mt="1rem"
        sx={isExpanded ? { maxHeight: 'none', overflowY: 'visible' } : {}}
      >
        {projects.map((project) => (
          <ScrollableGridItem key={project.id} size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <ProjectCard
              projectaName={project.name}
              projectDescription={project.description ?? 'No description available'}
              license={project.license}
              forks={project.forks}
              stars={project.stargazersCount}
              lastUpdated={project.updatedAt}
              projectUrl={project.projectUrl}
            />
          </ScrollableGridItem>
        ))}
      </ScrollableGridContainer>
      {!isExpanded && (
        <Grid size={12} display="flex" alignItems="center" justifyContent="center" mt={3}>
          <Button variant={BUTTON_VARIANTS.TEXT} onClick={handleShowAll}>
            <Body1>{buttonText}</Body1>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default ProjectsSection;
