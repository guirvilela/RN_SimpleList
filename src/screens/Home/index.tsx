import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Participant from "../../components/Participant";
import theme from "../../theme";
import {
  Button,
  ButtonText,
  Container,
  ContainerForm,
  Input,
  TextNoRegisterParticipant,
  Title,
} from "./styles";

const Home: React.FC = () => {
  const [nameParticipant, setNameParticipant] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddNewParticipants = () => {
    if (!nameParticipant) {
      return Alert.alert("Participante", "Insira o nome do participante");
    }
    setParticipants((prevState) => [...prevState, nameParticipant]);
    setNameParticipant("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participantName) => participantName !== name)
          ),
      },
    ]);
  };

  return (
    <Container>
      <Title>Novo</Title>
      <ContainerForm>
        <Input
          placeholder="Digite aqui"
          placeholderTextColor={theme.COLORS.SUBTITLE}
          onChangeText={setNameParticipant}
          value={nameParticipant}
          onSubmitEditing={handleAddNewParticipants}
        />

        <Button onPress={handleAddNewParticipants}>
          <ButtonText>+</ButtonText>
        </Button>
      </ContainerForm>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={String(item)}
            removeParticipant={handleRemoveParticipant}
          />
        )}
        ListEmptyComponent={() => (
          <TextNoRegisterParticipant>
            Nenhum participante cadastrado
          </TextNoRegisterParticipant>
        )}
      />
    </Container>
  );
};

export default Home;
