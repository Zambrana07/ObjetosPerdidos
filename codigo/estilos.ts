// TODOS los estilos de la app estan en este archivo, agrupados por pantalla
// o componente. Asi no tienes que abrir cada archivo para cambiar un color
// o un tamano.
//
// En React Native no se usa CSS: los estilos son objetos de JavaScript y los
// nombres van en camelCase (backgroundColor en lugar de background-color).
import { StyleSheet } from 'react-native';

import { colores } from './colores';

export const estilosAplicacion = StyleSheet.create({
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

export const estilosBoton = StyleSheet.create({
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

export const estilosTarjeta = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 4,
  },
  lugar: {
    color: colores.principal,
    marginBottom: 6,
  },
  descripcion: {
    color: colores.textoSuave,
  },
});

export const estilosLista = StyleSheet.create({
  vacio: {
    color: colores.textoSuave,
    textAlign: 'center',
    marginTop: 24,
  },
});

export const estilosPublicar = StyleSheet.create({
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
    color: colores.error,
    marginBottom: 12,
  },
});
