# Audit des blocs de code

Blocs analysés : 30

Blocs avec au moins un problème : 28

## Problèmes récurrents
- img missing loading="lazy" : 24
- image sizing may be rigid or inconsistent on mobile : 18
- clip-path may be poorly supported in some editors/email-like renderers : 6
- contains JavaScript object/template syntax, not directly pasteable HTML in Tiptap : 4
- float-based layout can be fragile in rich text editors : 1
- uses CSS classes without embedded styles; depends on external stylesheet : 1

## Exemples corrigés

### figure image

```html
<figure style="text-align:center; margin:1em auto;">
  <a href="URL" target="_blank" rel="noopener noreferrer" title="TITRE" style="display:block; line-height:0; font-size:0;">
    <picture>
      <source srcset="IMAGE-WEBP" type="image/webp">
      <img loading="lazy" src="IMAGE-JPG" alt="DESCRIPTION IMAGE" style="display:block; margin:0 auto; width:100%; max-width:400px; height:auto; vertical-align:bottom;">
    </picture>
  </a>
  <figcaption style="display:block; font-size:14px; color:#64748b; font-style:italic; margin-top:0.5em;">Légende</figcaption>
</figure>
```

### image simple

```html
<div style="text-align:center; margin:16px 0;">
  <img loading="lazy" src="URL" alt="TITRE" style="display:block; width:100%; max-width:250px; height:auto; margin:0 auto; border-radius:24px;">
</div>
```

### enroulement image texte

```html
<div style="display:flex; flex-wrap:wrap; align-items:flex-start; gap:16px; margin-bottom:1em;">
  <img loading="lazy" src="URL" alt="DESCRIPTION" style="width:100px; height:auto; border-radius:80px; flex:0 0 auto;">
  <div style="flex:1 1 220px; min-width:220px;">
    <p style="margin:0;">Votre texte ici.</p>
  </div>
</div>
```

### menu category

```html
<div style="max-width:700px; margin:24px auto;">
  <h3 style="margin:0 0 12px; text-align:center;">Nom de la catégorie</h3>
  <div style="padding:12px 0; border-bottom:1px solid #e5e7eb;">Élément 1</div>
  <div style="padding:12px 0; border-bottom:1px solid #e5e7eb;">Élément 2</div>
  <div style="padding:12px 0;">Élément 3</div>
</div>
```

### faq html only

```html
<details style="background-color:#f9f9f9; padding:15px; border-radius:8px; margin-bottom:10px; border:1px solid #ddd;">
  <summary style="font-weight:bold; cursor:pointer; color:#333;">Question FAQ</summary>
  <div style="margin-top:10px; padding-top:10px; border-top:1px dashed #ccc; color:#555;">
    <p style="margin:0;">Réponse détaillée.</p>
  </div>
</details>
```

## Détail par bloc

### Feuille 2 - ligne 11
Snippet : `<!-- OVALE FLUIDE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; clip-path:ellipse(50% 40% at 50% 50%);"> </div>`

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 31
Snippet : `<!-- POLYGON --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; clip-path:polygon(0 10%, 100% 0, 100% 90%, 0 100%);"> </div>`

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 35
Snippet : `<!-- DESSOUS ARRONDI --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; clip-path:ellipse(100% 85% at 50% 15%);"> </div>`

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 39
Snippet : `<!-- POLYGON ECRAN --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:10px; clip-path:polygon(0% 10%, 100% 0%, 100% 10`

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 1
Snippet : `<!-- NORMAL --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 3
Snippet : `<!-- ANGLES ARRONDIS --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:25px;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 7
Snippet : `<!-- ARRONDIS HAUT-BAS --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:50% / 30%;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 9
Snippet : `<!-- OVALE PENCHE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:40% 60% 40% 60%; object-fit:cover;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 13
Snippet : `<!-- BLOB SOFT --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:50% 50% 20% 20%;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 15
Snippet : `<!-- BLOB AMPLE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:60% 40% 60% 40% / 50% 60% 40% 50%; border:none;"> <`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 17
Snippet : `<!-- ARRONDIS EN BAS --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:0 0 80px 80px; object-fit:cover;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 19
Snippet : `<!-- DOME --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:50% 50% 0 0; object-fit:cover;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 21
Snippet : `<!-- NUAGE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-radius:30% 30% 50% 50%; object-fit:cover;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 23
Snippet : `<!-- EFFET PINCES 1 --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-top-right-radius:80px; border-bottom-left-radius:80px;`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 25
Snippet : `<!-- EFFET PINCES 2 --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:25%; border-top-left-radius:80px; border-bottom-right-radius:80px;`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 27
Snippet : `<!-- ROND PARFAIT OMBRE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" width="250" height="250" style="border-radius:50%; box-shadow:0 0 20px rgba`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 29
Snippet : `<!-- ROND PARFAIT --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" width="250" height="250" style="border-radius:50%; object-fit:cover;"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 33
Snippet : `<!-- LOSANGE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:100px; height:100px; object-fit:cover; clip-path:polygon(50% 0%, 100% 50%`

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers

