import styled from 'styled-components/native';
import RNIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(RNIcon)`
  margin-left: 20px;
`;

export const SearchContainer = styled.View`
  flex: 1;

  margin-top: 10px;
  padding: 17px;
  align-items: center;
`;

export const SmallButton = styled(Button)`
  height: 40px;
  border-radius: 0;
`;

export const TextInput = styled(Input)`
  flex: 1;
  margin: 0;
`;

export const List = styled.View``;
