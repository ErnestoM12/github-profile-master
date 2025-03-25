interface ProjectCardProps {
  projectaName: string;
  projectDescription: string;
  license: string | null;
  forks: number;
  stars: number;
  lastUpdated: string;
  projectUrl?: string | null;
}

interface SearchBarProps {
  onSearch: () => Promise<void>;
  searchText: string;
  handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textPlaceHolder: string;
}

interface HeroProps extends SearchBarProps {
  error: string | null;
}

interface StatCardProps {
  label: string;
  data: string | number | null;
}

interface UserProfileCardProps {
  urlImage: string | null;
  type?: 'large' | 'medium' | 'small';
}

interface TopSectionProps {
  userInfo: UserProfileCardProps;
  followers: StatCardProps;
  following: StatCardProps;
  location: StatCardProps;
}

interface Project {
  id: number | string;
  name: string;
  description: string | null;
  license?: string;
  forks: number;
  stargazersCount: number;
  updatedAt: string;
  projectUrl: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  title: string;
  description: string;
  buttonText: string;
}

interface GitHubRepoResponse {
  node_id: string;
  name: string;
  description: string | null;
  license?: {
    spdx_id: string;
  };
  forks: number;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

interface GithubUserReponse {
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
}

interface UserInfoState {
  urlImage: UserProfileCardProps['urlImage'];
  followers: StatCardProps['data'];
  following: StatCardProps['data'];
  location: StatCardProps['data'];
}

export type {
  GitHubRepoResponse,
  GithubUserReponse,
  HeroProps,
  ProjectCardProps,
  ProjectsSectionProps,
  SearchBarProps,
  StatCardProps,
  TopSectionProps,
  UserInfoState,
  UserProfileCardProps,
};
