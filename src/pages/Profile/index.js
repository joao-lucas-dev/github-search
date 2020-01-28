import React from 'react';
import { MdPeople, MdLocationOn, MdInbox, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Profile({ location }) {
  const { dataUser, dataRepo } = location.state;

  return (
    <Container>
      <header>
        <Link to="/">
          <span>
            <strong>GitHub</strong> Search
          </span>
        </Link>
        <input value={dataUser.login} readOnly />
      </header>

      <Content>
        <aside>
          <img src={dataUser.avatar_url} alt={dataUser.name} />

          <div>
            <span>@{dataUser.login}</span>
            <p>{dataUser.bio}</p>

            <ul>
              <li>
                <MdLocationOn size={18} color="#fff" />
                {dataUser.location}
              </li>
              <li>
                <MdInbox size={18} color="#fff" /> {dataUser.public_repos}
              </li>
              <li>
                <MdPeople size={18} color="#fff" /> {dataUser.followers}
              </li>
            </ul>
          </div>
        </aside>

        <main>
          <ul>
            {dataRepo.map(repo => (
              <li key={repo.key}>
                {repo.name}
                <span>
                  <MdStar size={15} color="#fff" /> {repo.stargazers_count}
                </span>
              </li>
            ))}
          </ul>
        </main>
      </Content>
    </Container>
  );
}

Profile.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
