npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@e.coding.net:recoluan/recoluan/recoluan.git master

cd ../
rm -rf public