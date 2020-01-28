import React, { useState } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import api from '../../services/api';
import { Container, Form } from './styles';

export default function Home({ history }) {
  const [username, setUsername] = useState('');

  async function handleFindUser(e) {
    e.preventDefault();

    try {
      if (!username) {
        toast.warn('Username não preenchido!');
        return;
      }

      const response = await api.get(`/users/${username}`);

      history.push('/profile', { data: response.data });
    } catch (err) {
      toast.error('Usuário não encontrado!');
    }
  }

  return (
    <Container>
      <span>
        <strong>GitHub</strong> Search
      </span>

      <Form onSubmit={handleFindUser}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Insira seu username"
        />

        <button type="submit">Procurar</button>
      </Form>
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
