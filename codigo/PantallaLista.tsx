// Pantalla que lista todos los objetos reportados.
import { FlatList, Text } from 'react-native';

import ComponenteTarjeta from './ComponenteTarjeta';
import { estilosLista } from './estilos';
import type { Objeto } from './tipos';

type Props = {
  objetos: Objeto[];
};

export default function PantallaLista({ objetos }: Props) {
  return (
    <FlatList
      data={objetos}
      keyExtractor={(objeto) => objeto.id}
      renderItem={({ item }) => <ComponenteTarjeta objeto={item} />}
      ListEmptyComponent={<Text style={estilosLista.vacio}>Todavia no hay objetos publicados.</Text>}
    />
  );
}
