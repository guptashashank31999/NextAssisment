import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

import {config} from "dotenv"
// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
config({path: ".env"})

export const db = drizzle(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);