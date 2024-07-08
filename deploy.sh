# deploy.sh
#!/bin/bash

# Salir en caso de error
set -e

# Build y exportar la aplicación
yarn build

# Ir al directorio de salida y crear un nuevo repositorio git
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Forzar el push a la rama gh-pages
git push -f git@github.com:untalinfo/untalinfo-website.git master:gh-pages

# Volver al directorio anterior
cd -
