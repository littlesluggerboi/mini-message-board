import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";

import ws from "ws";
neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true

// Type definitions
// declare global {
//   var prisma: PrismaClient | undefined
// }
const container = [];
if (process.env.ENVIRONMENT == "development") {
  const prisma = new PrismaClient();
  container.push(prisma);
} else if (process.env.ENVIRONMENT == "production") {
  const connectionString = `${process.env.DATABASE_URL_PRODUCTION}`;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  const prisma = global.prisma || new PrismaClient({ adapter });
  container.push(prisma);
}

const prisma = container[0];
export default prisma;
