## install dependency by lerna

```
npx lerna bootstarap
```
lerna.jsonでパスを指定、指定したパスいかにあるpackage.jsonを読み取る、distを吐き出す(distはなんである？）、依存関係があるフォルダーのnode_modulesにパッケージがコピーされる

## my-appを動かす

```
cd my-app
npm run serve
```