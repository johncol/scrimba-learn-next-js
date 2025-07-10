This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

#### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

#### Learn More

This is a project following the [Next.js 15 course](https://scrimba.com/learn-nextjs-c02moisq6a) on Scrimba.

The project is called Printforge, and figma designs are here: [Printforge](https://www.figma.com/design/AhRMvZ8bxl9CGaSpMfy8e4/Printforge?node-id=0-1&p=f&t=Zr03u6UyzuvIhE8y-0)

#### Database

Using Prisma. Create a free account on [Prisma](https://www.prisma.io/) and create a new project.

##### Set database connection

The connection to your database is configured via environment variables in a `.env` file.

First, rename the existing `.env.example` file to just `.env`:

Then, find your database credentials in the "Set up database access" section, copy the `DATABASE_URL` environment variable and paste them into the `.env` file.

```bash
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=ey...."
```

##### Create database tables

```bash
npx prisma migrate dev --name init
```

##### Seed database

```bash
npm run db-populate
```

##### Prisma Studio

Use Prisma Studio to explore what records have been created in the database

```terminal
npx prisma studio
```
