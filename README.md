# mobile-react
react native mobile solution
Esta solucion se creó usando de base react native y la libreria de expo para lanzar el código en android y en ios, asi como para hacer pruebas mas óptimas y rapidas

1. Instalar Node.js y npm
Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde nodejs.org.

Para verificar si ya los tienes instalados, ejecuta en tu terminal:

node -v
npm -v
2. Instalar React Native CLI
Instala el CLI de React Native globalmente en tu sistema:

npm install
npm install -g expo-cli
npm install -g react-native-cli
npx expo start

plano de la aplicaion 
servinear/
├── app/
│   ├── _layout.tsx         // Configuración del layout de la app
│   ├── index.tsx           // Pantalla principal (Home)
│   ├── (tabs)/             // Carpeta con las pantallas de pestañas
│   │   ├── _layout.tsx     // Configuración del layout de las pestañas
│   │   ├── index.tsx       // Pantalla de la pestaña "Home"
│   │   ├── two.tsx         // Pantalla de la pestaña "Two"
│   ├── (auth)/             // Carpeta para pantallas de autenticación (opcional)
│   ├── +not-found.tsx      // Pantalla para rutas no encontradas
├── assets/                 // Recursos como imágenes, fuentes, etc.
├── components/             // Componentes reutilizables
├── constants/              // Constantes como colores, estilos, etc.
├── hooks/                  // Hooks personalizados
├── providers/              // Proveedores de contexto (opcional)
├── utils/                  // Funciones utilitarias
├── package.json            // Dependencias y scripts