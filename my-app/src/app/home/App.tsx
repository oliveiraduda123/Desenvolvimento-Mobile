// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import styles from "./styles"; // Certifique-se de que styles.ts está correto

// interface Item {
//   id: string;
//   nome: string;
// }

// export default function App() {
//   const [nomeProprietario, setNomeProprietario] = useState("");
//   const [tipoImovel, setTipoImovel] = useState("");
//   const [largura, setLargura] = useState("");
//   const [comprimento, setComprimento] = useState("");
//   const [lista, setLista] = useState<Item[]>([]);

//   const adicionarItem = () => {
//     if (
//       nomeProprietario.trim() === "" ||
//       tipoImovel.trim() === "" ||
//       largura.trim() === "" ||
//       comprimento.trim() === ""
//     ) {
//       return;
//     }

//     const nome = `${nomeProprietario} - ${tipoImovel} (${largura} x ${comprimento} m)`;
//     setLista([...lista, { id: Date.now().toString(), nome }]);

//     // Limpa os campos
//     setNomeProprietario("");
//     setTipoImovel("");
//     setLargura("");
//     setComprimento("");
//   };

//   const excluirItem = (id: string) => {
//     setLista(lista.filter((item) => item.id !== id));
//   };

//   const renderItem = ({ item, index }: { item: Item; index: number }) => (
//     <View
//       style={[
//         styles.item,
//         index === lista.length - 1 && { borderBottomWidth: 0 },
//       ]}
//     >
//       <AntDesign name="checkcircle" size={20} color="#fff" />
//       <Text style={styles.texto}>{item.nome}</Text>
//       <TouchableOpacity onPress={() => excluirItem(item.id)}>
//         <AntDesign name="delete" size={20} color="red" />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>CADASTRO IMÓVEL</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nome do Proprietário"
//           placeholderTextColor="#fff"
//           value={nomeProprietario}
//           onChangeText={setNomeProprietario}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Tipo de Imóvel"
//           placeholderTextColor="#fff"
//           value={tipoImovel}
//           onChangeText={setTipoImovel}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Largura do Terreno (m)"
//           placeholderTextColor="#fff"
//           keyboardType="numeric"
//           value={largura}
//           onChangeText={setLargura}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Comprimento do Terreno (m)"
//           placeholderTextColor="#fff"
//           keyboardType="numeric"
//           value={comprimento}
//           onChangeText={setComprimento}
//         />

//         <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
//           <AntDesign name="pluscircleo" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.listaContainer}>
//         <FlatList
//           data={lista}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </View>
//   );
// }

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './styles';

// Tipando o item da lista de alimentos
interface Item {
  id: string;
  nome: string;
  calorias: number;
}

export default function App() {
  const [alimento, setAlimento] = useState<string>('');
  const [calorias, setCalorias] = useState<string>('');
  const [itens, setItens] = useState<Item[]>([]); 

  const adicionarItem = () => {
    if (alimento && calorias) {
      const novoItem: Item = {
        id: Date.now().toString(),
        nome: alimento,
        calorias: parseInt(calorias, 10),
      };
      setItens([...itens, novoItem]);
      setAlimento('');
      setCalorias('');
    }
  };


  const removerItem = (id: string) => {
    setItens(itens.filter(item => item.id !== id));
  };


  const limparTodos = () => {
    setItens([]);
  };

  const totalCalorias = itens.reduce((total, item) => total + item.calorias, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calorias</Text>

      <TextInput
        placeholder="Digite o alimento"
        style={styles.input}
        value={alimento}
        onChangeText={setAlimento}
      />
      <TextInput
        placeholder="Digite as calorias"
        style={styles.input}
        value={calorias}
        onChangeText={setCalorias}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>

      <View style={styles.listaCabecalho}>
        <Text style={styles.listaTitulo}>Item</Text>
        <Text style={styles.listaTitulo}>Calorias</Text>
        <TouchableOpacity onPress={limparTodos}>
          <Text style={styles.limparTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLinha}>
            <Text>{item.nome}</Text>
            <Text>{item.calorias} kcal</Text>
            <TouchableOpacity onPress={() => removerItem(item.id)}>
              <Text style={styles.removerTexto}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalTexto}>{totalCalorias} kcal</Text>
      </View>
    </SafeAreaView>
  );
}