import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import {config} from "dotenv"


config({path: ".env"})
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
  },
});