import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: env.REACT_APP_BASE_URL || '/',
    server: {
      port: 3000
    },
    define: {
      __baseUrl__: JSON.stringify(env.REACT_APP_BASE_URL),
    }
  };
});
