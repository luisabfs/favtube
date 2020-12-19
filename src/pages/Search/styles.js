import styled from 'styled-components/native';
import RNIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  behaviour: 'position',
  persistentScrollbar: true,
})`
  flex: 1;
`;

export const Profile = styled.View`
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
  justify-content: center;
`;

export const Icon = styled(RNIcon)`
  margin-left: 20px;
`;

export const SearchContainer = styled.View`
  margin-top: 15px;
  padding-left: 17px;
  padding-right: 17px;
  align-items: center;
  justify-content: center;
`;

export const SmallButton = styled(Button).attrs(props => ({
  disabled: props.disabled,
}))`
  margin: 0;
  height: 40px;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
`;

export const TextInput = styled(Input)`
  flex: 1;
  margin: 0;
`;

export const List = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 17px;
  padding-bottom: 0;
`;
