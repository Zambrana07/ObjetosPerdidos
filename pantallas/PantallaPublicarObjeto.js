// Pantalla con el formulario para reportar un objeto perdido.
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

import BotonPrincipal from '../componentes/BotonPrincipal';
import colores from '../estilos/colores';

export default function PantallaPublicarObjeto({ onGuardar }) {
  const [titulo, setTitulo] = useState('');
  const [lugar, setLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [aviso, setAviso] = useState('');

  function guardar() {
    if (titulo.trim() === '' || lugar.trim() === '') {
      setAviso('Escribe al menos el objeto y el lugar.');
      return;
    }

    onGuardar({ titulo, lugar, descripcion });
    setTitulo('');
    setLugar('');
    setDescripcion('');
    setAviso('');
  }

  return (
    <ScrollView>
      <Text style={estilos.etiqueta}>Que objeto es?</Text>
      <TextInput
        style={estilos.campo}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Mochila negra"
      />

      <Text style={estilos.etiqueta}>Donde lo encontraste?</Text>
      <TextInput
        style={estilos.campo}
        value={lugar}
        onChangeText={setLugar}
        placeholder="Salon 101"
      />

      <Text style={estilos.etiqueta}>Descripcion</Text>
      <TextInput
        style={[estilos.campo, estilos.campoGrande]}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Detalles que ayuden a identificarlo"
        multiline
      />

      {aviso !== '' && <Text style={estilos.aviso}>{aviso}</Text>}

      <BotonPrincipal texto="Publicar" onPress={guardar} />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  etiqueta: {
    color: colores.texto,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  campo: {
    backgroundColor: colores.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
  },
  campoGrande: {
    height: 90,
    textAlignVertical: 'top',
  },
  aviso: {
    color: '#c0392b',
    marginBottom: 12,
  },
});
