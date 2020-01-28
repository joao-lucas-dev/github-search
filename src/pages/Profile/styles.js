import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 55px;

    span {
      font-size: 20px;
      color: #fff;
      font-style: italic;

      strong {
        font-style: normal;
      }
    }

    input {
      width: 234px;
      height: 38px;
      border: 0;
      background: #2e2f45;
      padding: 0 15px;
      color: #fff;
      border-radius: 5px;
      margin-left: 15px;

      &::placeholder {
        opacity: 0.6;
      }

      @media (max-width: 410px) {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }

  aside {
    width: 298px;
    background: #2e2f45;
    color: #fff;
    border-radius: 5px;
    padding: 15px;

    @media (max-width: 840px) {
      width: 100%;
      margin-bottom: 20px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 138px;
      height: 138px;
      border-radius: 50%;
      border: 2px solid #fff;
      background: #eee;
      margin-bottom: 15px;
    }

    div {
      width: 200px;
      text-align: center;

      p {
        margin: 20px 0;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }

  main {
    display: flex;
    margin-left: 20px;
    color: #fff;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      @media (max-width: 1320px) {
        grid-template-columns: 1fr;
      }

      li {
        width: 300px;
        background: #2e2f45;
        border-radius: 5px;
        padding: 15px;

        span {
          display: flex;
          align-items: center;

          margin-top: 5px;

          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
