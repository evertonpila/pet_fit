import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
 
  server: {
    host: '0.0.0.0', // Isso permite acesso fora do container
    port: 5174, // Porta padrão do Vite (ou a que você usa)
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',

    coverage: {
      provider: 'v8', 
      reporter: ['text', 'html'], 
      all: true, 

      include: ['src/**/*.{ts,tsx}'],

      exclude: [
        'coverage/**', 
        'dist/**',
        'vite.config.ts', 
        
        'src/main.tsx', 
        'src/vite-env.d.ts',
        'src/styles/**', 
        'src/types/**', 
        'src/mocks/**', 
        
        'src/**/styles.ts',
        'src/**/style.ts',
        'src/**/styled.ts', 
        'src/**/*.test.{ts,tsx}', 
      ],
    },
  },
});