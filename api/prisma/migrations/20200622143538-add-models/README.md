# Migration `20200622143538-add-models`

This migration has been generated at 6/22/2020, 2:35:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Tool" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."Experience" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."Client" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."ConfidenceLevel" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."Member" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200622143538-add-models
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,37 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model Tool {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  createdAt DateTime @default(now())
+}
+
+model Experience {
+  id   Int    @default(autoincrement()) @id
+  name String
+}
+
+model Client {
+  id   Int    @default(autoincrement()) @id
+  name String
+}
+
+model ConfidenceLevel {
+  id   Int    @default(autoincrement()) @id
+  name String
+}
+
+model Member {
+  id   Int    @default(autoincrement()) @id
+  name String
+}
```


