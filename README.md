<!-- markdownlint-disable MD024 -->

# Mobile Terminal Application Development

情報工学実験Ⅳ - モバイル端末アプリケーション開発のためのリポジトリです。

## Setup with Dev Containers 📦

モバイル端末アプリケーション開発の開発環境を Dev Containers で簡単に立ち上げることができます。 

### Attention

- 事前に [Docker](https://docs.docker.com/get-docker) と [VSCode](https://code.visualstudio.com) をインストールしておく必要があります。

### 1. clone git repository

```bash
git clone "https://github.com/nitic-csx-iv-t1-w7-2024/mobile-terminal-application-development" && cd "./mobile-terminal-application-development"
```

### 2. set environment variables

詳細は `.env.example` を参照するか、[リポジトリ所有者](https://github.com/dino3616)に連絡してください。

### 3. launch dev containers

VSCodeの拡張機能 [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) を使用してコンテナを起動してください。

### 4. install dependencies

```bash
pnpm install
```

### 5. start development server

```bash
pnpm dev --tunnel
```

### 6. open Expo Go app

Expo Go アプリを使用して、開発中のアプリをプレビューすることができます。  
[App Store](https://apps.apple.com/jp/app/expo-go/id982107779) もしくは [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) からインストールしてください。  
インストール後、アプリを起動し、「Scan QR code」からターミナルに表示されている QR コードをスキャンしてください。

![Expo Goの起動画面](https://github.com/user-attachments/assets/1e089a73-301b-4d56-b1e6-d16e76c62acd)
