import { CorsOptions } from "cors";



export const CORS_CONFIGURATION: CorsOptions = {

  origin: ["https://bolsillo-feliz-hazel.vercel.app",
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
};
