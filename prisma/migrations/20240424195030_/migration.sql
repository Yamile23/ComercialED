/*
  Warnings:

  - Made the column `finalpublic` on table `Publicacion` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "detalle" TEXT,
    "arte" TEXT NOT NULL
);
INSERT INTO "new_Task" ("arte", "detalle", "id", "nombre") SELECT "arte", "detalle", "id", "nombre" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_Publicacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "arte" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createIn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "finalpublic" DATETIME NOT NULL,
    "catalogo" TEXT,
    "galeria" TEXT,
    "tipo" TEXT,
    "id_category" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL
);
INSERT INTO "new_Publicacion" ("arte", "catalogo", "createIn", "detalle", "finalpublic", "galeria", "id", "id_category", "id_empresa", "link", "tipo", "titulo") SELECT "arte", "catalogo", "createIn", "detalle", "finalpublic", "galeria", "id", "id_category", "id_empresa", "link", "tipo", "titulo" FROM "Publicacion";
DROP TABLE "Publicacion";
ALTER TABLE "new_Publicacion" RENAME TO "Publicacion";
CREATE TABLE "new_Carrusel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT,
    "arte" TEXT NOT NULL,
    "createIn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "finalpublic" DATETIME,
    "id_category" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL
);
INSERT INTO "new_Carrusel" ("arte", "createIn", "detalle", "finalpublic", "id", "id_category", "id_empresa", "titulo") SELECT "arte", "createIn", "detalle", "finalpublic", "id", "id_category", "id_empresa", "titulo" FROM "Carrusel";
DROP TABLE "Carrusel";
ALTER TABLE "new_Carrusel" RENAME TO "Carrusel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
