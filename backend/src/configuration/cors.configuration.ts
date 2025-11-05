import { CorsOptions } from "cors";

export const CORS_CONFIGURATION: CorsOptions = {
  origin: ["http://localhost:5173",
     "https://bolsillo-feliz-jet.vercel.app",
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};
