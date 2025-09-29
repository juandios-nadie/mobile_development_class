import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Componente para mostrar el nombre
function Nombre() {
  return <Text style={styles.titulo}>Nombre: Juan de Dios de la Torre</Text>;
}

// Componente para mostrar la matrícula
function Matricula() {
  return <Text style={styles.subtitulo}>Matrícula: A01644776</Text>;
}

// Componente para mostrar la carrera
function Carrera() {
  return <Text style={styles.subtitulo}>Carrera: Ingeniería en Tecnologías Computacionales</Text>;
}

// Componente para mostrar información adicional
function InformacionPersonal() {
  return (
    <View style={styles.infoContainer}>
      <Text>Hobbies: Correr, Hablar, Comer, Moverme, Caminar</Text>
      <Text>Último libro que leí: 1984 -- George Orwell</Text>
      <Text>Último viaje: Vallarta con los Exitosos</Text>
    </View>
  );
}

// Componente principal
export default function App() {
  return (
    <View style={styles.container}>
      <Nombre />
      <Matricula />
      <Carrera />
      <InformacionPersonal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 5,
  },
  infoContainer: {
    marginTop: 15,
    alignItems: "center",
  },
});
