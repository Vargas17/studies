import React from 'react';
import { observer } from 'mobx-react';
import { Repo } from '../../types';
import './style.css';

interface Props {
  repos: Repo[];
  loading: boolean
}

const TaskList: React.FC<Props> = ({ repos, loading }) => {
  const renderRepos = () => repos.map(repo => (
    <div key={repo.id} className='repoCard'>
      <span>{repo.name}</span>
    </div>
  ));
  return (
    <div className='cardsContainer'>
      {loading
        ? <p>Loading...</p>
        : renderRepos()
      }
    </div>
  );
}

export default observer(TaskList);
