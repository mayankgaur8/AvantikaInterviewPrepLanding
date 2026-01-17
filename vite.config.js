import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Dev-only mock API to avoid proxy errors while backend is down
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          try {
            const url = req.url || '';

            // Mock create-order POST endpoint
            if (url.startsWith('/api/payments/create-order')) {
              if (req.method === 'OPTIONS') {
                res.statusCode = 200;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.end();
                return;
              }

              const chunks = [];
              req.on('data', (c) => chunks.push(c));
              req.on('end', () => {
                // You can inspect request body if needed: Buffer.concat(chunks).toString()
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({
                  success: true,
                  orderId: 'mock_order_123',
                  id: 'mock_order_123',
                  amount: 100,
                  currency: 'INR',
                }));
              });
              return;
            }

            // Mock verify POST endpoint (so redirect-based flow can auto-unlock locally)
            if (url.startsWith('/api/payments/verify')) {
              if (req.method === 'OPTIONS') {
                res.statusCode = 200;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.end();
                return;
              }

              const chunks = [];
              req.on('data', (c) => chunks.push(c));
              req.on('end', () => {
                // Basic mock verification: echo back ok: true and include received payload for debugging
                let payload = {};
                try {
                  const raw = Buffer.concat(chunks).toString() || '{}';
                  payload = JSON.parse(raw);
                } catch (e) {
                  payload = { raw: Buffer.concat(chunks).toString() };
                }

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ ok: true, verified: true, payload }));
              });
              return;
            }

          } catch (e) {
            console.warn('mock-api error', e);
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Proxy API requests during development to your backend so fetch('/api/...') returns JSON
  server: {
    proxy: {
      // Change BACKEND_URL environment variable to point to your backend (default: http://localhost:3000)
      "/api": {
        target: process.env.BACKEND_URL || "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        // keep the /api prefix on the proxied request; remove rewrite if your backend expects /mcq/:topic without /api
        rewrite: (path) => path,
      },
    },
  },
});