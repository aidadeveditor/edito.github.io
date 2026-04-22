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
    }, // <-- VIRGULE TRÈS IMPORTANTE ICI POUR SÉPARER LES MODÈLES

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
    },  // --- MODÈLE  : Toggle - Liste des options avec détails  ---
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
   },  // --- MODÈLE  :  ---
    {
        id: '',
        name: '',
        content: `

<p>&nbsp;</p>
`
   },  // --- MODÈLE  :  ---
    {
        id: '',
        name: '',
        content: `

<p>&nbsp;</p>
`
   },// --- MODÈLE 3 : UN BOUTON D'APPEL À L'ACTION ---
    {
        id: 'bouton-action',
        name: 'Bouton (Appel à l\'action)',
        content: `
<div style="text-align: center; margin: 25px 0;">
    <a href="#" style="background-color: #0d6efd; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-family: sans-serif; display: inline-block;">CLIQUEZ ICI</a>
</div>
<p>&nbsp;</p>
`
    } // <-- PAS DE VIRGULE SUR LE DERNIER
];
