-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tax" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "consumption" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    CONSTRAINT "Devices_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_key" ON "Users"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_consumption_key" ON "Devices"("consumption");
