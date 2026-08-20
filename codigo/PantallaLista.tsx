// Pantalla que lista todos los objetos reportados.
import { FlatList, Text, View } from 'react-native';

import ComponenteTarjeta from './ComponenteTarjeta';
import { estilosLista } from './estilos';
import type { Objeto } from './tipos';

type Props = {
  objetos: Objeto[];
};

export default function PantallaLista({ objetos }: Props) {
  return (
    <View style={estilosLista.pantalla}>
      <FlatList
        data={objetos}
        keyExtractor={(objeto) => objeto.id}
        renderItem={({ item }) => <ComponenteTarjeta objeto={item} />}
        numColumns={5}
        columnWrapperStyle={estilosLista.fila}
        ListEmptyComponent={<Text style={estilosLista.vacio}>Todavia no hay objetos publicados.</Text>}
      />

      <View style={estilosLista.footerContenedor}>
        <Text style={estilosLista.footer}>Hecho por José David Monge y Alexander Zambrana, CTP CIT 2026</Text>
      </View>
    </View>
  );
}
