import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'test'),
  server: {
    open: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/SelectboxJS.ts'),
      name: 'SelectboxJS',
      fileName: (format) => `selectbox-js.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {}
  }
});
