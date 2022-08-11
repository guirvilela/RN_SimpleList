import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button, ButtonText, Container, Name } from "./styles";

interface IParticipant {
  name: string;
  removeParticipant: (name: string) => void;
}

const Participant: React.FC<IParticipant> = ({ name, removeParticipant }) => {
  return (
    <Container>
      <Name>{name}</Name>

      <Button onPress={() => removeParticipant(name)}>
        <ButtonText>-</ButtonText>
      </Button>
    </Container>
  );
};

export default Participant;
