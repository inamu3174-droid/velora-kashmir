# VELORA — From Kashmir, Closer to You

Premium brand website for authentic Kashmiri honey, saffron, dry fruits and Kahwa.

## Tech Stack

- React 19 + Vite + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Express + tRPC
- Drizzle ORM

## Getting Started

```bash
# Install dependencies
pnpm install
# or
npm install --legacy-peer-deps

# Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
client/          # React frontend
  src/
    pages/       # Home (main landing), NotFound
    components/  # UI + custom components
    ...
server/          # Express + tRPC backend
shared/          # Shared types & constants
drizzle/         # Database schema
```

## Notes

- Product images currently reference `/manus-storage/...`. Replace with your own assets.
- WhatsApp number is a placeholder in `client/src/pages/Home.tsx` — update it.
- Some advanced Manus platform features (LLM, voice, etc.) are simplified or stubbed.

## License

MIT
