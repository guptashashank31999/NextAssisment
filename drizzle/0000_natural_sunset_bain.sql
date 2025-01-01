CREATE TABLE "company_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL,
	"directorName" varchar(255) NOT NULL,
	"companyAddress" varchar(255) NOT NULL,
	"companyPhone" varchar(255) NOT NULL,
	"companyEmail" varchar(255) NOT NULL,
	"companyFaxNumber" varchar(255) NOT NULL,
	"companyEmployeeCount" integer NOT NULL
);
