-- CreateTable
CREATE TABLE "Carrusel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "arte" TEXT NOT NULL,
    "createIn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalpublic" DATETIME NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL
);
