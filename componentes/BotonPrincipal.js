// Boton reutilizable. "activo" solo cambia el color para marcar la seccion elegida.
import { Pressable, StyleSheet, Text } from 'react-native';

import colores from '../estilos/colores';

export default function BotonPrincipal({ texto, onPress, activo = true }) {
  return (
    <Pressable
      onPress={onPress}
      style={[estilos.boton, !activo && estilos.botonInactivo]}
    >
      <Text style={[estilos.texto, !activo && estilos.textoInactivo]}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: colores.principal,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  botonInactivo: {
    backgroundColor: colores.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  texto: {
    color: colores.textoClaro,
    fontWeight: 'bold',
  },
  textoInactivo: {
    color: colores.texto,
  },
});
