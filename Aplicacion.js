// Componente principal: decide que pantalla se ve y guarda la lista de objetos.
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BotonPrincipal from './componentes/BotonPrincipal';
import PantallaListaObjetos from './pantallas/PantallaListaObjetos';
import PantallaPublicarObjeto from './pantallas/PantallaPublicarObjeto';
import objetosDeEjemplo from './datos/objetosDeEjemplo';
import colores from './estilos/colores';

export default function Aplicacion() {
  // "lista" es la pantalla de objetos, "publicar" es el formulario.
  const [pantallaActual, setPantallaActual] = useState('lista');
  const [objetos, setObjetos] = useState(objetosDeEjemplo);

  function agregarObjeto(objetoNuevo) {
    setObjetos([{ id: String(Date.now()), ...objetoNuevo }, ...objetos]);
    setPantallaActual('lista');
  }

  return (
    <SafeAreaView style={estilos.pantalla}>
      <StatusBar style="dark" />

      <View style={estilos.barraSuperior}>
        <Text style={estilos.titulo}>Objetos Perdidos</Text>
      </View>

      <View style={estilos.menu}>
        <BotonPrincipal
          texto="Ver objetos"
          activo={pantallaActual === 'lista'}
          onPress={() => setPantallaActual('lista')}
        />
        <BotonPrincipal
          texto="Publicar objeto"
          activo={pantallaActual === 'publicar'}
          onPress={() => setPantallaActual('publicar')}
        />
      </View>

      <View style={estilos.contenido}>
        {pantallaActual === 'lista' ? (
          <PantallaListaObjetos objetos={objetos} />
        ) : (
          <PantallaPublicarObjeto onGuardar={agregarObjeto} />
        )}
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  barraSuperior: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colores.principal,
  },
  titulo: {
    color: colores.textoClaro,
    fontSize: 22,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
  },
  contenido: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
