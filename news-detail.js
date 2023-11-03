import { Heading, Text, Center, View } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <Center flex={1} padding={"$4"}>
        <Heading>News Delail</Heading>
        <Text textAlign="center">{params.title}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;