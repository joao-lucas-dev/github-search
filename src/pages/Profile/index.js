import React, { useState, useEffect } from 'react';
import { MdPeople, MdLocationOn, MdInbox, MdStar } from 'react-icons/md';

import PropTypes from 'prop-types';

import api from '../../services/api';
import { Container } from './styles';

export default function Profile({ location }) {
  const { data } = location.state;

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get(`/users/${data.login}/repos`);

      setRepos(
        response.data.sort(
          (prev, next) => prev.stargazers_count < next.stargazers_count
        )
      );
    }

    loadRepos();
  });
  return (
    <Container>
      <aside>
        <img src={data.avatar_url} alt={data.name} />
        <span>@{data.login}</span>

        <ul>
          <li>
            <MdLocationOn size={18} color="#fff" />
            {data.location}
          </li>
          <li>
            <MdInbox size={18} color="#fff" /> {data.public_repos}
          </li>
          <li>
            <MdPeople size={18} color="#fff" /> {data.followers}
          </li>
        </ul>
      </aside>

      <main>
        <ul>
          {repos.map(repo => (
            <li key={repo.key}>
              {repo.name}
              <span>
                <MdStar size={15} color="#fff" /> {repo.stargazers_count}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}

Profile.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
