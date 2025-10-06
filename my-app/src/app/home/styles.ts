// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     padding: 20,
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: "#1f1e25",
//     borderRadius: 8,
//     height: 56,
//     paddingHorizontal: 16,
//     color: "#fff",
//     marginBottom: 12,
//   },
//   botao: {
//     backgroundColor: "#4CAF50",
//     borderRadius: 8,
//     height: 56,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//   },
//   listaContainer: {
//     marginTop: 20,
//   },
//   item: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#333",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   texto: {
//     color: "#fff",
//     fontSize: 16,
//     flex: 1,
//     marginLeft: 10,
//   },
// });

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CED4DA',
  },
  botao: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listaCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginTop: 10,
  },
  listaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  limparTexto: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  itemLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  removerTexto: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '600',
  },
  totalBox: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#A0E7E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  totalTexto: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});