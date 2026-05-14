// Fichier : templates.js
// Dernière révision : correctifs audit (placeholders, cohérence styles, href, image)

window.mesModelesExternes = [
    // --- MODÈLE 1 : MENU RESTAURANT ---
    {
        id: 'menu-toggle',
        name: 'Menu Toggle (Carte de Restaurant)',
        content: `
<!-- TOGGLE Menu -->
<div style="max-width:500px;margin:30px auto;border-radius:15px;padding:30px;box-shadow:0 6px 20px rgba(0,0,0,0.15);text-align:center;background-color:#ffffff;color:#212529;border:1px solid #dee2e6;">

<!-- Remplacer URL_IMAGE par l'URL de l'image du restaurant -->
<img src="URL_IMAGE" alt="Carte du menu" style="width:25%;display:block;margin:0 auto 10px;">

<details>
<summary style="cursor:pointer;font-size:14px;color:#212529;margin:0 auto 10px;width:max-content;">
      Voir / Masquer la carte
</summary>

<div style="margin-top:20px;text-align:center;">

<p style="margin:0 0 20px 0;"><strong>À la carte</strong></p>

<p><strong>Entrées au choix</strong></p>
<p><em>Entrée 1</em></p>
<p><em>Entrée 2</em></p>
<p><em>Entrée 3</em></p>

<p style="margin:18px 0;opacity:0.6;"><strong>...</strong></p>

<p><strong>Plats au choix</strong></p>
<p><em>Plat 1</em></p>
<p><em>Plat 2</em></p>
<p><em>Plat 3</em></p>

<p style="margin:18px 0;opacity:0.6;"><strong>...</strong></p>

<p><strong>Desserts au choix</strong></p>
<p><em>Dessert 1</em></p>
<p><em>Dessert 2</em></p>
<p><em>Dessert 3</em></p>

<p style="margin:18px 0;opacity:0.6;"><strong>...</strong></p>

<p><strong>Fromages au choix</strong></p>
<p><em>Fromage 1</em></p>
<p><em>Fromage 2</em></p>
<p><em>Fromage 3</em></p>

<div style="border-bottom:1px solid #e0e0e0;margin:25px 50px;"></div>

<p style="font-size:12px;opacity:0.6;font-style:italic;">Les plats sont susceptibles de varier selon le march&eacute;, la saison et l'humeur du chef. Le cas &eacute;ch&eacute;ant, ils sont remplac&eacute;s par des produits de gamme et de qualit&eacute; &eacute;quivalentes.</p>

</div>
</details>

</div>
<!-- FIN TOGGLE Menu -->
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 2 : FAQ ---
    {
        id: 'faq-accordeon',
        name: 'Question FAQ (Déroulante)',
        content: `
<details style="background-color:#f9f9f9;padding:15px;border-radius:8px;margin-bottom:10px;border:1px solid #dddddd;">
    <summary style="font-weight:bold;cursor:pointer;color:#333333;">Cliquez ici pour lire la question ?</summary>
    <div style="margin-top:10px;padding-top:10px;border-top:1px dashed #cccccc;color:#555555;">
        <p style="margin:0;text-align:justify;">Voici la r&eacute;ponse d&eacute;taill&eacute;e &agrave; la question. Vous pouvez la modifier directement dans l'&eacute;diteur visuel.</p>
    </div>
</details>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 3 : Toggle liste options ---
    {
        id: 'toggle-liste-options-details',
        name: 'Toggle - Liste des options avec détails',
        content: `
<ul style="list-style-type:none;padding-left:0;">
  <li style="margin-bottom:8px;">
    <details>
      <summary style="cursor:pointer;color:#212529;"><u>Option 1</u></summary>
      <ul style="list-style-type:disc;padding-left:20px;margin-top:6px;">
        <li>D&eacute;tail A</li>
        <li>D&eacute;tail B</li>
        <li>D&eacute;tail C</li>
      </ul>
    </details>
  </li>
  <li style="margin-bottom:8px;">
    <details>
      <summary style="cursor:pointer;color:#212529;"><u>Option 2</u></summary>
      <ul style="list-style-type:disc;padding-left:20px;margin-top:6px;">
        <li>D&eacute;tail A</li>
        <li>D&eacute;tail B</li>
        <li>D&eacute;tail C</li>
      </ul>
    </details>
  </li>
  <li style="margin-bottom:8px;">
    <details>
      <summary style="cursor:pointer;color:#212529;"><u>Option 3</u></summary>
      <ul style="list-style-type:disc;padding-left:20px;margin-top:6px;">
        <li>D&eacute;tail A</li>
        <li>D&eacute;tail B</li>
        <li>D&eacute;tail C</li>
      </ul>
    </details>
  </li>
</ul>
<p>&nbsp;</p>
`
    },

    // --- MODÈLE 4 : Bouton CTA ---
    {
        id: 'bouton-action',
        name: 'Bouton (Appel à l\'action)',
        content: `
<div style="text-align:center;margin:25px 0;">
    <!-- Remplacer LIEN_DE_LOFFRE par l'URL cible et TEXTE_DU_BOUTON par le libellé -->
    <a href="LIEN_DE_LOFFRE" style="background-color:#0d6efd;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:5px;font-weight:bold;font-family:sans-serif;display:inline-block;">TEXTE_DU_BOUTON</a>
</div>
<p>&nbsp;</p>
`
    }
];
