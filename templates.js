// Fichier : templates.js

window.mesModelesExternes = [
    // --- MODÈLE 1 : TON MENU RESTAURANT ---
    {
        id: 'menu-toggle',
        name: 'Menu Toggle (Carte de Restaurant)',
        content: `
<!-- TOGGLE Menu -->
<div style="max-width:500px;margin:30px auto;border-radius:15px;padding:30px;box-shadow:0 6px 20px rgba(0,0,0,0.1);text-align:center;">

<img src="https://img.grouponcdn.com/editorial/2AfJKw1YvJz2ZXUdaaxTWJFfx4M2/local-menu-groupon-6000x3375" alt="Carte du menu" style="width:25%;display:block;margin:0 auto 10px;">

<details>
<summary style="cursor:pointer; font-size:14px; color:#888; margin:0 auto 10px; width:max-content;">
      Voir / Masquer la carte
</summary>

<div style="margin-top:20px;text-align:center;">

<p style="margin:0 0 20px 0;"><strong>À la carte</strong></p>

<p><strong>Entrées au choix</strong></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>

<p style="margin:18px 0;color:#888;"><strong>...</strong></p>

<p><strong>Plats au choix</strong></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>

<p style="margin:18px 0;color:#888;"><strong>...</strong></p>

<p><strong>Desserts au choix</strong></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>

<p style="margin:18px 0;color:#888;"><strong>...</strong></p>

<p><strong>Fromages au choix</strong></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>
<p><em>xxx</em></p>

<div style="border-bottom:1px solid #e0e0e0;margin:25px 50px;"></div>

<p style="font-size:12px;color:#888;font-style:italic;">Les plats sont susceptibles de varier selon le marché, la saison et l'humeur du chef. Le cas échéant, ils sont remplacés par des produits de gamme et de qualité équivalentes.</p>

</div>
</details>

</div>
<!-- FIN TOGGLE Menu -->
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 2 : UNE FAQ ---
    {
        id: 'faq-accordeon',
        name: 'Question FAQ (Déroulante)',
        content: `
<details style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 10px; border: 1px solid #ddd;">
    <summary style="font-weight: bold; cursor: pointer; color: #333;">Cliquez ici pour lire la question ?</summary>
    <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #ccc; color: #555;">
        <p style="margin: 0; text-align: justify;">Voici la réponse détaillée à la question. Vous pouvez la modifier directement dans l'éditeur visuel.</p>
    </div>
</details>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 3 : Toggle - Liste des options avec détails ---
    {
        id: 'toggle-liste-options-details',
        name: 'Toggle - Liste des options avec détails',
        content: `
<ul style="list-style-type: none;">
  <li>
    <details>
      <summary><u>option</u></summary>
      <ul style="list-style-type: disc;">
        <li>détail</li>
        <li>détail</li>
        <li>détail</li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><u>option</u></summary>
      <ul style="list-style-type: disc;">
        <li>détail</li>
        <li>détail</li>
        <li>détail</li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><u>option</u></summary>
      <ul style="list-style-type: disc;">
        <li>détail</li>
        <li>détail</li>
        <li>détail</li>
      </ul>
    </details>
  </li>
</ul>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 4 : Image cliquable (menu scannable) --- ✅ CORRIGÉ width:5% → 100%
    {
        id: 'image-cliquable-menu',
        name: 'Image cliquable (menu scannable)',
        content: `
<figure style="text-align:center; margin:1em auto;">
  <a title="Cliquez sur l'image pour agrandir le menu" target="_blank"
     href="URL_GRANDE_IMAGE"
     style="display:block; line-height:0; font-size:0;">
    <picture>
      <source srcset="URL_GRANDE_IMAGE" type="image/webp">
      <img loading="lazy"
           src="URL_GRANDE_IMAGE"
           alt="menu"
           style="display:block; margin:0 auto; width:100%; max-width:400px; height:auto; vertical-align:bottom;">
    </picture>
  </a>
  <span style="display:block; font-size:14px; color:#64748b; font-style:italic; margin-top:0.5em;">Cliquez sur l'image pour agrandir le menu</span>
</figure>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 5 : Hero image avec texte superposé ---
    {
        id: 'image-hero-texte',
        name: 'Image hero avec texte superposé',
        content: `
<div style="position: relative; width: 100%; margin-bottom: 24px; border-radius: 20px; overflow: hidden;">
  <img src="URL_IMAGE" alt="Description" style="width: 100%; display: block; height: 320px; object-fit: cover;">
  <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 24px; background: linear-gradient(transparent, rgba(0,0,0,0.65));">
    <p style="margin: 0; color: #fff; font-size: 22px; font-weight: bold;">Titre principal</p>
    <p style="margin: 4px 0 0; color: #f0f0f0; font-size: 14px;">Sous-titre · Détail · Lieu</p>
  </div>
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 6 : Figure avec légende ---
    {
        id: 'image-figure-legende',
        name: 'Image avec légende (figure)',
        content: `
<figure style="margin: 0 auto 24px; max-width: 700px; border-radius: 20px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.15);">
  <img src="URL_IMAGE" alt="Description" style="width: 100%; display: block;">
  <figcaption style="background: #f5f5f5; padding: 12px 16px; font-size: 13px; color: #555; text-align: center;">
    📍 Lieu — Description courte
  </figcaption>
</figure>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 7 : Image flottante + texte ---
    {
        id: 'image-flottante-texte',
        name: 'Image flottante + texte',
        content: `
<div style="overflow: hidden; margin-bottom: 24px;">
  <img src="URL_IMAGE" alt="Description" style="float: left; width: 45%; border-radius: 16px; margin: 0 20px 12px 0; display: block;">
  <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333;">Votre texte descriptif ici. Remplacez cette phrase par le contenu de votre choix.</p>
</div>
<div style="clear: both;"></div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 8 : Image 16/9 pleine largeur ---
    {
        id: 'image-16-9-pleine',
        name: 'Image 16/9 pleine largeur',
        content: `
<div style="width: 100%; aspect-ratio: 16/9; border-radius: 20px; overflow: hidden; margin-bottom: 24px;">
  <img src="URL_IMAGE"
    alt="Description"
    style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;">
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 9 : Image style polaroid ---
    {
        id: 'image-polaroid',
        name: 'Image style polaroid',
        content: `
<div style="display: inline-block; background: #fff; padding: 12px 12px 40px; box-shadow: 0 8px 30px rgba(0,0,0,0.18); border-radius: 4px; transform: rotate(-1.5deg); margin: 0 auto 30px; display: block; width: 60%; max-width: 480px;">
  <img src="URL_IMAGE"
    alt="Description"
    style="width: 100%; display: block; border-radius: 2px;">
  <p style="text-align: center; font-family: 'Georgia', serif; font-size: 15px; color: #888; margin: 12px 0 0; letter-spacing: 1px;">Légende polaroid</p>
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 10 : Image + bandeau promo ---
    {
        id: 'image-bandeau-promo',
        name: 'Image + bandeau promo',
        content: `
<div style="display: flex; align-items: stretch; border-radius: 20px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.12); margin-bottom: 24px; min-height: 200px;">
  <div style="flex: 1.5; overflow: hidden;">
    <img src="URL_IMAGE"
      alt="Description"
      style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>
  <div style="flex: 1; background: #1a5e3a; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 24px; text-align: center;">
    <p style="color: #fff; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">Jusqu'à</p>
    <p style="color: #f5c842; font-size: 48px; font-weight: 900; margin: 0; line-height: 1;">-XX%</p>
    <p style="color: #fff; font-size: 14px; margin: 8px 0 0;">sur vos entrées</p>
  </div>
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 11 : Image avec bordure dégradé ---
    {
        id: 'image-bordure-degrade',
        name: 'Image avec bordure dégradé',
        content: `
<div style="padding: 4px; background: linear-gradient(135deg, #f5a623, #2ecc71, #3498db); border-radius: 24px; margin-bottom: 24px; display: inline-block; width: 100%; box-sizing: border-box;">
  <img src="URL_IMAGE"
    alt="Description"
    style="width: 100%; display: block; border-radius: 20px;">
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 12 : Bouton d'appel à l'action ---
    {
        id: 'bouton-action',
        name: 'Bouton (Appel à l\'action)',
        content: `
<div style="text-align: center; margin: 25px 0;">
    <a href="#" style="background-color: #0d6efd; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-family: sans-serif; display: inline-block;">CLIQUEZ ICI</a>
</div>
<p>&nbsp;</p>
`
    }
];
