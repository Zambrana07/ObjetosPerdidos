import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

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
    <View style={estilosPublicar.pantalla}> {/* 👈 nuevo contenedor exterior */}
      <ScrollView>
        <View style={estilosPublicar.contenedor}>
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

          <View style={estilosPublicar.contenedorBoton}>
            <ComponenteBoton texto="Publicar" onPress={guardar} />
          </View>
        </View>
      </ScrollView>

      {/* 👇 footer fuera del ScrollView, fijo abajo */}
      <View style={estilosPublicar.footerContenedor}>
        <Text style={estilosPublicar.footer}>Hecho por José David Monge y Alexander Zambrana, CTP CIT 2026</Text>
      </View>
    </View>
  );
}