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

    // --- MODÈLE 4 : Bouton d'appel à l'action ---
    {
        id: 'bouton-action',
        name: 'Bouton (Appel à l\'action)',
        content: `
<div style="text-align: center; margin: 25px 0;">
    <a href="#" style="background-color: #0d6efd; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-family: sans-serif; display: inline-block;">CLIQUEZ ICI</a>
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 5 : Image avec lien cliquable (issue #2) ---
    {
        id: 'image-lien-cliquable',
        name: 'Image avec lien cliquable',
        content: `
<figure style="text-align:center;margin:1em auto;">
  <a href="URL_LIEN" target="_blank" rel="noopener noreferrer" style="display:block;line-height:0;font-size:0;">
    <img src="URL_IMAGE" alt="TITRE" style="display:block;margin:0 auto;width:100%;max-width:600px;height:auto;border-radius:8px;">
  </a>
  <figcaption style="font-size:14px;color:#64748b;font-style:italic;margin-top:0.5em;">LÉGENDE</figcaption>
</figure>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 6 : Logo Instagram avec lien cliquable (issue #3) ---
    {
        id: 'logo-instagram',
        name: 'Logo Instagram avec lien + nom marchand',
        content: `
<div style="text-align:center;margin:20px auto;">
  <a href="URLINSTA" rel="nofollow noreferrer" target="_blank" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:#E1306C;font-family:sans-serif;font-size:15px;font-weight:600;">
    <img src="https://img.grouponcdn.com/editorial/Q6qS1c4xBikscgJTzmXff1/logo-instagram-550x550" alt="Instagram" style="width:32px;height:32px;display:inline-block;vertical-align:middle;">
    <span>NOMMERCHANT</span>
  </a>
</div>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 7 : Galerie d'images - formes variées (issue #4) ---
    {
        id: 'galerie-formes',
        name: 'Galerie images — formes variées',
        content: `
<!-- Image simple centrée -->
<div style="text-align:center;margin:16px auto;">
  <img src="URL" alt="TITRE" style="max-width:100%;border-radius:8px;display:block;margin:0 auto;">
</div>

<!-- Image cliquable (agrandissement) -->
<figure style="text-align:center;margin:16px auto;">
  <a href="URL_GRANDE" target="_blank" rel="noopener noreferrer" style="display:block;line-height:0;">
    <img alt="TITRE IMG" src="URL" style="max-width:100%;border-radius:8px;display:block;margin:0 auto;">
  </a>
  <figcaption style="font-size:13px;color:#64748b;font-style:italic;margin-top:6px;">Cliquez sur l'image pour l'agrandir</figcaption>
</figure>

<!-- Image ronde (avatar / portrait) -->
<div style="text-align:center;margin:16px auto;">
  <img src="URL" alt="TITRE" style="width:120px;height:120px;border-radius:50%;object-fit:cover;display:inline-block;">
</div>

<!-- Image carrée avec ombre -->
<div style="text-align:center;margin:16px auto;">
  <img src="URL" alt="TITRE" style="width:200px;height:200px;object-fit:cover;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.15);display:inline-block;">
</div>

<!-- Image format carré fixe (250×250) -->
<div style="text-align:center;margin:16px auto;">
  <img src="URL" alt="TITRE" width="250" height="250" style="object-fit:cover;border-radius:8px;display:inline-block;">
</div>

<!-- Image pleine largeur 16/9 -->
<div style="width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:12px;margin:16px auto;">
  <img src="URL" alt="TITRE" style="width:100%;height:100%;object-fit:cover;display:block;">
</div>

<!-- Image avec bordure dégradé -->
<div style="padding:3px;background:linear-gradient(135deg,#f5a623,#2ecc71,#3498db);border-radius:16px;display:block;max-width:400px;margin:16px auto;">
  <img src="URL" alt="TITRE" style="width:100%;border-radius:13px;display:block;">
</div>

<!-- Image Polaroid -->
<div style="background:#fff;padding:10px 10px 36px;box-shadow:0 8px 24px rgba(0,0,0,0.18);border-radius:4px;transform:rotate(-1.5deg);max-width:280px;margin:20px auto;">
  <img src="URL" alt="TITRE" style="width:100%;display:block;border-radius:2px;">
  <p style="text-align:center;font-family:'Georgia',serif;font-size:14px;color:#888;margin:10px 0 0;">LÉGENDE</p>
</div>
<p>&nbsp;</p>
`
    }
];
