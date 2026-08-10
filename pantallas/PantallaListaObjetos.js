// Pantalla que lista todos los objetos reportados.
import { FlatList, StyleSheet, Text } from 'react-native';

import TarjetaObjeto from '../componentes/TarjetaObjeto';
import colores from '../estilos/colores';

export default function PantallaListaObjetos({ objetos }) {
  return (
    <FlatList
      data={objetos}
      keyExtractor={(objeto) => objeto.id}
      renderItem={({ item }) => (
        <TarjetaObjeto
          titulo={item.titulo}
          lugar={item.lugar}
          descripcion={item.descripcion}
        />
      )}
      ListEmptyComponent={<Text style={estilos.vacio}>Todavia no hay objetos publicados.</Text>}
    />
  );
}

const estilos = StyleSheet.create({
  vacio: {
    color: colores.textoSuave,
    textAlign: 'center',
    marginTop: 24,
  },
});
