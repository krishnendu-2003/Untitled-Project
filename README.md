# Untitled Project

Marketing site for Untitled Project, a content creation agency.

## Editing content

Everything you are likely to change lives in `src/content/site.ts`:

- **Prices**: every `price` in `plans` and `extraRevision` is a placeholder (`XX,XXX`). Replace with real amounts. `site.currency` sets the symbol.
- **Revisions**: each plan has `revisions` (rounds) and `changesPerRevision` (changes allowed per round).
- **Booking**: the Book a call section has a built-in Calendly-style scheduler (dates, times and duration in `booking`). Requests arrive by email. Set `site.bookingUrl` to your Calendly event link to swap in your live Calendly instead.
- **References**: replace the placeholder entries in `references` with real projects and links.

Colours and fonts are design tokens at the top of `src/app/globals.css`.

## Development

```bash
npm install
npm run dev
```
