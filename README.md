# Untitled Project

Marketing site for Untitled Project, a content creation agency.

## Editing content

Everything you are likely to change lives in `src/content/site.ts`:

- **Prices**: every `price` in `plans` and `extraRevision` is a placeholder (`XX,XXX`). Replace with real amounts. `site.currency` sets the symbol.
- **Revisions**: each plan has `revisions` (rounds) and `changesPerRevision` (changes allowed per round).
- **Booking**: set `site.calLink` to your Cal.com event path (for example `untitled-project/discovery-call`) and every booking section shows live Cal.com, in the site colours, with the visitor's plan, service and context link prefilled as booking notes. Until then a built-in scheduler (dates, times and duration in `booking`) sends requests by email.
- **References**: replace the placeholder entries in `references` with real projects and links.

Colours and fonts are design tokens at the top of `src/app/globals.css`.

## Development

```bash
npm install
npm run dev
```
