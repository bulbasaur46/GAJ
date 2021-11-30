SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
  "_id" bigserial NOT NULL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "email" varchar NOT NULL UNIQUE,
  "application_count" bigint DEFAULT 0,
  "interview_count" bigint DEFAULT 0,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.usersToJobs(
  "_id" bigserial NOT NULL,
  "user_id" bigint NOT NULL,
  "job_id" bigint NOT NULL,
  CONSTRAINT "usersToJobs_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.jobs(
  "_id" bigserial NOT NULL,
  "application" varchar NOT NULL,
  "job_title" varchar NOT NULL,
  "wage" bigint,
  "date_posted" date,
  "date_of_application" date NOT NULL,
  "url" varchar,
  "recruiter_name" varchar,
  "recruiter_email" varchar,
  "status" varchar NOT NULL,
  "to_do_list" varchar,
  "notes" varchar,
  "reminder" varchar,
  CONSTRAINT "jobs_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.companies (
  "_id" bigserial NOT NULL,
  "name" varchar NOT NULL,
  "industry" varchar,
  CONSTRAINT "companies_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.jobsToCompanies (
  "_id" bigserial NOT NULL,
  "job_id" bigint NOT NULL,
  "company_id" bigint NOT NULL,
  CONSTRAINT "jobsToCompanies_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE public.usersToJobs ADD CONSTRAINT "usersToJobs_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.usersToJobs ADD CONSTRAINT "usersToJobs_fk1" FOREIGN KEY ("job_id") REFERENCES public.jobs("_id");

ALTER TABLE public.jobsToCompanies ADD CONSTRAINT "jobsToCompanies_fk0" FOREIGN KEY ("job_id") REFERENCES public.jobs("_id");
ALTER TABLE public.jobsToCompanies ADD CONSTRAINT "jobsToCompanies_fk1" FOREIGN KEY ("company_id") REFERENCES public.companies("_id");
