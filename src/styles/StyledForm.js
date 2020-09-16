import styled from 'styled-components';
const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95vh;
  h2 {
    font-size: 36px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 20vw;
    input {
      margin: 1rem 0;
      padding: 0.3rem;
      /* border-radius: 10px; */
      outline: none;
      border: none;
      border-bottom: 1px solid #000;
      transition: all 0.3s;
    }

    input:focus {
      border-bottom: 1px solid tomato;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 5px;
      border: none;
      background-color: tomato;
      color: #fff;
    }
  }
`;

export default StyledForm;
