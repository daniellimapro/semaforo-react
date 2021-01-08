import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxSemaforo = styled.div`
  width: 200px;
  height: 450px;
  background: #004d7a;
  border-radius: 5px;
  box-shadow: 5px 5px 0px 0px #008793;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  background: #ffffff;
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: ${props => props.color };
  opacity: ${props => props.active ? '1' : '0.2' };
  box-shadow: ${props => props.active ? `0px 0px 8px 8px ${props.color}` : 'none' };
  &:hover {
    opacity: 1;
  }
`;