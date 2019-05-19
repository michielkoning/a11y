# Algemeen

## Over mij

- Projecten
- Certification

## Wat betekent A11y

![](images/a11y.png)

## Niews

### Microsoft lanceert a11y controller

![](images/microsoft-xbox-adaptive-controller.jpg)
[![](https://img.youtube.com/vi/9fcK19CAjWM/0.jpg)](https://www.youtube.com/watch?v=9fcK19CAjWM)

### Beyonce is aangeklaagd

![](images/beyonce.png)

## Misvattingen

- Screenreaders ondersteunen geen javascript
- Het kost veel tijd
- Je doet het alleen voor blinden- of slechtzienden
- Je moet de aria tags uit je hoofd leren

## Doel van de presentatie

- Overtuigen van het nut
- Enthousiast maken voor a11y
- Dat a11y nu een standaard wordt voor componenten
- Doel is niet dat we vanaf nu a11y sites op gaan leveren of gaan refactoren. Daar moet de klant voor betalen. Het is makkelijker om een nieuwe site om te zetten, dan een bestaande site. Zelfde geldt voor
  seo en responsive design.

## Nut en noodzaak

- Site laagdrempeling maken
- Gebruikersgroep verbreden
- Fix for one, solve for many
- Semantisch beter opgezet
- Site is futureproof (controllers, voice assistants)

## POUR

- Perceivable
  ondertiteling, contrast, screenreader
- Operable
  toetsenboard, stem
- Understandable
  schrijf b1 niveau: korte zinnen, geen bijzinnen
- Robust
  oude apparaten

## Doelgroep

### Algemeen

![](images/statistieken.png)

### Slechtzienden

![](images/slechtzienden.jpg)

## Use cases

### Toetsenbord

- Mensen met fysieke beperkingen
- Controller op de browser
- Lege batterijen op de muis
- Poweruser

### Juist contrastwaarden

- Slechtzienden
- Gebruikers met slechte beeldschermen
- Smartphone gebruiken in de felle zon

### Videos met captions

- Doven/slechhorenden
- Drukke trein
- Op kantoor, tussen het deployen door

## Wat zijn screenreaders

> Een schermlezer of (naar het Engels) screenreader is een extern softwareprogramma dat de tekst van andere software kan voorlezen, en soms de software met stem kan besturen.

- MacOs en iOs: VoiceOver
- Google: Voice assistent
- Windows: Narrator
- Overig: JAWS, NVDA, Supernova

## Cetificering

- Drempelvrij
- A/AA/AAA
- Alles moet voldoen aan de standaarden, inclusief subdomeinen, scripts en PDFs
- PDF moeten indexeerbaar zijn
- Je site moet ook werken in landscape mode

## Verantwoordelijkheid

- Design/Ux
- Frontend
- Content

# Richtlijnen

## Javascript

- JavaScript is toegestaan, mits geen toegankelijkheidsproblemen worden veroorzaakt.
- Verander nooit de rol van een element en zorg dat alles toetsenbord toegankelijk blijft.

## Basistaal (en taalwisselingen)

> SC 3.1.1 (A) en 3.1.2 (AA)

- De basistaal van de webpagina is aangegeven (lang en/of xml:lang binnen <html>).

```html
<!DOCTYPE html>
<html lang="en"></html>
```

- De taalwisselingen op de webpagina zijn aangegeven.

```html
Volg ons op <span lang="nl">Facebook</span>
```

## Paginatitel

> SC 2.4.2 (A)

- De webpagina heeft een titel die het doel of het onderwerp beschrijft.
- De paginatitel is uniek binnen de website.

## Koppen SC 1.3.1 (A) en 2.4.6 (AA)

- Koppen worden correct opgemaakt (`<h1>`, `<h2>` etc., `<caption>` of `<legend>`).
- Koppen geven een goede beschrijving van de content.

## Lijsten SC 1.3.1 (A)

- Het `<ul>` element is gebruikt voor ongeordende lijsten.
- Het `<ol>` element is gebruikt voor geordende of genummerde lijsten.
- Het `<dl>` element is gebruikt voor definitielijsten.

## Tabellen SC 1.3.1, 1.3.2 (A) en 2.4.6 (AA)

- Er zijn geen tabellen gebruikt voor het toepassen van layout.
- Rij en kolomkoppen zijn correct opgemaakt (met th elementen).
- Als een summary wordt geboden, dient deze inhoudelijk anders te zijn dan de caption.

## Citaten SC 1.3.1 (A)

- Gebruik `<blockquote>` enkel voor citaten in blokvorm en niet voor de opmaak van tekst.

## Nadruk

> SC 1.3.1 (A)

- Woorden met nadruk zijn opgemaakt met `<strong>` of `<em>` (en niet met `<b>`, `<i>` of CSS).
- De elementen `<strong>` en `<em>` zijn niet gebruikt om koppen mee te maken.

## Frames en iframes

> SC 2.4.1, 4.1.2 (A)

- Iframes hebben een title attribuut die de inhoud van het iframe beschrijven.

```html
<iframe title="Twitter feed" src="..."></iframe>
```

## Tekstalternatief voor afbeeldingen

> SC 1.1.1 (A)

- Functionele afbeeldingen hebben een duidelijk beschrijvend tekstueel alternatief (alt tekst).

```html
<img src="images/employeers" alt="Twee Valtech medewerkers aan het werk" />
```

```html
<svg>
  <title>Volg Valtech op Facebook</title>
  ...
</svg>
```

- Decoratieve afbeeldingen hebben een leeg alt attribuut of zijn via CSS geplaatst.
- Als alternatief niet in alt attribuut past: langere beschrijving rondom afbeelding of ernaar verwijzen.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%" />
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

- Afbeeldingen die als link gebruikt worden, dienen altijd tekstueel alternatief te hebben.

```html
<a><img src="img/logo.png" alt="Company name"/></a>
```

- CSS-afbeeldingen: alternatief mag buiten beeld geplaatst (nooit display:none / visibility:hidden).

## Afbeeldingen van tekst

> SC 1.4.5 (AA)

- Zet geen tekst op afbeeldingen, maar plaats tekst met HTML en style deze met CSS. _Uitzondering: essentiële afbeeldingen met tekst zoals logo's._
  ![](images/coca-cola.jpg)

## Captcha

> SC 1.1.1 (A)

- Er is zeker één alternatieve Captcha voor andere zintuigen beschikbaar.
- Er is een tekstalternatief met doel en instructie over waar de alternatieve Captcha te vinden is.

## Kleurgebruik

> SC 1.3.1 en 1.4.1 (A)

- Kleur wordt niet als enige middel gebruikt om informatie over te brengen.
- Kleur wordt niet als enige middel gebruikt om een actie aan te geven.
- Kleur wordt niet als enige middel gebruikt om tot een reactie op te roepen.
- Kleur wordt niet als enige middel gebruikt om een visueel element te onderscheiden.

```css
a {
  color: blue;
  text-decoration: underline;
}
```

## Contrast

> SC 1.4.3 (AA)

- Het contrast van normale tekst en afbeeldingen van tekst is 4,5:1.
- Het contrast van grote tekst (18pt of 14pt dikgedrukt) en afbeeldingen van grote tekst is 3:1.

[Contrastchecker](https://webaim.org/resources/contrastchecker/)

## Herschalen van tekst

> SC 1.4.4 (AA)

- Tekst kan tot 200% vergroot worden zonder verlies van info en functionaliteit.

## Style sheets

> SC 1.3.1(A)

- Zorg voor een betekenisvolle leesvolgorde (controle: zet style sheets uit).

## Audio zonder beeld of video zonder audio

> SC 1.2.1 (A)

- Bied een uitgeschreven tekst van de audio.
- Bied een uitgeschreven tekst van de video of een audiodescriptie.

## Video

> SC 1.2.2, 1.2.3 (A), 1.2.4 en 1.2.5 (AA)

- Bied audiodescriptie bij video's.
- Bied ondertiteling bij video's.
- Er zijn enkele uitzonderingen, waarbij dit niet ## hoeft (zie SC 1.2.1 t/m 1.2.3).

## Automatisch startend geluid

> SC 1.4.2 (A)

- Automatisch afspelende audio (>3 seconden) kan gepauzeerd of uitgezet worden.

## Voldoende tijd

> SC 2.2.1 (A)

- Bied de bezoekers voldoende tijd om de content te lezen en te bedienen.
- Vermijd auto refresh of sessies die verlopen of bied mogelijkheid dit aan te passen/verlengen.

## Bewegende content

> SC 2.2.2 (A)

- Bewegende, knipperende of actualiserende content (>5 seconden) kan gepauzeerd worden. Dit dient ook met het toetsenbord te kunnen.

## Flitsen

> SC 2.3.1 (A)

- Webpagina's bevatten geen snelle flitsen die epilepsie kunnen veroorzaken.

## Grote wijzigingen

> SC 3.2.1 en 3.2.2 (A)

- Voorkom grote wijzigingen (refresh, pop-up, etc.) bij focus of verandering van een invoerveld.

## Toetsenbord toegankelijkheid

> SC 2.1.1, 2.1.2 en 2.4.3 (A)

- Alle functionaliteit op de webpagina is bedienbaar met het toetsenbord.
- Bied een logische tabvolgorde door de webpagina.
- Tabfocus is zichtbaar (fout als er gebruik is gemaakt van `outline:none / outline:0` in CSS).

```css
*:focus {
  outline: 1px dotted var(--black);
}
```

## Navigatie en links

> SC 2.4.1, 2.4.4, 3.2.1, 3.2.2 (A), 2.4.5, 3.2.3 en 3.2.4 (AA)

- Bied zo duidelijk mogelijke linkteksten.

```html
<a href="#">Lees meer <span class="sr-only">over Valtech</a>
```

- Onderdelen van de website navigatie worden consistent op de zelfde plek geplaatst. Onderdelen met een bepaalde functie hebben consistent dezelfde naam.
- Gebruik skiplinks en zorg dat deze zichtbaar zijn bij tabfocus.

```html
<body>
  <a href="#content" class="skipLink">Naar hoofdinhoud</a>
  <a href="#menu" class="skipLink">Naar hoofdnavigatiemenu</a>
  <nav>
    <h2 class="sr-only" id="menu" tabindex="-1">Menu</h2>
  </nav>

  <main>
    <h1 id="content" tabindex="-1"></h1>
  </main>
</body>
```

```css
.skip-link {
  background-color: var(--white);
  display: block;
  font-size: 1rem;
  left: -9999em;
  position: fixed;
  z-index: 1000;

  &:focus,
  &:active {
    top: 1rem;
    left: 1rem;
  }
}
```

## Relaties binnen formulieren

> SC 1.1.1, 1.3.1, 3.3.2 en 4.1.2 (A) en 2.4.6 (AA)

### Label

- Het `<label>`element is gebruikt om tekstlabels met formulier-invoervelden te associëren.

  - velden moeten altijd een label hebben (geassocieerd met for/id)
  - bij onzichtbare labels, gebruik liever een sr-only class dan aria-label
  - gebruik nooit placeholders als label, die worden niet gelezen door screenreader

```html
<label for="lastname">Achternaam</label>
<input type="text" name="lastname" id="lastname" />
```

---

- Het title attribuut is gebruikt als geen ruimte was voor een visueel tekstlabel.
- De `<fieldset>` en `<legend>` elementen zijn gebruikt voor het groeperen van bedieningselementen.

```html
<fieldset>
  <legend class="sr-only">NAW-gegevens</legend>
</fieldset>
```

- Gebruik `<fieldset>` en `<legend>` altijd voor een groep radiobuttons of checkboxen.
- Bied goed beschrijvende labels en plaats belangrijke instructie binnen het geassocieerde label.

## Fout identificatie, foutsuggestie en preventie

> SC 3.3.1 (A), SC 3.3.3 en 3.3.4 (AA)

- Als formulier niet verstuurt: tekstueel duidelijk de fout beschrijven en waar deze zich bevindt. Geef ten alle tijden een suggestie ter verbetering van de fout.

```html
<label for="email">Achternaam</label>
<input type="email" name="email" id="email" />
<span role="status" aria-live="polite">
  Het ingevoerde emailadres is niet valide. Een emailadres moet een @ bevatten.
</span>
```

- Foutpreventie bij formulieren met belangrijke gegevens: mogelijkheid tot annulering of controle.

# Code

## Semantiek

- Elke pagina heeft één `main` element

## Aria-labeledby

- Screenreaders kunnen door sections/nav/header navigeren
- Identificeer een section/nav/header (indien meerdere) met een header

```html
<section aria-labelledby="models">
  <h2 id="models">Modellen</h2>
</section>
```

## Screenreader only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

## Media queries

```css
@media screen and (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

@media screen and (inverted-colors: inverted) {
  img {
    filter: invert(100%);
  }
}
```

## Placeholders

```css
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: var(--gray-lighter);
  font-style: italic;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: var(--gray-lighter);
  font-style: italic;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: var(--gray-lighter);
  font-style: italic;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: var(--gray-lighter);
  font-style: italic;
}
```

- goed gebruik om placeholder italic te maken

# Indept components

## Kaarten

- Zorg dat de titel in de markup bovenaan staat
- Je kunt het hele item klikbaar maken, maar houd de link intact
- Gebruik een beschrijvende linktekst

```html
<div class="item">
  <h2 class="news-title">Barnevelder</h2>
  <img src="images/barnevelder.jpg" alt="Een barneveldse kip aan het leggen" />
  <div class="text">
    De barnevelder is een middelzwaar kippenras dat zijn oorsprong heeft in het
    Nederlandse Barneveld.
  </div>
  <a href="#">Lees meer over de Barnevelder</a>
</div>
```

```css
.item {
  display: flex;
  flex-direction: column;
}

img {
  order: -1;
}
```

## tabs

- carousel
- Accordeon
- modal
- menu
- autocomplete

# Todo

- verschil A/AA/AAA

# Opdracht

## Algemeen

- geen semantiek (header/main/footer)
- geen aria-labeledby
- te klein lettertype
- geen hover op items
- geen focusstate
- algemene page title
- title tags kloppen niet
- verkeerde taal

## Header

- geen skiplinks

## Content

- Contrast in text
- lees meer links
- onclick op item
- geen headers
- afbeelding boven tekst
- geen alt tekst
- te lange zinnen

## Footer

- geen tekst in social links
- placeholder als label

# Afsluiter

- benader mij voor vragen
- goed gevoel bij?

https://accessibilityinsights.io/docs/en/web/overview
