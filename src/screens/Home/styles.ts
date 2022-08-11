import styled from "styled-components/native";
import theme from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  padding-top: ${getStatusBarHeight() + 30}px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  background-color: ${() => theme.COLORS.BACKGROUND};
`;

export const ContainerForm = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 45px;
`;

export const Title = styled.Text`
  color: ${() => theme.COLORS.TITLE};
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-right: 8px;
  height: 50px;
  border-radius: 8px;
  background-color: ${() => theme.COLORS.INPUT};
  padding-left: 15px;
  color: ${() => theme.COLORS.WHITE};
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background: ${() => theme.COLORS.GREEN};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  font-size: 22px;
`;

export const TextNoRegisterParticipant = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  font-size: 18px;
  text-align: center; ;
`;
