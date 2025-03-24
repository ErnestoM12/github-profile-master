interface ProjectCardProps {
  projectaName: string;
  projectDescription: string;
  license: string | null;
  forks: number;
  stars: number;
  lastUpdated: string;
}

interface SearchBarProps {
  onSearch: () => Promise<void>;
  searchText: string;
  handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textPlaceHolder: string;
}

interface StatCardProps {
  label: string;
  data: string | number;
}

interface UserProfileCardProps {
  urlImage: string;
  type?: 'large' | 'medium' | 'small';
}

interface TopSectionProps {
  userInfo: UserProfileCardProps;
  followers: StatCardProps;
  following: StatCardProps;
  location: StatCardProps;
}

export type { ProjectCardProps, SearchBarProps, StatCardProps, UserProfileCardProps, TopSectionProps };
