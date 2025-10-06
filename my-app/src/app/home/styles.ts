import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  listaContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});