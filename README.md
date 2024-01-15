# Ergin Dervisoglu's Personal Website

You can view the live site at www.ergin-d.com. The site is currently hosted on the [Internet Computer](https://internetcomputer.org/).

## Dependencies

- Node v17.4.0+
- Npm v10.2.3+
- Next.js v14.0.4+

## Installation & Build Scripts

In the project directory, you can run:

### `npm run dev`

Runs `next dev` to start Next.js in development mode. Default port: http://localhost:3000

Fast Refresh is supported through Next.js.

### `npm run build`

Builds the application for production usage/deploy.

### `npm run start`

Use to start the application on a Next.js production server.

## Deploy to the Internet Computer

When deploying to ICP there's an additional project dependency of the IC SDK:

- [IC SDK](https://github.com/dfinity/sdk)

### IC Deploy Steps

1. Create a new production build `npm run dev`.
2. Start DFX service in the background `dfx start --background`.
3. Generate Candid definitions: `dfx generate`.
4. Deploy locally with: `dfx deploy`

5. When ready for production `dfx deploy --ic`
