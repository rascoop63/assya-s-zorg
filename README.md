# Website — Assya’s zorg

Complete, productieklare website voor Assya Hammou / Assya’s zorg, zelfstandig
jeugdprofessional en persoonlijk begeleider binnen jeugdzorg en het sociaal domein.
De site is gebouwd met alleen HTML, CSS en vanilla JavaScript (geen framework, geen
build-stap) en is direct geschikt om te publiceren, o.a. via Vercel + GitHub.

## Inhoud

```
index.html                   Homepage
over-mij.html                Over mij
diensten.html                Diensten (met ankers per dienst)
voor-instellingen.html       Voor instellingen & opdrachtgevers
voor-clienten.html           Voor cliënten & naasten
werkwijze.html                Werkwijze in 4 stappen
skj-professionaliteit.html   SKJ-registratie & professionaliteit
contact.html                 Contactpagina + formulier
privacyverklaring.html       Privacyverklaring (concept, zie hieronder)
robots.txt                   Voor zoekmachines
sitemap.xml                  XML-sitemap
assets/css/style.css         Alle opmaak (design system, kleuren, typografie) — ongewijzigd
assets/js/main.js            Interactie: menu, sticky header, animaties, formulier — ongewijzigd
assets/img/assya-zorg-logo.png  Het officiële logo (zie "Logo" hieronder)
assets/img/                  Overige illustraties, favicon en Open Graph-afbeelding
```

## Wat er in deze update is bijgewerkt

Alle persoonlijke placeholders zijn overal vervangen door de definitieve gegevens:

- Naam: Assya Hammou (voornaam "Assya" waar dat natuurlijker leest)
- Bedrijfsnaam: Assya’s zorg (consistente schrijfwijze overal)
- Opleiding: HBO Sociaal Werk
- SKJ-registratienummer: 160039340
- Telefoon: 06 20 05 55 79 — klikbaar via `tel:+31620055579`
- E-mail: assya.levertzorgaanu@outlook.com — klikbaar via `mailto:`
- Werkgebied: voornamelijk Noord-Holland, met opdrachten (afhankelijk van de hulpvraag) ook in
  Utrecht, Rotterdam en Den Haag
- Ervaring: ruim 10 jaar (10,6 jaar) binnen gehandicaptenzorg, jeugdzorg, ambulante begeleiding,
  persoonlijke begeleiding, sociaal-maatschappelijk werk en PGB-begeleiding — verwerkt op Home,
  Over mij, Diensten, Voor instellingen, Voor cliënten en de SKJ-pagina

Er zijn geen opleidingen, certificaten, werkgevers of andere gegevens verzonnen die niet zijn
aangeleverd. Waar voorheen "Certificaten" / "Aanvullende registraties" / "Specialisaties" als
placeholder stonden, zijn deze velden verwijderd of vervangen door de wél aangeleverde
ervaringsgebieden en werkgebied, zodat er nergens een leeg of verzonnen gegeven blijft staan.

De Open Graph-afbeelding (`assets/img/og-image.jpg`, gebruikt bij het delen op social media) is
opnieuw gegenereerd met de echte naam en bedrijfsnaam — de oude versie bevatte deze tekst nog
letterlijk als afbeelding.

Het design, de kleuren, typografie, navigatie, animaties en pagina-indeling zijn **ongewijzigd**
gebleven; er is alleen tekstueel/inhoudelijk bijgewerkt, plus een klein aantal kaarten die eerder
een placeholder toonden (bijv. "Specialisaties") zijn logisch vervangen door een veld met wél
beschikbare informatie (bijv. "Ervaring binnen" / "Werkgebied").

## Logo

Het echte, aangeleverde logo van Assya’s zorg staat nu op de site: `assets/img/assya-zorg-logo.png`.
Het is te zien in de header/navigatie van elke pagina, prominent bovenaan de homepage, en in de
footer.

Het logo zelf is **niet aangepast, herontworpen of vervormd** — het ontwerp, de tekst en de
verhoudingen zijn identiek aan het aangeleverde bestand. De enige bewerking is dat de vlakke,
lichte achtergrond van het originele bestand transparant is gemaakt (een gangbare, niet-destructieve
techniek), zodat het logo ook goed leesbaar blijft op de donkergroene delen van de site (header bij
scrollen, footer). Omdat het logo zelf ontworpen is voor een lichte ondergrond, staat er in de
header en de footer een klein, licht "kaartje" achter het logo — puur als achtergrondje, niet als
onderdeel van het logo-ontwerp. Op de homepage (lichte achtergrond) staat het logo los, zonder
kaartje.

Het origineel aangeleverde bestand (met de vlakke achtergrond nog intact) maakt geen deel uit van
deze levering — alleen de verwerkte versie met transparante achtergrond wordt gebruikt, zodat er
maar één bestand is om te onderhouden.

## Nog open — kon niet worden ingevuld

