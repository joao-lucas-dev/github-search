import { darken } from 'polished';
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Form = styled.form.attrs(props => ({
  disabled: props.loading,
}))`
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

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  button {
    width: 234px;
    height: 38px;
    border: 0;
    background: #56588c;
    color: #fff;
    border-radius: 5px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#56588c')};
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
