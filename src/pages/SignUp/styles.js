import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const SmallButton = styled(Button)`
  height: 25px;
`;
