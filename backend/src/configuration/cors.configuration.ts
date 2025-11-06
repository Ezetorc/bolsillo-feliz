import { CorsOptions } from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CORS_ALLOWED_ORIGINS,
].filter(Boolean) as string[];

export const CORS_CONFIGURATION: CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};
