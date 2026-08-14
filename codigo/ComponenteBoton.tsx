// Boton reutilizable. "activo" solo cambia el color para marcar la seccion elegida.
import { Pressable, Text } from 'react-native';

import { estilosBoton } from './estilos';

type Props = {
  texto: string;
  onPress: () => void;
  activo?: boolean;
};

export default function ComponenteBoton({ texto, onPress, activo = true }: Props) {
  return (
    <Pressable onPress={onPress} style={[estilosBoton.boton, !activo && estilosBoton.botonInactivo]}>
      <Text style={[estilosBoton.texto, !activo && estilosBoton.textoInactivo]}>{texto}</Text>
    </Pressable>
  );
}
