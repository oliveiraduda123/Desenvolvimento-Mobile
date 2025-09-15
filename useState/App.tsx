import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button} from "react-native";

export default function App(){
    const[count, setCount] = useState(0);
    const[countTen, setCountTen] = useState(10);
    const[countHund, setCountHund] = useState(100);
  
    function handleClick(){
      console.log("Bot ao foi clicado");
      setCount(val => val+1);
      setCountTen(val => val+10);
      setCountHund(val => val+100);
    }
  
    return(
      <View style={styles.container}>
        <Text>teste de netState</Text>
        <Button onPress = {handleClick} title="Click aqui"/>
        <Text>COntador 1: {count}</Text>
        <Text>COntador 10: {countTen}</Text>      
        <Text>COntador 100: {countHund}</Text>  
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


