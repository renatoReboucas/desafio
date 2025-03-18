# Pokemon Abilities App

Aplicativo mobile para buscar as habilidades dos pokemons.

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript
- Axios

## 📋 Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI
- Um dispositivo móvel ou emulador

## ⚙️ Configuração

1. Instale as dependências

```bash
npm install
# ou
yarn install
```

2. Configure o arquivo .env
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
API_URL=http://192.168.1.6:3333
```

> ⚠️ Substitua o IP pelo endereço da sua rede local e adicione a porta da api.

## 🎮 Rodando o App

1. Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

2. Use o aplicativo Expo Go no seu celular para escanear o QR Code
   - Ou pressione 'a' para abrir no emulador Android
   - Ou pressione 'i' para abrir no emulador iOS

## 📱 Uso

1. Digite o nome de um pokemon no campo de busca
2. Toque em "Pesquisar"
3. As habilidades do pokemon serão exibidas na tela
