# Website — [BEDRIJFSNAAM]

Dit is een complete, productieklare website voor een zelfstandig jeugdprofessional /
persoonlijk begeleider binnen jeugdzorg en het sociaal domein. De site is gebouwd met
alleen HTML, CSS en vanilla JavaScript (geen framework, geen build-stap nodig) en kan
direct gepubliceerd worden.

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
assets/css/style.css         Alle opmaak (design system, kleuren, typografie)
assets/js/main.js            Interactie: menu, sticky header, animaties, formulier
assets/img/                  Illustraties, favicon en Open Graph-afbeelding
```

## 1. Placeholders invullen — verplicht vóór publicatie

Zoek in alle bestanden op vierkante haken (`[...]`) en vul uw eigen gegevens in.
De belangrijkste placeholders:

| Placeholder | Waar te vinden |
|---|---|
| `[NAAM]` | Hero, Over mij, titels |
| `[BEDRIJFSNAAM]` | Overal (header, footer, teksten, meta-tags) |
| `[UWDOMEIN]` | `canonical`- en Open Graph-links in de `<head>` van elke pagina, `robots.txt`, `sitemap.xml` |
| `[OPLEIDING]` | Over mij, SKJ-pagina |
| `[SKJ-REGISTRATIENUMMER]` | Homepage, Over mij, SKJ-pagina, footer |
| `[ERVARING]` | Homepage, Over mij |
| `[BIJZONDERE SPECIALISATIES]` | Homepage, Over mij, SKJ-pagina |
| `[WERKGEBIED]` | Homepage, footer, contactpagina, privacyverklaring |
| `[TELEFOONNUMMER]` | Header (mobiel), footer, contactpagina (ook in `tel:`-links) |
| `[E-MAILADRES]` | Footer, contactpagina (ook in `mailto:`-links) |
| `[KVK-NUMMER]` | Footer, contactpagina, SKJ-pagina, privacyverklaring |
| `[BEREIKBAARHEID / SPREEKUREN]` | Contactpagina |
| `[DATUM]` | Privacyverklaring |

Tip: gebruik "zoeken en vervangen" in een teksteditor (bijv. VS Code) om elke
placeholder in één keer over alle bestanden te vervangen.

Let op: de `tel:` en `mailto:`-links werken pas correct zodra `[TELEFOONNUMMER]`
en `[E-MAILADRES]` zijn vervangen door de echte gegevens (zonder haakjes, spaties
mogen wel, maar voor `tel:` is een formaat als `tel:+31612345678` het meest
betrouwbaar).

## 2. Contactformulier activeren

Het formulier op `contact.html` werkt technisch (validatie van verplichte velden,
foutmeldingen), maar is nog **niet gekoppeld aan een verzendservice** — er is
bewust geen nepfunctionaliteit ingebouwd. Kies een van de volgende opties:

- **Formspree** (eenvoudigst): maak een gratis account op formspree.io, en
  vervang in `contact.html` het `<form id="contact-form" novalidate>` door
  `<form id="contact-form" novalidate action="https://formspree.io/f/UWFORMID" method="POST">`.
  Verwijder vervolgens in `assets/js/main.js` het `event.preventDefault()`-blok
  voor dit formulier (of pas het aan volgens de Formspree-documentatie voor
  AJAX-verzending).
- **Netlify Forms** (als u op Netlify host): voeg `netlify` en `data-netlify="true"`
  toe aan de `<form>`-tag en volg de Netlify-documentatie.
- **Eigen backend**: laat het formulier POSTen naar uw eigen endpoint en werk de
  JavaScript-afhandeling in `main.js` (`#contact-form`) bij.

Vergeet niet de bevestigingstekst in `main.js` aan te passen zodra de koppeling
actief is.

## 3. Hero-illustratie en OG-afbeelding

In plaats van een stockfoto is gekozen voor een eigen, abstracte illustratie
(`assets/img/hero-illustration.svg`) die verbinding en begeleiding uitbeeldt,
zonder een specifieke (stock)persoon te tonen — dit voorkomt licentieproblemen
en past goed bij de privacygevoeligheid van jeugdzorg. U kunt dit desgewenst
vervangen door een eigen professionele foto:

1. Plaats uw foto (bijv. `hero-foto.jpg`) in `assets/img/`.
2. Vervang in `index.html` de `<img src="/assets/img/hero-illustration.svg" ...>`
   door uw eigen afbeelding, met een passende `alt`-tekst.
3. Gebruik alleen foto's waarvan u de rechten heeft (eigen foto, professionele
   fotograaf met licentie, of een royalty-free bron met commerciële licentie).

De Open Graph-afbeelding (`assets/img/og-image.jpg`, gebruikt wanneer de site
gedeeld wordt op social media) is gegenereerd vanuit `og-image-source.svg`. Wilt
u deze aanpassen? Bewerk de SVG en converteer opnieuw naar een JPG/PNG van
1200×630 pixels.

## 4. Website publiceren op een eigen domein

Dit is een volledig statische website (alleen HTML/CSS/JS): er is geen server
of database nodig. U kunt de bestanden zo uploaden naar bijna elke hostingpartij:

- **Eenvoudige/gratis opties**: Netlify, Vercel of Cloudflare Pages — sleep de
  hele map naar hun dashboard, of koppel een Git-repository.
- **Traditionele hosting**: upload alle bestanden via FTP/SFTP naar de
  `public_html`-map van uw hostingpakket.
- Zorg dat `index.html` in de hoofdmap (root) van uw domein terechtkomt.
- Koppel vervolgens uw eigen domeinnaam via uw hostingpartij of domeinregistrar.

## 5. Lettertype (Google Fonts)

De website gebruikt de gratis Google Fonts "Fraunces" (koppen) en "Work Sans"
(lopende tekst), geladen via een `<link>` naar `fonts.googleapis.com`. Dit
vereist een internetverbinding bij het laden van de website (normaal voor een
live website). Wilt u niet afhankelijk zijn van Google Fonts (bijv. om
privacyredenen), download dan de lettertypebestanden en host ze zelf; pas de
`@font-face`/`<link>`-verwijzingen in de `<head>` van elke pagina en in
`style.css` (variabelen `--font-heading` / `--font-body`) hierop aan.

## 6. SEO — nog te doen

- Vervang `[UWDOMEIN]` overal door uw echte domeinnaam (zie tabel hierboven).
- Dien `sitemap.xml` in bij Google Search Console en Bing Webmaster Tools na
  publicatie.
- Vul het JSON-LD structured data-blok onderaan de `<head>` van `index.html`
  aan zodra naam, adresgegevens en werkgebied bekend zijn.
- Overweeg een Google Bedrijfsprofiel aan te maken voor lokale vindbaarheid,
  zodra een concreet werkgebied/vestigingsplaats bekend is (nu bewust niet
  ingevuld, om geen plaatsnamen te verzinnen).

## 7. Privacyverklaring

`privacyverklaring.html` bevat een conceptversie. Dit is **geen juridisch
sluitende tekst** — laat deze controleren of aanvullen door een deskundige
voordat u de website live zet, zeker gezien de omgang met bijzondere
persoonsgegevens binnen de jeugdzorg (AVG/UAVG).

## 8. Testen vóór publicatie

- Open alle pagina's lokaal (dubbelklik `index.html`, of start een lokale
  server, bijv. `python3 -m http.server` in deze map) en controleer alle links.
- Test het contactformulier na het koppelen van een formulierdienst.
- Test op mobiel, tablet en desktop (of gebruik de devtools-simulatie in uw
  browser).
- Controleer of alle placeholders zijn vervangen (zoek nogmaals op `[` in de
  hele map).
