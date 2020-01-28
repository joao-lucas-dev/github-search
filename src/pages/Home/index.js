import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import api from '../../services/api';
import { Container, Form } from './styles';

export default function Home({ history }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleFindUser(e) {
    e.preventDefault();

    setLoading(true);

    try {
      if (!username) {
        toast.warn('Username não preenchido!');
        setLoading(false);
        return;
      }

      const responseUser = await api.get(`/users/${username}`);
      const responseRepos = await api.get(`/users/${username}/repos`);

      history.push('/profile', {
        dataUser: responseUser.data,
        dataRepo: responseRepos.data.sort(
          (prev, next) => prev.stargazers_count < next.stargazers_count
        ),
      });

      setLoading(false);
    } catch (err) {
      toast.error('Usuário não encontrado!');
      setLoading(false);
    }
  }

  return (
    <Container>
      <span>
        <strong>GitHub</strong> Search
      </span>

      <Form loading={loading} onSubmit={handleFindUser}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Insira seu username"
        />

        <button type="submit">
          {loading ? <FaSpinner color="#FFF" size={14} /> : 'Procurar'}
        </button>
      </Form>
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
