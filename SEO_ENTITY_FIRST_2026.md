# Entity-first technical SEO — Arsalynk (8 October 2026)

## Implemented in source code
- Homepage branding/title and `WebSite`, `Organization`, `WebPage` structured data linked with stable `@id` identifiers.
- Entity uses the actual parent legal name **PT Sinergi Muda Arsa**, not the invented “PT Arsalynk”.
- Real indexable URLs: `/about-us`, `/our-business`, `/our-solution`, `/our-works`, `/insight-programs`, `/contact-us`. Short aliases redirect permanently.
- The homepage maintains its visible menu of internal links. Section-specific `BreadcrumbList` and collection schema are rendered on actual index pages; layouts do not leak parent schema into detail pages.
- Canonical host is www.arsalynk.com. Existing robots/sitemap, icons, SEO redirects, and official WhatsApp number are preserved.
- Google site verification only emits a meta token if `GOOGLE_SITE_VERIFICATION` is configured with a real value.
- Do not invent business hours, GPS coordinates, or social media URLs. Confirm the existing Instagram and LinkedIn `sameAs` targets with the account owners.

## External tasks after deployment (not automated by a code commit)
1. Check HTTP 200 and rendered metadata/JSON-LD on canonical pages and verify host redirects, `/robots.txt`, and `/sitemap.xml`.
2. Verify `arsalynk.com` in Google Search Console using DNS, or use a valid GSC token in the server environment for HTML-tag verification.
3. Submit `https://www.arsalynk.com/sitemap.xml`, run URL Inspection, and request indexing of the home and section pages.
4. Keep the Instagram and LinkedIn bios pointed at the canonical website and use accurate business details consistently.
5. Create or claim a Google Business Profile if the business is eligible. Verification does **not** guarantee a Knowledge Panel.
6. Measure branded search impressions, clicks, queries, indexing and sitelink presentation; no fixed outcome timetable.

**Google, not the schema markup, decides ranking, sitelinks, and whether a Knowledge Panel is shown.** Sitelinks Search Box was retired in November 2024; don't add `SearchAction` expecting that visual.

References:
- https://developers.google.com/search/docs/appearance/sitelinks
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/blog/2024/10/sitelinks-search-box
