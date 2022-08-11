import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  background-color: ${() => theme.COLORS.INPUT};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  flex: 1;
  font-size: 16px;
  margin-left: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background: ${() => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  font-size: 22px;
`;
