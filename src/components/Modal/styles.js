import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  justify-content: flex-end;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.View`
  min-height: 450px;
  justify-content: space-evenly;
  align-items: center;

  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 0;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
