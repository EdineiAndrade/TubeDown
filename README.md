# node-ytdl-core

![Depfu](https://img.shields.io/depfu/fent/node-ytdl-core)
[![codecov](https://codecov.io/gh/fent/node-ytdl-core/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-ytdl-core)
[![Discord](https://img.shields.io/discord/484464227067887645.svg)](https://discord.gg/V3vSCs7)

Mais um módulo de download do YouTube. Escrito apenas com Javascript e uma interface de streaming amigável ao nó.

# Apoio, suporte

Link do Discord [chat server](https://discord.gg/V3vSCs7)

# Usage

```js
const fs = require("fs");
const ytdl = require("ytdl-core");
// TypeScript: importa ytdl de 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl de 'ytdl-core'; com --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); com nenhuma das opções acima

ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
  fs.createWriteStream("video.mp4")
);
```

# Instalação

Usando o Npm:

```bash
npm install ytdl-core@latest
```

Usando o Yarn:

```bash
yarn add ytdl-core@latest
```

```

## Update Checks




```
