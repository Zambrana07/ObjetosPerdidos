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
    flexDirection: 'row',        // 👈 título y botones en fila
    alignItems: 'center',        // 👈 centra verticalmente
    justifyContent: 'space-between', // 👈 título a la izquierda, botones a la derecha
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
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
    // 👇 sacamos el padding: 16 que tenía antes,
    // porque ahora el padding lo maneja barraSuperior
  },
  contenido: {
    flex: 1,
    paddingHorizontal: 16,
  },
  footerContenedor: {
    backgroundColor: colores.principal,
    paddingVertical: 20,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  footer: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export const estilosBoton = StyleSheet.create({
  boton: {
    backgroundColor: colores.principalAlt,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
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
    borderRadius: 15,
    padding: 14,
    marginBottom: 12,
    aspectRatio: 1,
    width: 280,
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
  imagen: { // 👈 nuevo
    flex: 1, // 👈 ocupa el espacio restante de la tarjeta
    width: '100%',
    borderRadius: 10,
    marginTop: 8,
    resizeMode: 'cover',
  },
});

export const estilosLista = StyleSheet.create({
  pantalla: { // 👈 nuevo
    flex: 1, // ocupa toda la altura disponible
  },
  fila: {
    justifyContent: 'center',
    gap: 15,
  },
  vacio: {
    color: colores.textoSuave,
    textAlign: 'center',
    marginTop: 24,
  },
});

export const estilosPublicar = StyleSheet.create({
  pantalla: { // 👈 nuevo
    flex: 1, // ocupa toda la altura disponible
  },
  contenedor: {
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  contenedorBoton: {
    width: '100%',
    maxWidth: 200,
    alignSelf: 'center',
    marginTop: 8,
  },
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
