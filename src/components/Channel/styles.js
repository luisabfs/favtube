import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: #afafaf;
  font-size: 16px;
  margin-left: 10px;
  margin-right: auto;
`;

export const Thumbnail = styled.Image`
  width: 40px;
  height: 40px;
`;

export const SmallButton = styled(Button)`
  margin: 0;
  height: 40px;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
`;
