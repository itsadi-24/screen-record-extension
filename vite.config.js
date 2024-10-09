// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//       },
//     },
//   },
// });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         background: resolve(__dirname, 'public/scripts/background.js'),
//         content: resolve(__dirname, 'public/scripts/content.js'),
//       },
//       output: {
//         entryFileNames: (chunkInfo) => {
//           if (chunkInfo.name === 'background' || chunkInfo.name === 'content') {
//             return 'scripts/[name].js';
//           }
//           return '[name].[hash].js';
//         },
//       },
//     },
//     outDir: 'dist',
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'public/scripts/background.js'),
        content: resolve(__dirname, 'public/scripts/content.js'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'background' || chunkInfo.name === 'content'
            ? 'scripts/[name].js'
            : '[name].js';
        },
      },
    },
  },
});
