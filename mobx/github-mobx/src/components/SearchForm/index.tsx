import React, { useState } from 'react';
import './style.css';

interface Props {
  onSearchRepo: (t: string) => void;
}

const AddRepoForm: React.FC<Props> = ({ onSearchRepo }) => {
  const [repoName, setRepoName] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(e.target.value);
  }

  return (
    <div>
      <label>
        Repo name:
        <input value={repoName} onChange={onChangeName} />
      </label>
      <button onClick={() => onSearchRepo(repoName)}>Add Repo</button>
    </div>
  );
}

export default AddRepoForm;