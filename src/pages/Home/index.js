import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { isSearchingRequest } from '../../store/modules/search/actions';
import { Container, Form } from './styles';

export default function Home() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleFindUser(e) {
    e.preventDefault();

    setLoading(true);

    dispatch(isSearchingRequest(username, setLoading));
  }

  return (
    <Container>
      <span>
        <strong>GitHub</strong> Search
      </span>

      <Form loading={loading} onSubmit={handleFindUser}>
        <input
          value={username}
          autoCapitalize="none"
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
