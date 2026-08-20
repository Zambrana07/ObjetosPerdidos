// Componente principal: decide que pantalla se ve y guarda la lista de objetos.
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ComponenteBoton from './ComponenteBoton';
import PantallaLista from './PantallaLista';
import PantallaPublicar from './PantallaPublicar';
import { objetosDeEjemplo } from './datos';
import { estilosAplicacion } from './estilos';
import type { NombreDePantalla, Objeto, ObjetoNuevo } from './tipos';

export default function Aplicacion() {
  const [pantallaActual, setPantallaActual] = useState<NombreDePantalla>('lista');
  const [objetos, setObjetos] = useState<Objeto[]>(objetosDeEjemplo);

  function agregarObjeto(objetoNuevo: ObjetoNuevo) {
    setObjetos([{ id: String(Date.now()), ...objetoNuevo }, ...objetos]);
    setPantallaActual('lista');
  }

  return (
    <SafeAreaView style={estilosAplicacion.pantalla}>
      <StatusBar style="dark" />

      <View style={estilosAplicacion.barraSuperior}>
        <Text style={estilosAplicacion.titulo}>Objetos Perdidos</Text>

        <View style={estilosAplicacion.menu}>
          <ComponenteBoton
            texto="Ver objetos"
            activo={pantallaActual === 'lista'}
            onPress={() => setPantallaActual('lista')}
          />
          <ComponenteBoton
            texto="Publicar objeto"
            activo={pantallaActual === 'publicar'}
            onPress={() => setPantallaActual('publicar')}
          />
        </View>
      </View>

      <View style={estilosAplicacion.contenido}>
        {pantallaActual === 'lista' ? (
          <PantallaLista objetos={objetos} />
        ) : (
          <PantallaPublicar onGuardar={agregarObjeto} />
        )}
      </View>
      <View style={estilosAplicacion.footerContenedor}>
        <Text style={estilosAplicacion.footer}>Realizado por José David Monge y Alexander Zambrana, CTP CIT 2026</Text>
      </View>
    </SafeAreaView>
  );
}