### Feuille 2 - ligne 37
Snippet : `<!-- POLYGON 6 COTES --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="TITRE" style="width:250px; height:250px; object-fit:cover; clip-path:polygon(25% 0%, `

- img missing loading="lazy"
- clip-path may be poorly supported in some editors/email-like renderers

### Feuille 2 - ligne 41
Snippet : `<!-- GRISER IMAGE --> <div style="text-align:center; margin:16px 0;">   <img src="URL" alt="ALT" style="width:25%; filter:grayscale(90%);"> </div>`

- img missing loading="lazy"
- image sizing may be rigid or inconsistent on mobile

### Feuille 2 - ligne 43
Snippet : `<!-- ENROULEMENT IMG TXT -->  <div style="overflow: hidden; margin-bottom: 1em;">   <img      src=""      alt=""      style="float: left; width: 100px; height: auto; border: none; `

- img missing loading="lazy"
- float-based layout can be fragile in rich text editors

### Feuille 4 - ligne 6
Snippet : `// --- MODÈLE 1 : TON MENU RESTAURANT ---     {         id: 'menu-toggle',         name: 'Menu Toggle (Carte de Restaurant)',         content: ` <!-- TOGGLE Menu --> <div style="ma`

- img missing loading="lazy"
- contains JavaScript object/template syntax, not directly pasteable HTML in Tiptap

### Feuille 2 - ligne 5
Snippet : `<!-- LIEN CLIQUABLE --> <div style="text-align:center; margin:16px 0;">   <a href="URL LIEN" target="_blank" rel="noopener noreferrer" title="Cliquez sur l'image pour l'agrandir"> `

- img missing loading="lazy"

### Feuille 4 - ligne 1
Snippet : `<div class="template-menu"> <h3>Nom de la Catégorie (ex: Entrées)</h3> <div class="template-menu-item"></div> <div class="template-menu-item"></div> <div class="template-menu-item"`

- uses CSS classes without embedded styles; depends on external stylesheet

### Feuille 4 - ligne 4
Snippet : `<div style="text-align:center;max-width:500px;margin:30px auto;border-radius:15px;padding:30px;box-shadow:0 6px 20px rgba(0,0,0,0.1);"><img src="https://img.grouponcdn.com/editoria`

- img missing loading="lazy"

### Feuille 5 - ligne 1
Snippet : `// --- MODÈLE 2 : UNE FAQ ---     {         id: 'faq-accordeon',         name: 'Question FAQ (Déroulante)',         content: ` <details style="background-color: #f9f9f9; padding: 1`

- contains JavaScript object/template syntax, not directly pasteable HTML in Tiptap

### Feuille 5 - ligne 3
Snippet : `// --- MODÈLE  : Toggle - Liste des options avec détails  ---     {         id: 'toggle-liste-options-details',         name: 'Toggle - Liste des options avec détails',         con`

- contains JavaScript object/template syntax, not directly pasteable HTML in Tiptap

### Feuille 5 - ligne 5
Snippet : `// --- MODÈLE 3 : UN BOUTON D'APPEL À L'ACTION ---     {         id: 'bouton-action',         name: 'Bouton (Appel à l\'action)',         content: ` <div style="text-align: center;`

- contains JavaScript object/template syntax, not directly pasteable HTML in Tiptap

### Feuille 1 - ligne 1
Snippet : `<figure style="text-align:center; margin:1em auto;">   <a title="" target="_blank"      href=""      style="display:block; line-height:0; font-size:0;">     <picture>       <source`

- Aucun problème détecté

### Feuille 3 - ligne 1
Snippet : `<!-- ENROULEMENT VID TXT --> <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 20px; margin-bottom: 20px;">  <figure style="margin: 0; `

- Aucun problème détecté

