import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Hero, TopSection, ProjectsSection } from '../../components';
import { StyledItemsContainer, StyledGridItem, StyledGridMainContent } from './styled';
import { ApiService } from '../../services';
import { ProjectsSectionProps, GitHubRepoResponse, GithubUserReponse, UserInfoState } from '../../interfaces';
const apiService = new ApiService();

const MainPage = () => {
  const [searchText, setSearchText] = useState<string>('ErnestoM12');
  const [projects, setProjects] = useState<ProjectsSectionProps['projects']>([]);
  const [userInfo, setUserInfo] = useState<UserInfoState | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if (error) setError(null);
  };

  const handleSearch = async () => {
    if (!searchText.trim()) {
      setError('Please enter a username');
      return;
    }

    setError(null);
    try {
      const [userData, projectUser] = await Promise.all([
        apiService.get<GithubUserReponse>(searchText),
        apiService.get<GitHubRepoResponse[]>(`${searchText}/repos`),
      ]);

      setUserInfo({
        urlImage: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        location: userData.location,
      });

      const formattedProjects: ProjectsSectionProps['projects'] = projectUser.map((project: GitHubRepoResponse) => {
        const updatedAt = project.updated_at
          ? formatDistanceToNow(new Date(project.updated_at), { addSuffix: true })
          : 'Recently';

        return {
          id: project.node_id,
          name: project.name,
          description: project.description,
          license: project.license?.spdx_id,
          forks: project.forks,
          stargazersCount: project.stargazers_count,
          updatedAt: `Updated ${updatedAt}`,
          projectUrl: project.html_url,
        };
      });

      setProjects(formattedProjects);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('User not found');
      setUserInfo(null);
      setProjects([]);
    }
  };

  useEffect(() => {
    void handleSearch();
  }, []);

  return (
    <StyledGridMainContent container size={12}>
      <Hero
        onSearch={handleSearch}
        searchText={searchText}
        handleChangeText={handleChangeText}
        textPlaceHolder="username"
        error={error}
      />
      {userInfo && (
        <StyledItemsContainer container size={12}>
          <StyledGridItem size={12}>
            <TopSection
              userInfo={{ urlImage: userInfo.urlImage ?? '' }}
              followers={{ label: 'Followers', data: userInfo.followers ?? '' }}
              following={{ label: 'Following', data: userInfo.following ?? '' }}
              location={{ label: 'Location', data: userInfo.location ?? '' }}
            />
          </StyledGridItem>
          <StyledGridItem size={12}>
            <ProjectsSection
              title="Github"
              description="How people build software."
              buttonText="View all repositories"
              projects={projects}
            />
          </StyledGridItem>
        </StyledItemsContainer>
      )}
    </StyledGridMainContent>
  );
};

export default MainPage;
