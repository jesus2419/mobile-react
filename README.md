# mobile-react
react native mobile solution
Esta solucion se creó usando de base react native y la libreria de expo para lanzar el código en android y en ios, asi como para hacer pruebas mas óptimas y rapidas

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