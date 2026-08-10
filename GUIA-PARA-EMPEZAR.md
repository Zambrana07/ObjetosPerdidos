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

## 3. Que hace cada archivo

| Archivo | Para que sirve |
| --- | --- |
| `index.js` | Primer archivo que se ejecuta. Solo registra la app. |
| `Aplicacion.js` | Componente principal. Decide que pantalla se muestra y guarda la lista de objetos. |
| `pantallas/PantallaListaObjetos.js` | Pantalla que muestra la lista de objetos perdidos. |
| `pantallas/PantallaPublicarObjeto.js` | Pantalla con el formulario para reportar un objeto. |
| `componentes/TarjetaObjeto.js` | Caja visual que muestra un objeto. |
| `componentes/BotonPrincipal.js` | Boton reutilizable. |
| `datos/objetosDeEjemplo.js` | Objetos de prueba para ver algo al inicio. |
| `estilos/colores.js` | Los colores de la app en un solo lugar. |
| `app.json` | Nombre, icono y configuracion del proyecto Expo. |
| `package.json` | Lista de dependencias y comandos (`npm run web`). |

## 4. Conceptos minimos

- **Componente**: una funcion que devuelve lo que se ve en pantalla.
- **`View`**: es como un `div`.
- **`Text`**: todo texto va dentro de `Text`, nunca suelto.
- **`Pressable`**: es como un `button`.
- **`TextInput`**: es como un `input`.
- **`StyleSheet.create`**: los estilos se escriben en JavaScript, no en CSS. Los nombres van en camelCase (`backgroundColor`, no `background-color`).
- **`useState`**: guarda informacion que cambia. Cuando cambia, la pantalla se vuelve a dibujar.
- **props**: datos que un componente le pasa a otro, como `<TarjetaObjeto titulo="Mochila" />`.

## 5. Primeros cambios para practicar

1. Cambia el color `principal` en `estilos/colores.js`.
2. Agrega un objeto nuevo en `datos/objetosDeEjemplo.js`.
3. Cambia el texto del titulo en `Aplicacion.js`.

Guarda el archivo y el navegador se actualiza solo.

## 6. Notas

- Los datos se guardan solo en memoria: al recargar la pagina vuelven los de ejemplo.
- El mismo codigo corre en celular con `npm run android` o `npm run ios` usando la app Expo Go.
