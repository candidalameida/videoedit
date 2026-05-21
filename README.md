# VideoEdit - AI-Powered Vector Video Generator 🎬

Um webapp moderno para criar vídeos infográficos em 2D com elementos vetoriais usando roteiros estruturados. Powered by React, GSAP, Three.js e FFmpeg.

## 🎯 Recursos Principais

- ✨ **Editor de Roteiros DSL** - Digite scripts estruturados para gerar vídeos
- 🎨 **Preview em Tempo Real** - Veja suas animações enquanto digita
- 🎬 **Export para MP4** - Baixe vídeos prontos para redes sociais
- 🔄 **Interpolação Automática** - Cálculo automático de animações smooth
- 📊 **Suporte a Gráficos** - Crie visualizações de dados dinâmicas
- 🚀 **Performance Otimizada** - WebGL e GPU acceleration

## 🏗️ Arquitetura

```
VideoEdit
├── Frontend (React + TypeScript)
│   ├── Editor de Scripts
│   ├── Canvas Preview (GSAP animations)
│   └── Toolbar de Ferramentas
├── Backend (Node.js + Express)
│   ├── Parser de Scripts
│   ├── Renderização (Canvas)
│   └── Processamento de Vídeo (FFmpeg)
└── Docker (Deployment)
```

## 📋 Linguagem DSL (Domain Specific Language)

```
SCENE "Nome da Cena" (duração em segundos)
  ELEMENT tipo COR at (x, y) size (width, height)
  ELEMENT text "Conteúdo" COR at (x, y)
  
ACTION elemento ANIMAÇÃO to (x, y) over (tempo)
ACTION elemento FADE_IN over (tempo) delay (tempo)
```

### Exemplo Completo

```
SCENE "Introdução" (3s)
  ELEMENT circle BLUE at (100, 100) size 50
  ELEMENT text "Olá Mundo" WHITE at (200, 200)
  
ACTION circle MOVE to (300, 300) over 2s
ACTION text FADE_IN over 1s

SCENE "Dados Principais" (4s)
  ELEMENT rect RED at (50, 50) size (300, 200)
  ELEMENT text "Crescimento 300%" WHITE at (200, 150)
  
ACTION rect SCALE from 0 to 1 over 1.5s with ease-out
```

## 🚀 Quick Start

### Instalação Rápida (Todos os Passos)

```bash
# 1. Clonar repositório
git clone https://github.com/candidalameida/videoedit.git
cd videoedit

# 2. Instalar todas as dependências
npm run install:all

# 3. Configurar variáveis de ambiente
cp .env.example .env

# 4. Desenvolvimento local
npm run dev

# 5. Abrir no navegador
# http://localhost:3000
```

### Desenvolvimento Separado

```bash
# Terminal 1: Backend
npm run dev:server

# Terminal 2: Frontend
cd client && npm run dev
```

## 🐳 Docker (Recomendado para Produção)

```bash
# Build
npm run docker:build

# Run
npm run docker:run
```

## 📦 Dependências Principais

### Frontend
- **React 18** - UI Framework
- **GSAP 3** - Animações GPU-accelerated
- **Three.js** - Renderização 3D/WebGL
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

### Backend
- **Express** - REST API
- **FFmpeg** - Video processing
- **Sharp** - Image manipulation
- **Multer** - File uploads

## 📝 Estrutura de Pastas

```
videoedit/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── store/         # Zustand stores
│   │   ├── hooks/         # Custom hooks
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
├── routes/                 # API routes
│   ├── video.js           # Video processing
│   └── script.js          # Script parsing
├── server.js              # Express server
├── .env.example           # Environment template
├── Dockerfile             # Docker config
├── docker-compose.yml     # Compose config
├── package.json
└── README.md
```

## 🔌 Endpoints da API

### Scripts
- `POST /api/script/parse` - Parse roteiro
- `POST /api/script/validate` - Validar sintaxe

### Vídeos
- `POST /api/video/upload` - Upload de arquivo
- `POST /api/video/render` - Renderizar vídeo
- `GET /api/video/status/:jobId` - Status da renderização
- `GET /api/video/download/:filename` - Download do vídeo

## 🎮 Como Usar

### 1. Escrever um Script
```
SCENE "Meu Primeiro Vídeo" (2s)
  ELEMENT circle RED at (960, 540) size 100
  
ACTION circle MOVE to (1200, 540) over 2s
```

### 2. Clicar "Parse Script"
O sistema analisa e cria a timeline de animações

### 3. Visualizar no Canvas
Veja a preview em tempo real

### 4. Exportar
Baixe como MP4, GIF ou compartilhe online

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Dev completo (frontend + backend)
npm run dev:server       # Só backend
npm run dev:client       # Só frontend

# Build
npm run build            # Build client
npm run build:all        # Build client + server

# Produção
npm start                # Iniciar servidor em produção

# Docker
npm run docker:build     # Build image
npm run docker:run       # Run container
```

## 📱 Suporte a Dispositivos

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android)
- ⚠️ Mobile (Layout limitado, melhor no desktop)

## 🔐 Variáveis de Ambiente

```
PORT=5000
NODE_ENV=development
API_URL=http://localhost:5000

VITE_API_URL=http://localhost:5000

FFMPEG_PATH=/usr/bin/ffmpeg
UPLOAD_DIR=./uploads
OUTPUT_DIR=./outputs

PRODUCTION_URL=https://videoedit.candidaalmeida.com.br
```

## 🚢 Deploy no cPanel

Veja [DEPLOY.md](./DEPLOY.md) para instruções completas.

## 📚 Documentação

- [SETUP.md](./SETUP.md) - Guia de configuração completo
- [DEPLOY.md](./DEPLOY.md) - Deploy em produção

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes

## 📧 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/candidalameida/videoedit/issues)

---

Feito com ❤️ por [candidalameida](https://github.com/candidalameida)
