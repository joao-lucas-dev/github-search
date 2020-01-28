import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #242435;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    color: #fff;
    font-style: italic;
    margin-bottom: 22px;

    strong {
      font-style: normal;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 234px;
    height: 38px;
    border: 0;
    background: #2e2f45;
    padding: 0 15px;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 15px;

    &::placeholder {
      opacity: 0.6;
    }
  }

  button {
    width: 234px;
    height: 38px;
    border: 0;
    background: #56588c;
    color: #fff;
    border-radius: 5px;
  }
`;
