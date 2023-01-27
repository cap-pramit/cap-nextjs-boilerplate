This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project structure:

1. next.config.js - contains next related config and build details similar to webpack configs
2. styles - contains global and base module styles
3. src - components, helpers etc kept here
4. public - assets folder contains all images
5. pages - behaves as routes of the app, index.tsx is the base app module that loads for every route, each route path is defined as a folder here, which contains individual index.tsx for route file (similar to containers of react)
6. pages/api - api routes act as API support to UI

Basic route setup done, default route ('/') and blog route ('/blog')
Blog content fetched from blogs.ts API call, that takes data from stored data.json file
Types defined : type_blog_records and type_blog (first for fetching stored data and second for blog type on UI)

## Future scope

1. Plugin redux / context API
2. Start blog site development from base setup