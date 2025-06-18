import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "1bc0fbae-9364-4629-8e3f-77a1a311e9ea-00-sm2d51dc052s.spock.replit.dev",
    ],
  },
});
