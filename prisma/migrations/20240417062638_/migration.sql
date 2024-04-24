-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Publicacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "arte" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createIn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalpublic" DATETIME NOT NULL,
    "catalogo" TEXT,
    "galeria" TEXT,
    "tipo" TEXT NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL
);
INSERT INTO "new_Publicacion" ("arte", "catalogo", "createIn", "detalle", "finalpublic", "galeria", "id", "id_category", "id_empresa", "link", "tipo", "titulo") SELECT "arte", "catalogo", "createIn", "detalle", "finalpublic", "galeria", "id", "id_category", "id_empresa", "link", "tipo", "titulo" FROM "Publicacion";
DROP TABLE "Publicacion";
ALTER TABLE "new_Publicacion" RENAME TO "Publicacion";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
