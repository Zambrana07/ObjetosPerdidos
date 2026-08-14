// Datos de prueba para ver algo en pantalla desde el primer momento.
// El tipo Objeto[] obliga a que cada elemento tenga id, titulo, lugar y descripcion.
import type { Objeto } from './tipos';

export const objetosDeEjemplo: Objeto[] = [
  {
    id: '1',
    titulo: 'Botella de agua azul',
    lugar: 'Biblioteca, segundo piso',
    descripcion: 'Botella metalica con una calcomania de un gato.',
  },
  {
    id: '2',
    titulo: 'Llaves con llavero rojo',
    lugar: 'Cafeteria',
    descripcion: 'Tres llaves y una tarjeta de acceso.',
  },
  {
    id: '3',
    titulo: 'Cuaderno de matematicas',
    lugar: 'Salon 204',
    descripcion: 'Cuaderno de cuadros con apuntes hasta la pagina 40.',
  },
];
