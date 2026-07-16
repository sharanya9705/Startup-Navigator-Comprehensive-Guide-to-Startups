# Startup Navigator

A responsive, static-first startup guidance platform with a client-side knowledge base, demo role-based admin workspace, search history, and a retrieval-style AI search experience.

## Run locally

```bash
npm start
```

Open `http://localhost:3000`.

## Demo login

- Email: `admin@startupnavigator.app`
- Password: `Navigator2026!`

## Architecture

The UI is a dependency-free single-page application. Content, login session, and search history live in browser `localStorage`, allowing a fully working demo with no server-side secrets. `server.js` is a minimal local static server; Vercel serves the static assets directly and `vercel.json` provides single-page routing.

## AI / RAG approach

The AI guide implements transparent client-side retrieval: it scores question keywords against article title, tags, summary, and body, then returns the highest-relevance stored guidance with source chips. This avoids presenting fabricated external facts and is safe to deploy without an exposed API key.

For production generation, replace `answer()` with a server-side endpoint that retrieves the top 3 articles, then sends them as context to an LLM. Suggested system prompt: *"Answer only from the supplied Startup Navigator sources. Be practical, concise, and state when the sources do not answer the question. Do not provide legal, tax, or financial advice."*

