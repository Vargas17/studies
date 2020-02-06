import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { SearchForm, RepoList } from './components';
import { repoStore } from './store';
import './App.css';

@observer
class App extends Component {
  searchRepo = async(repo: string) => {
    await repoStore.searchRepo(repo);
  }

  render() {
    return (
      <div className='App'>
        <h3>MOBX GITHUB</h3>
        <SearchForm onSearchRepo={this.searchRepo} />
        <RepoList repos={repoStore.repos} loading={repoStore.fetching} />
      </div>
    );
  }
}

export default App;
