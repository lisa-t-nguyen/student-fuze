set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."referrals" (
	"entryId" serial NOT NULL,
	"date" DATE NOT NULL,
	"entry" TEXT NOT NULL,
	"studentId" integer NOT NULL,
	"userId" integer NOT NULL,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "referrals_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."supports" (
	"entryId" serial NOT NULL,
	"date" DATE NOT NULL,
	"entry" TEXT NOT NULL,
	"studentId" integer NOT NULL,
	"userId" integer NOT NULL,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "supports_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."notes" (
	"entryId" serial NOT NULL,
	"date" DATE NOT NULL,
	"studentId" integer NOT NULL,
	"userId" integer NOT NULL,
	"strengths" TEXT NOT NULL,
	"challenges" TEXT NOT NULL,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "notes_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."students" (
	"studentId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"dateOfBirth" timestamp with time zone,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "students_pk" PRIMARY KEY ("studentId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."teachers" (
	"teacherId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("teacherId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."courses" (
	"courseId" serial NOT NULL,
	"courseTitle" TEXT NOT NULL,
	"teacherId" integer NOT NULL,
	CONSTRAINT "courses_pk" PRIMARY KEY ("courseId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."grades" (
	"gradeId" serial NOT NULL,
	"letterGrade" TEXT NOT NULL,
	"teacherId" integer NOT NULL,
	"courseId" integer NOT NULL,
	"studentId" integer NOT NULL,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "grades_pk" PRIMARY KEY ("gradeId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."attendance" (
	"attendanceId" serial NOT NULL,
	"daysPresent" integer NOT NULL,
	"studentId" integer NOT NULL,
	"studentGradeYearId" integer NOT NULL,
	CONSTRAINT "attendance_pk" PRIMARY KEY ("attendanceId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."studentGradeYears" (
	"studentGradeYearId" serial NOT NULL,
	"yearStart" integer NOT NULL,
	"yearEnd" integer NOT NULL,
	"gradeLevel" integer NOT NULL,
	CONSTRAINT "studentGradeYears_pk" PRIMARY KEY ("studentGradeYearId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."studentPhoto" (
	"studentPhotoId" serial NOT NULL,
	"studentPhoto" TEXT NOT NULL,
	"studentId" integer NOT NULL,
	CONSTRAINT "studentPhoto_pk" PRIMARY KEY ("studentPhotoId")
) WITH (
  OIDS=FALSE
);

ALTER SEQUENCE "students_studentId_seq" RESTART WITH 16500;
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_fk0" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_fk2" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "supports" ADD CONSTRAINT "supports_fk0" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
ALTER TABLE "supports" ADD CONSTRAINT "supports_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "supports" ADD CONSTRAINT "supports_fk2" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "notes" ADD CONSTRAINT "notes_fk0" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
ALTER TABLE "notes" ADD CONSTRAINT "notes_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "notes" ADD CONSTRAINT "notes_fk2" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "students" ADD CONSTRAINT "students_fk0" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("teacherId");
ALTER TABLE "grades" ADD CONSTRAINT "grades_fk0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("teacherId");
ALTER TABLE "grades" ADD CONSTRAINT "grades_fk1" FOREIGN KEY ("courseId") REFERENCES "courses"("courseId");
ALTER TABLE "grades" ADD CONSTRAINT "grades_fk2" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
ALTER TABLE "grades" ADD CONSTRAINT "grades_fk3" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_fk0" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_fk1" FOREIGN KEY ("studentGradeYearId") REFERENCES "studentGradeYears"("studentGradeYearId");
ALTER TABLE "studentPhoto" ADD CONSTRAINT "studentPhoto_fk0" FOREIGN KEY ("studentId") REFERENCES "students"("studentId");
