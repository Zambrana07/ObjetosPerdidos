// Pantalla con el formulario para reportar un objeto perdido.
import { useState } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';

import ComponenteBoton from './ComponenteBoton';
import { estilosPublicar } from './estilos';
import type { ObjetoNuevo } from './tipos';

type Props = {
  onGuardar: (objeto: ObjetoNuevo) => void;
};

export default function PantallaPublicar({ onGuardar }: Props) {
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
      <Text style={estilosPublicar.etiqueta}>Que objeto es?</Text>
      <TextInput
        style={estilosPublicar.campo}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Mochila negra"
      />

      <Text style={estilosPublicar.etiqueta}>Donde lo encontraste?</Text>
      <TextInput
        style={estilosPublicar.campo}
        value={lugar}
        onChangeText={setLugar}
        placeholder="Salon 101"
      />

      <Text style={estilosPublicar.etiqueta}>Descripcion</Text>
      <TextInput
        style={[estilosPublicar.campo, estilosPublicar.campoGrande]}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Detalles que ayuden a identificarlo"
        multiline
      />

      {aviso !== '' && <Text style={estilosPublicar.aviso}>{aviso}</Text>}

      <ComponenteBoton texto="Publicar" onPress={guardar} />
    </ScrollView>
  );
}
