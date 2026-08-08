# Contact form: email instead of database

Replace the database-backed contact form with a direct email to the admin inbox ([amashehihsan73@gmail.com](mailto:amashehihsan73@gmail.com)). Nothing is stored.

## What changes

- The contact form keeps its exact loo k, fields, validation, and success/error states.
- On submit, the server validates the input and sends a formatted email to the admin inbox with the sender's name, email, subject, and message. The sender's address is set as reply-to so replies go straight back to them.
- No message is written to or read from the database.

## Database removal

- Drop the `contact_messages` table and its access rules.
- Remove all code that talks to the database from the contact flow.

## Sender domain

Email sending needs a domain you own as the sender address. You said one isn't ready yet, so I'll build the full email path now; messages will start delivering as soon as a sender domain is set up and verified. Until then, submissions will report a send failure rather than silently disappearing.

## Technical notes

- Rewrite `src/lib/contact.functions.ts`: keep the Zod schema and `createServerFn`, drop the Supabase client, and send via Lovable's managed email API (`sendTemplateEmail`) with an idempotency key.
- Add a React Email template `src/lib/email-templates/contact-message.tsx` styled to the Voltrage brand, registered in the template registry (registry + send helper scaffolded on first use).
- `src/routes/contact.tsx` needs no structural change beyond error copy.
- Migration: `DROP TABLE public.contact_messages;`