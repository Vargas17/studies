import { observable, action, configure, runInAction } from 'mobx';
import { searchRepos } from '../service';
import { Repo } from '../types';

configure({ enforceActions: "observed" }) // don't allow state modifications outside actions

export class RepoStore {
  readonly repos = observable<Repo>([]);
  @observable fetching: boolean = false;

  @action
  async searchRepo(repo: string) {
    this.fetching = true;
    const res = await searchRepos(repo);
    const repos: Repo[] = res.data.items?.slice(0, 20)
      .map((repo: any) => {
        return {
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          url: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
          watches: repo.watchers,
          language: repo.language,
          forks: repo.forks,
          score: repo.score
        }
     });

     runInAction(() => {
      this.repos.replace(repos);
      this.fetching = false;
     })
  }
}

export const repoStore = new RepoStore();
