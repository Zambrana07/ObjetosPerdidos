// Aqui se define la "forma" de los datos. TypeScript avisa si falta un campo
// o si escribes mal un nombre, antes de abrir el navegador.

export type Objeto = {
  id: string;
  titulo: string;
  lugar: string;
  descripcion: string;
};

// Un objeto que el usuario acaba de escribir todavia no tiene id.
export type ObjetoNuevo = Omit<Objeto, 'id'>;

// Las dos pantallas que existen en la app.
export type NombreDePantalla = 'lista' | 'publicar';
