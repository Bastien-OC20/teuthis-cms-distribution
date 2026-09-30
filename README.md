# Teuthis-CMS — distribution

Ce dépôt ne contient **aucun code source**. Il publie, pour chaque version de Teuthis-CMS, ce dont un exploitant a besoin pour l'installer :

- `installer.sh` et sa somme `installer.sh.sha256` ;
- `teuthis-deploy-X.Y.Z.tar.gz`, la pile de déploiement (`compose.yml`, Caddy, `.env.exemple`, notice), et sa somme. L'archive porte `images-publiees.txt`, l'empreinte de chaque image publiée.

Les fichiers sont joints aux [releases](https://github.com/Bastien-OC20/teuthis-cms-distribution/releases), publiées automatiquement par le workflow de publication du projet. Les images (`ghcr.io/bastien-oc20/teuthis-api`, `ghcr.io/bastien-oc20/teuthis-admin`) sont sur GHCR, signées par cosign.

## Installer une version

Sur un serveur Debian 12, Ubuntu 22.04 ou Ubuntu 24.04 dont le nom `cms.` pointe déjà sur lui :

```bash
curl -fsSLO https://github.com/Bastien-OC20/teuthis-cms-distribution/releases/download/vX.Y.Z/installer.sh
curl -fsSLO https://github.com/Bastien-OC20/teuthis-cms-distribution/releases/download/vX.Y.Z/installer.sh.sha256
sha256sum -c installer.sh.sha256
sudo sh installer.sh --profil collectivite
```

Les profils disponibles sont listés par `sh installer.sh --aide`. Si `cosign` v3 ou plus récent est installé sur le serveur, l'installateur vérifie en plus la signature de chaque image.

## Licence

Apache-2.0.
