import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  aside {
    width: 298px;
    height: 303px;
    background: #2e2f45;
    color: #fff;
    border-radius: 5px;

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

    span {
      margin-bottom: 10px;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      svg {
        margin-right: 5px;
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

      li {
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 70px;
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
