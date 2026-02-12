# AGENTS.md — Perkpad (Lovable) Code Standards

## Mission
Keep this app reliable and easy to use. Make changes that are small, testable, and reversible.

## Definition of “Works”
The app is considered working when ALL are true:
1) `npm run dev` starts without errors
2) `npm run build` succeeds
3) `npm run lint` succeeds
4) Login works (Supabase auth) and session persists on refresh
5) Business Owner Dashboard loads only for authenticated users
6) Customer QR Scan page loads on mobile and completes the intended flow (or shows a clear fallback)

## Scope for UI changes
UI improvements are allowed ONLY for:
- Login screen
- Business Owner Dashboard
- Customer QR Scan screen

UI goals:
- Mobile-first layout
- Clear hierarchy (headline → body → CTA)
- Consistent spacing and typography
- Clear empty states and error states
- Prefer shadcn-ui components + Tailwind
- Do NOT change core business logic while doing UI polish

## Safety rules
- Never commit secrets or `.env` files
- Do not log sensitive data (tokens, user data, secrets)
- Keep Supabase keys in environment variables
- If unsure, add a TODO comment rather than guessing

## Change management
- Make changes in small commits
- If a change touches auth, routing, or Supabase calls: add/adjust tests
- If build/lint fails: fix that BEFORE any UI work

## Testing expectations (minimal is fine)
Target: add a small test suite that protects the 3 critical screens:
- Login page renders + primary CTA visible
- Dashboard route is protected (unauthenticated users are redirected or see a login prompt)
- QR scan page renders + shows instruction/CTA

## Code style
- Prefer clear, readable code over clever code
- Keep components small and reusable
- Avoid introducing new libraries unless necessary
- Follow existing patterns in `/src/pages`, `/src/components`, `/src/integrations/supabase`

## What to do when something is unclear
Ask for the file path or search the repo for:
- routes (React Router)
- auth guards
- dashboard component
- scan page component

Then propose the smallest safe change.
