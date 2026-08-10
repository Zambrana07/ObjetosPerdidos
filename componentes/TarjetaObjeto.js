// Muestra un objeto de la lista.
import { StyleSheet, Text, View } from 'react-native';

import colores from '../estilos/colores';

export default function TarjetaObjeto({ titulo, lugar, descripcion }) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.lugar}>{lugar}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 4,
  },
  lugar: {
    color: colores.principal,
    marginBottom: 6,
  },
  descripcion: {
    color: colores.textoSuave,
  },
});
