import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 60px;
  margin-top: 16px;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ mode }) => (mode === 'light' ? '#fff' : '#000')};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ mode }) => (mode === 'light' ? '#000' : '#fff')};
`;
