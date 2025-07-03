- install
```
yarn add @prisma/client
```

- help
```
npx prisma
```

- init
```
npx prisma init
```
prisma directoryとscema.prismaが作られる


-- schema.prisma

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
    id     Int     @id @default(autoincrement())
    username String
    password String
}
```
.envとかで接続文字列は設定する

- migrate
```
npx prisma migrate dev --name [migrationの名前]
```
Databaseがない時はdatabaseが作成される

tableのmigrationも実行される

schemaの差分を解析して差分のSQLが流れる

- scripts
tsスクリプトを使って実行する
project root直下で
```
yarn add ts-node
mkdir scripts; cd scripts
../node-module/.bin/tsc --init # これでtsconfig.jsonができる
../node-module/.bin/ts-node create_user.ts
```
create_user.tsはscriptsにはいっているやつ
