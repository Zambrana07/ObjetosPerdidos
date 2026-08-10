# Guia para empezar (nunca usaste React Native)

## 1. Instalar las dependencias

En la carpeta del proyecto, una sola vez:

```powershell
npm install
```

## 2. Abrir la pagina web

```powershell
npm run web
```

Se abre en el navegador en `http://localhost:8081`.
Para cerrarlo: `Ctrl + C` en la terminal.

## 3. Donde esta cada cosa

Solo hay una carpeta de codigo: `codigo/`. Nada esta escondido en subcarpetas.

| Archivo | Para que sirve |
| --- | --- |
| `index.ts` | Primer archivo que se ejecuta. Solo registra la app. |
| `codigo/Aplicacion.tsx` | Componente principal. Decide que pantalla se muestra y guarda la lista de objetos. |
| `codigo/PantallaLista.tsx` | Pantalla con la lista de objetos perdidos. |
| `codigo/PantallaPublicar.tsx` | Pantalla con el formulario para reportar un objeto. |
| `codigo/ComponenteTarjeta.tsx` | Caja visual que muestra un objeto. |
| `codigo/ComponenteBoton.tsx` | Boton reutilizable. |
| `codigo/estilos.ts` | TODOS los estilos, agrupados por pantalla o componente. |
| `codigo/colores.ts` | La paleta de colores. |
| `codigo/datos.ts` | Objetos de prueba para ver algo al inicio. |
| `codigo/tipos.ts` | La forma de los datos (`Objeto`, `ObjetoNuevo`). |

Regla rapida para saber cuando cambiar algo:

- Cambiar como se ve -> `codigo/estilos.ts` o `codigo/colores.ts`
- Cambiar que se ve -> el archivo `Pantalla...tsx` o `Componente...tsx`
- Cambiar los datos -> `codigo/datos.ts`
- Agregar un campo nuevo a un objeto -> primero `codigo/tipos.ts`

## 4. `.ts` y `.tsx`: cual usar

- `.tsx` -> archivos que devuelven algo visual (JSX, es decir etiquetas como `<View>`). Pantallas y componentes.
- `.ts` -> archivos que solo tienen datos, tipos o estilos. Sin etiquetas.

Los estilos van en `.ts` porque en React Native no se usa CSS: un estilo es solo un
objeto de JavaScript, no lleva JSX.

## 5. Conceptos minimos

- **Componente**: una funcion que devuelve lo que se ve en pantalla.
- **`View`**: es como un `div`.
- **`Text`**: todo texto va dentro de `Text`, nunca suelto.
- **`Pressable`**: es como un `button`.
- **`TextInput`**: es como un `input`.
- **`StyleSheet.create`**: crea los estilos. Los nombres van en camelCase (`backgroundColor`, no `background-color`).
- **`useState`**: guarda informacion que cambia. Cuando cambia, la pantalla se vuelve a dibujar.
- **props**: datos que un componente le pasa a otro, como `<ComponenteTarjeta objeto={item} />`.
- **`type Props`**: en TypeScript, arriba de cada componente se escribe que props recibe.
  Si le pasas algo que no existe o del tipo equivocado, el editor te lo marca en rojo.

## 6. Primeros cambios para practicar

1. Cambia `principal` en `codigo/colores.ts`.
2. Agrega un objeto nuevo en `codigo/datos.ts`.
3. Cambia el texto del titulo en `codigo/Aplicacion.tsx`.
4. Cambia `fontSize` de `titulo` en `codigo/estilos.ts`.

Guarda el archivo y el navegador se actualiza solo.

## 7. Revisar errores de TypeScript

```powershell
npm run revisar-tipos
```

Si no imprime nada, esta todo bien.

## 8. Notas

- Los datos se guardan solo en memoria: al recargar la pagina vuelven los de ejemplo.
- El mismo codigo corre en celular con `npm run android` o `npm run ios` usando la app Expo Go.
