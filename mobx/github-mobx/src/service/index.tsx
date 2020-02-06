import axios, { AxiosInstance, AxiosPromise } from 'axios';

const Client: AxiosInstance = axios.create({ baseURL: 'https://api.github.com' });

export const searchRepos = (repoName: string): AxiosPromise => {
  return Client.get('/search/repositories', { params: { q: repoName } });
};
