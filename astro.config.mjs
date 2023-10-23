import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 1234, host: true},output:"static",build: {
        // Example: Generate `page.html` instead of `page/index.html` during build.
        format: 'file'
      }
});

