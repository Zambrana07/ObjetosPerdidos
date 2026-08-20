// Muestra un objeto de la lista.
import { View, Text, Image } from 'react-native';
import { estilosTarjeta } from './estilos';
import type { Objeto } from './tipos';

type Props = {
  objeto: Objeto;
};

export default function ComponenteTarjeta({ objeto }: Props) {
  return (
    <View style={estilosTarjeta.tarjeta}>
      <Text style={estilosTarjeta.titulo}>{objeto.titulo}</Text>
      <Text style={estilosTarjeta.lugar}>{objeto.lugar}</Text>
      <Text style={estilosTarjeta.descripcion}>{objeto.descripcion}</Text>
      <Image
        source={require('./img/man.webp')} // 👈 ajusta la ruta según donde esté tu carpeta img
        style={estilosTarjeta.imagen}
      />
    </View>
  );
}
