import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  margin-left: 20px;
`;

export const FavoritesContainer = styled.View`
  flex: 1;

  margin-top: 10px;
  padding: 17px;
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
