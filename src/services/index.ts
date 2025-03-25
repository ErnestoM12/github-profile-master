import axios, { AxiosInstance } from 'axios';

export class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com/users/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    try {
      const response = await this.api.get<T>(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error('API GET request error:', error);
      throw error;
    }
  }
}

// Ejemplo de uso:
// const apiService = new ApiService('https://api.example.com');
// apiService.get('projects').then(data => console.log(data));
