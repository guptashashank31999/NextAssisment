import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { numeric } from "drizzle-orm/sqlite-core";

export const companyData = pgTable("company_table", {
    id:integer('id').primaryKey(),
    companyName: text().notNull(),
    directorName: varchar({ length: 255 }).notNull(),
    companyAddress: varchar({ length: 255 }).notNull(),
    companyPhone: varchar({ length: 255 }).notNull(),
    companyEmail: varchar({ length: 255 }).notNull(),
    companyFaxNumber: varchar({ length: 255 }).notNull(),
    companyEmployeeCount:integer().notNull(),

})