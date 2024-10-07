// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// // import { crx } from '@crxjs/vite-plugin';
// // import manifest from './src/manifest.json';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         background: 'src/scripts/background.js',
//         content: 'src/scripts/content.js',
//       },
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
