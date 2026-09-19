# Site officiel BlockDirect

Site statique Material You pour présenter BlockDirect Windows + Android.

## 1. Configuration

Ouvrir `config.js` et remplacer :

- `githubUrl` : URL du dépôt GitHub officiel
- `windowsDownloadUrl` : lien direct vers l'EXE/MSI ou une GitHub Release
- `playStoreUrl` : URL Google Play quand l'app sera publiée
- `releaseVersion`
- `contactEmail`
- `securityEmail`

Tant qu'un lien de téléchargement est vide, le bouton correspondant reste désactivé.

## 2. Test local

Le site est 100 % statique. Depuis le dossier :

```bash
python -m http.server 8080
```

Puis ouvrir http://localhost:8080

## 3. Déploiement

### GitHub Pages
1. Créer un dépôt dédié, par exemple `blockdirect-site`.
2. Ajouter tous les fichiers de ce dossier.
3. Settings > Pages > Deploy from a branch.
4. Choisir `main` et `/ (root)`.
5. Configurer ensuite le domaine personnalisé.

### Cloudflare Pages / Netlify
Importer le dépôt et utiliser la racine du dépôt comme dossier de publication. Aucun build n'est nécessaire.

## 4. Domaine

Structure recommandée :
- `blockdirect.com` : site vitrine
- téléchargement Windows : GitHub Releases ou votre CDN
- Android : Google Play

Le site n'a pas besoin de recevoir les identifiants ÉcoleDirecte.

## 5. Avant publication

- Remplacer tous les placeholders `.example`
- Compléter `legal.html` avec l'éditeur et l'hébergeur
- Relire `privacy.html` selon le comportement réel de la version publiée
- Ajouter une licence au dépôt BlockDirect
- Publier un canal de signalement sécurité
- Remplacer les captures d'écran si elles contiennent des informations personnelles

Les deux captures incluses proviennent de la conversation et servent de démonstration.
