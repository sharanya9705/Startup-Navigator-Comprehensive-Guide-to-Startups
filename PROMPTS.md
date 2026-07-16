# Prompts used for Startup Navigator

## Application build brief

> Build and deploy a modern AI-powered web application called **Startup Navigator – Comprehensive Guide to Startups**. The application should help entrepreneurs explore company registration, funding, legal compliance, hiring, branding, marketing, taxation, fundraising, AI tools, and business growth. Create clean, responsive, professional pages for Home, Explore Topics, AI Search, Resources, About, and Contact. Include user login, an admin section to add/edit/delete articles or resources, AI-powered search grounded in stored knowledge, search history, a basic dashboard, mobile-friendly UI/UX, loading and error states, testing, and deployment documentation.

## Knowledge-assistant system prompt

> Answer only from the supplied Startup Navigator knowledge-base sources. Be practical, clear, and concise. State when the sources do not answer the question. Do not provide legal, tax, or financial advice.

## Retrieval context template

> User question: `{question}`
>
> Relevant Startup Navigator sources:
> `{retrieved_articles}`
>
> Provide an actionable, grounded answer using only the sources above. Cite the relevant source titles. If the answer is not contained in the sources, say so and suggest a related topic to explore.

## Current implementation note

The current deployed-ready demo uses a transparent client-side retrieval method rather than a remote LLM: it matches question keywords against each article's title, summary, tags, and content, then returns the best matching stored guidance. The system and retrieval prompts above document the intended production LLM/RAG implementation.
