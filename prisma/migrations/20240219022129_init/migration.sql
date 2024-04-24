-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "arte" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "createIn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Publicacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "arte" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createIn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalpublic" DATETIME NOT NULL,
    "catalogo" TEXT NOT NULL,
    "galeria" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL
);
