import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdPeople, MdLocationOn, MdInbox, MdStar } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { newDevRequest } from '../../store/modules/dev/actions';
import { Container, Form, Content } from './styles';

export default function Profile() {
  const dataUser = useSelector(state => state.dev.dataUser);
  const dataRepos = useSelector(state => state.dev.dataRepos);

  const [username, setUsername] = useState(dataUser.login);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleFindUser(e) {
    e.preventDefault();

    setLoading(true);

    dispatch(newDevRequest(username, setLoading));
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <span>
            <strong>GitHub</strong> Search
          </span>
        </Link>

        <Form loading={loading} onSubmit={handleFindUser}>
          <input
            autoCapitalize="none"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <button type="submit">
            {loading ? <FaSpinner color="#FFF" size={14} /> : 'Procurar'}
          </button>
        </Form>
      </header>

      <Content>
        <aside>
          <img src={dataUser.avatar_url} alt={dataUser.name} />

          <div>
            <span>@{dataUser.login}</span>
            <p>{dataUser.bio || 'sem bio'}</p>

            <ul>
              <li>
                <MdLocationOn size={18} color="#fff" />
                {dataUser.location || 'sem localização'}
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
            {dataRepos.map(repo => (
              <li key={repo.id}>
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
