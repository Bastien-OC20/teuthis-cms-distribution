import{_ as n,o as a,c as e,a4 as p}from"./chunks/framework.BE47AOxC.js";const T=JSON.parse(`{"title":"Options de l'installateur","description":"Le texte de l'aide de l'installateur, lu dans le dépôt à la construction.","frontmatter":{"title":"Options de l'installateur","description":"Le texte de l'aide de l'installateur, lu dans le dépôt à la construction."},"headers":[],"relativePath":"installer/options.md","filePath":"installer/options.md"}`),l={name:"installer/options.md"};function t(i,s,o,c,r,u){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="options-de-l-installateur" tabindex="-1">Options de l&#39;installateur <a class="header-anchor" href="#options-de-l-installateur" aria-label="Permalink to &quot;Options de l&#39;installateur&quot;">​</a></h1><p>Voici ce qu&#39;affiche <code>sh installer.sh --aide</code> pour l&#39;installateur de la version 0.7.1. Ce texte est lu dans <code>deploy/installer.sh</code> à la construction du site.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span>Installateur de Teuthis-CMS 0.7.1 — pile de production en HTTPS.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Usage : sudo sh installer.sh [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sans option, l&#39;installateur pose ses questions. Chaque option peut aussi être</span></span>
<span class="line"><span>donnée par la variable d&#39;environnement indiquée entre parenthèses</span></span>
<span class="line"><span>(avec sudo : sudo TEUTHIS_PROFIL=portfolio sh installer.sh).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Installation</span></span>
<span class="line"><span>  --profil &lt;clé&gt;          Usage de l&#39;instance (TEUTHIS_PROFIL) :</span></span>
<span class="line"><span>                            collectivite, blog_presse, portfolio,</span></span>
<span class="line"><span>                            catalogue_devis, sur_mesure</span></span>
<span class="line"><span>  --domaine-cms &lt;nom&gt;     Nom du back-office, par exemple cms.ville.fr</span></span>
<span class="line"><span>                          (TEUTHIS_DOMAINE_CMS)</span></span>
<span class="line"><span>  --domaine-site &lt;nom&gt;    Nom du site public, par exemple www.monjournal.fr —</span></span>
<span class="line"><span>                          tous les profils sauf sur_mesure</span></span>
<span class="line"><span>                          (TEUTHIS_DOMAINE_SITE)</span></span>
<span class="line"><span>  --domaine-api &lt;nom&gt;     Nom de l&#39;API publique, par exemple api.ville.fr —</span></span>
<span class="line"><span>                          profil sur_mesure ou --api-publique (TEUTHIS_DOMAINE_API)</span></span>
<span class="line"><span>  --api-publique          Expose l&#39;API en entier sur son propre nom</span></span>
<span class="line"><span>                          (TEUTHIS_API_PUBLIQUE=1)</span></span>
<span class="line"><span>  --courriel &lt;adresse&gt;    Contact Let&#39;s Encrypt et expéditeur des courriels</span></span>
<span class="line"><span>                          (TEUTHIS_COURRIEL)</span></span>
<span class="line"><span>  --version X.Y.Z         Version à installer, 0.7.1 par défaut</span></span>
<span class="line"><span>                          (TEUTHIS_VERSION)</span></span>
<span class="line"><span>  --tls &lt;mode&gt;            production (défaut, Let&#39;s Encrypt), essai</span></span>
<span class="line"><span>                          (Let&#39;s Encrypt de test) ou interne (autorité de</span></span>
<span class="line"><span>                          Caddy, sans DNS) (TEUTHIS_TLS)</span></span>
<span class="line"><span>  --dossier &lt;chemin&gt;      Dossier d&#39;installation, /opt/teuthis par défaut</span></span>
<span class="line"><span>                          (TEUTHIS_DOSSIER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Relais de messagerie (facultatif, sinon demandé ou sauté) :</span></span>
<span class="line"><span>  variables SMTP_HOST, SMTP_PORT, SMTP_SECURITY (starttls, ssl ou none),</span></span>
<span class="line"><span>  SMTP_USERNAME, SMTP_PASSWORD.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Automatisation</span></span>
<span class="line"><span>  --non-interactif        Ne pose aucune question : tout ce qui manque est</span></span>
<span class="line"><span>                          refusé (TEUTHIS_NON_INTERACTIF=1)</span></span>
<span class="line"><span>  --installer-docker      Installe Docker s&#39;il manque, sans le demander</span></span>
<span class="line"><span>                          (TEUTHIS_INSTALLER_DOCKER=1)</span></span>
<span class="line"><span>  --pare-feu              Active le pare-feu ufw : SSH, 80 et 443 seulement</span></span>
<span class="line"><span>                          (TEUTHIS_PARE_FEU=1)</span></span>
<span class="line"><span>  --mises-a-jour-auto     Active les mises à jour de sécurité automatiques</span></span>
<span class="line"><span>                          du système (TEUTHIS_MISES_A_JOUR_AUTO=1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Essais seulement</span></span>
<span class="line"><span>  --source &lt;dossier&gt;      Recopie la pile depuis ce dossier deploy/ local au</span></span>
<span class="line"><span>                          lieu de la télécharger (TEUTHIS_SOURCE)</span></span>
<span class="line"><span>  --sans-verification-dns Saute la vérification DNS — refusé avec</span></span>
<span class="line"><span>                          --tls production (TEUTHIS_SANS_VERIFICATION_DNS=1)</span></span>
<span class="line"><span>  --ports-essai &lt;http&gt; &lt;https&gt;</span></span>
<span class="line"><span>                          Ports publiés au lieu de 80 et 443 — refusé avec</span></span>
<span class="line"><span>                          --tls production (TEUTHIS_PORT_HTTP, TEUTHIS_PORT_HTTPS)</span></span>
<span class="line"><span>  TEUTHIS_IMAGE_API, TEUTHIS_IMAGE_ADMIN, TEUTHIS_IMAGE_FRONT</span></span>
<span class="line"><span>                          Images construites localement, à la place des</span></span>
<span class="line"><span>                          images publiées (déjà chargées dans Docker)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  --aide                  Affiche cette aide.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sécurité</span></span>
<span class="line"><span>  Un secret passé par variable d&#39;environnement (SMTP_PASSWORD…) reste lisible</span></span>
<span class="line"><span>  par root et par le même utilisateur dans /proc/&lt;pid&gt;/environ du processus de</span></span>
<span class="line"><span>  l&#39;installateur, tant qu&#39;il tourne. L&#39;installateur le retire de son</span></span>
<span class="line"><span>  environnement dès sa lecture : les commandes qu&#39;il lance ne l&#39;héritent pas.</span></span>
<span class="line"><span>  Pour qu&#39;il ne passe par aucun environnement, répondez plutôt à la question</span></span>
<span class="line"><span>  (le mot de passe ne s&#39;affiche pas), ou écrivez-le d&#39;avance dans le .env.</span></span>
<span class="line"><span>  Écrit pour sh POSIX (dash), l&#39;installateur tourne en « set -eu » sans</span></span>
<span class="line"><span>  « pipefail » : un tube ne rend que le statut de sa dernière commande. Là où</span></span>
<span class="line"><span>  cela compte (somme SHA-256, empreinte de clé), une commande en échec en</span></span>
<span class="line"><span>  amont donne une sortie vide, que la comparaison qui suit refuse.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Relancer l&#39;installateur ne casse rien : le .env existant est réutilisé tel</span></span>
<span class="line"><span>quel (secrets compris), et seules les étapes manquantes sont faites.</span></span>
<span class="line"><span>Journal : /var/log/teuthis-installation.log (sans aucun secret).</span></span></code></pre></div>`,3)])])}const _=n(l,[["render",t]]);export{T as __pageData,_ as default};
