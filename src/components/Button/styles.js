import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  justify-content: center;
  align-items: center;

  height: 60px;
  margin: 16px;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ mode }) => (mode === 'light' ? '#fff' : '#000')};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ mode }) => (mode === 'light' ? '#000' : '#fff')};
`;