Deze gegevens zijn niet aangeleverd en zijn daarom bewust **niet** verzonnen. Ze staan nog als
duidelijk zichtbare placeholder (oranje gemarkeerd) op de site:

| Placeholder | Waar te vinden | Actie |
|---|---|---|
| `[KVK-NUMMER]` | Footer van elke pagina, contactpagina, SKJ-pagina, privacyverklaring | Vul uw KVK-nummer in via zoeken-en-vervangen |
| `[BEREIKBAARHEID / SPREEKUREN]` | Contactpagina | Vul uw bereikbaarheid/spreekuren in, of verwijder dit veld als niet van toepassing |
| `[UWDOMEIN]` | `canonical`- en Open Graph-links in de `<head>` van elke pagina, `robots.txt`, `sitemap.xml` | Vul in zodra het domein bekend is (zie hieronder over Vercel) |

Gebruik "zoeken en vervangen" in uw editor (bijv. VS Code) om deze in één keer overal te
vervangen.

## Domeinnaam & Vercel

Zodra u weet welk domein de website krijgt (bijvoorbeeld een gratis `*.vercel.app`-adres direct
na deployment, of een eigen domein zoals `assyaszorg.nl`), vervangt u `[UWDOMEIN].nl` door dat
domein in: `robots.txt`, `sitemap.xml`, en de `canonical`/`og:url`/`og:image`-tags bovenaan elke
HTML-pagina. Dit is alleen relevant voor SEO en het delen op social media — de website
functioneert ook zonder deze aanpassing gewoon correct.

## Contactformulier

Het bestaande formulier op `contact.html` is intact gelaten (zelfde velden, zelfde structuur) en
werkt technisch (validatie van verplichte velden). Er staat nu duidelijk bij dat aanvragen bedoeld
zijn om bij **assya.levertzorgaanu@outlook.com** binnen te komen, maar het formulier is nog **niet
gekoppeld aan een verzendservice** — er is bewust geen Formspree-URL of andere koppeling verzonnen.
Kies zelf een van deze opties:

- **Formspree** (eenvoudigst): maak een gratis account op formspree.io, en vervang in
  `contact.html` het `<form id="contact-form" novalidate>` door
  `<form id="contact-form" novalidate action="https://formspree.io/f/UWFORMID" method="POST">`.
  Pas vervolgens in `assets/js/main.js` de afhandeling van dit formulier aan volgens de
  Formspree-documentatie (AJAX-verzending), zodat de huidige nette bevestigingsmelding blijft
  werken.
- **Netlify Forms** (als u op Netlify host): voeg `netlify` en `data-netlify="true"` toe aan de
  `<form>`-tag en volg de Netlify-documentatie. (Bij hosting op Vercel is Formspree of een eigen
  backend gebruikelijker, aangezien Netlify Forms een Netlify-specifieke functie is.)
- **Eigen backend**: laat het formulier POSTen naar uw eigen endpoint en werk de
  JavaScript-afhandeling in `main.js` (`#contact-form`) bij.

## Publiceren via GitHub + Vercel

Dit is een volledig statische site (alleen HTML/CSS/JS): geen server, database of build-stap
nodig.

1. Upload/commit alle bestanden in deze map naar uw GitHub-repository (zorg dat `index.html` in
   de hoofdmap van de repository staat, niet in een submap).
2. Koppel de repository aan Vercel (of, als die koppeling al bestaat, push gewoon naar de branch
   die Vercel volgt) — Vercel herkent een statische site automatisch; er is geen build command
   nodig (of stel deze in als "geen framework / static").
3. Vercel publiceert automatisch een preview-/productie-URL. Wilt u een eigen domein? Koppel dat
   via het Vercel-dashboard en vul dat domein daarna in op de plekken genoemd bij "Domeinnaam &
   Vercel" hierboven.

## Privacyverklaring

`privacyverklaring.html` bevat een conceptversie met KVK-nummer nog als placeholder. Dit is
**geen juridisch sluitende tekst** — laat deze controleren of aanvullen door een deskundige
voordat de website live gaat, zeker gezien de omgang met bijzondere persoonsgegevens binnen de
jeugdzorg (AVG/UAVG). Twee onderdelen zijn bewust open gelaten omdat hier geen gegevens voor zijn
aangeleverd: concrete bewaartermijnen, en eventuele cookies/website-analyse (indien u later
bijvoorbeeld Google Analytics toevoegt, moet dit hier alsnog worden vermeld).

## Testen vóór publicatie

- Open alle pagina's lokaal en controleer alle links en het menu.
- Test het contactformulier na het koppelen van een formulierdienst.
- Test op mobiel, tablet en desktop.
- Controleer of `[KVK-NUMMER]`, `[BEREIKBAARHEID / SPREEKUREN]` en `[UWDOMEIN]` zijn ingevuld
  zodra die gegevens bekend zijn.
