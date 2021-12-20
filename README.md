# nouns-monorepo


Noname DAO is an experimental community that aims to build a new method of investors and founders collaboration. Nonamers can share and propose their knowledge of profitable investment options which the whole community can profit from using its large accumulated funds once DAO decides to approve it.

It's the ultimate membership powered by a community of blockchain founders, investors, and experts bound together by shared values and shared incentives.

Mission of Noname DAO is to fund awesome projects that people really need in the crypto area through collective voting using a collective treasury.

Noname DAO is heavily inspired by [Nouns](https://nouns.wtf) and built on top of the customized [Nouns Protocol](https://github.com/nounsDAO/nouns-monorepo) on Polygon network.


## Packages

### nouns-api

The [nouns api](packages/nouns-api) is an HTTP webserver that hosts token metadata. This is currently unused because on-chain, data URIs are enabled.

### nouns-assets

The [nouns assets](packages/nouns-assets) package holds the Noun PNG and run-length encoded image data.

### nouns-bots

The [nouns bots](packages/nouns-bots) package contains a bot that monitors for changes in Noun auction state and notifies everyone via Twitter and Discord.

### nouns-contracts

The [nouns contracts](packages/nouns-contracts) is the suite of Solidity contracts powering Nouns DAO.

### nouns-sdk

The [nouns sdk](packages/nouns-sdk) exposes the Nouns contract addresses, ABIs, and instances as well as image encoding and SVG building utilities.

### nouns-subgraph

In order to make retrieving more complex data from the auction history, [nouns subgraph](packages/nouns-subgraph) contains subgraph manifests that are deployed onto [The Graph](https://thegraph.com).

### nouns-webapp

The [nouns webapp](packages/nouns-webapp) is the frontend for interacting with Noun auctions as hosted at [nouns.wtf](https://nouns.wtf).

## Quickstart

### Install dependencies

```sh
yarn
```

### Build all packages

```sh
yarn build
```

### Run Linter

```sh
yarn lint
```

### Run Prettier

```sh
yarn format
```
