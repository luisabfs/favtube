import styled from 'styled-components/native';
import RNIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../Button';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #000;

  height: 100px;
  padding: 17px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
`;

export const Icon = styled(RNIcon)`
  margin-left: 20px;
`;

export const SmallButton = styled(Button)`
  margin: 0;
  height: 40px;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
`;
