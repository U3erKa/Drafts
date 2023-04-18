#!/usr/bin/sh
# Use Node 20 to generate standalone executable file from hello.js

mkdir -p dist

node --experimental-sea-config sea-config.json
cp $(command -v node) dist/hello

npx postject dist/hello NODE_SEA_BLOB dist/sea-prep.blob \
  --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2

./dist/hello world
