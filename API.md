# 📖 API Documentation - VideoEdit 2.0

Documentação completa de todos os endpoints disponíveis.

## 🌐 Base URL

```
http://localhost:5000/api
```

## 🔌 Health Check

### GET /health

Verifica se a API está ativa.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-05-25T13:00:00.000Z",
  "service": "VideoEdit API"
}
```

---

## 📝 Script Routes

### POST /script/parse

Parse um script DSL e extrai as cenas.

**Request:**
```json
{
  "script": "SCENE \"Intro\" (3s)\n  ELEMENT circle BLUE at (960, 540) size 50\n\nACTION circle MOVE to (300, 300) over 2s"
}
```

**Response:**
```json
{
  "success": true,
  "scenes": [
    {
      "name": "Intro",
      "duration": 3,
      "elements": [
        {
          "type": "circle",
          "x": 960,
          "y": 540,
          "color": "BLUE",
          "size": 50
        }
      ],
      "actions": [
        {
          "element": "circle",
          "type": "MOVE",
          "to": { "x": 300, "y": 300 },
          "duration": 2
        }
      ]
    }
  ],
  "message": "Script parsed successfully"
}
```

### POST /script/validate

Valida a sintaxe de um script.

**Request:**
```json
{
  "script": "SCENE \"Test\" (2s)\n  ELEMENT circle RED at (960, 540) size 100"
}
```

**Response:**
```json
{
  "valid": true,
  "message": "Script is valid"
}
```

---

## 🎬 Video Routes

### POST /video/upload

Faz upload de um arquivo de vídeo.

**Request:**
```
multipart/form-data
- file: <video file>
```

**Response:**
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "file": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "originalName": "video.mp4",
    "size": 5242880,
    "path": "uploads/550e8400-e29b-41d4-a716-446655440000.mp4"
  }
}
```

### POST /video/render

Renderiza um vídeo a partir de cenas e retorna um job ID.

**Request:**
```json
{
  "scenes": [
    {
      "name": "Intro",
      "duration": 3,
      "elements": [...],
      "actions": [...]
    }
  ],
  "fps": 30,
  "width": 1920,
  "height": 1080
}
```

**Response:**
```json
{
  "success": true,
  "message": "Video rendering started",
  "jobId": "job-550e8400-e29b-41d4-a716-446655440000",
  "estimatedTime": 35,
  "status": "processing"
}
```

### GET /video/status/:jobId

Verifica o status de uma renderização.

**Response:**
```json
{
  "jobId": "job-550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",
  "progress": 65,
  "message": "Rendering video... 65%"
}
```

### GET /video/download/:filename

Baixa um vídeo renderizado.

**Response:**
```
Binary video file (mp4, gif, webm)
```

---

## 💾 Download Routes

### POST /download/download

Gera um download de vídeo com opções de formato e qualidade.

**Request:**
```json
{
  "format": "mp4",
  "quality": "medium",
  "frames": [...]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Video download started",
  "downloadUrl": "/api/download/file/video-1234567890.mp4",
  "size": "15MB",
  "duration": "30s"
}
```

### GET /download/file/:filename

Baixa um arquivo específico.

**Response:**
```
Binary file
```

### POST /download/generate-gif

Gera um GIF a partir de frames.

**Request:**
```json
{
  "frames": [...],
  "fps": 10
}
```

**Response:**
```json
{
  "success": true,
  "message": "GIF generation started",
  "jobId": "gif-1234567890",
  "format": "gif",
  "fps": 10
}
```

### POST /download/generate-webm

Gera um WebM a partir de frames.

**Request:**
```json
{
  "frames": [...],
  "fps": 30
}
```

**Response:**
```json
{
  "success": true,
  "message": "WebM generation started",
  "jobId": "webm-1234567890",
  "format": "webm",
  "fps": 30
}
```

---

## 🤖 AI Routes

### POST /ai/generate-script

Gera um script DSL a partir de uma descrição em linguagem natural usando IA.

**Request:**
```json
{
  "prompt": "Crie um vídeo de apresentação de startup com logo bouncing, gráfico de crescimento 300% e botão pulsando",
  "provider": "Claude"
}
```

**Response:**
```json
{
  "success": true,
  "script": "SCENE \"Intro\" (2s)\n  ELEMENT circle BLUE at (960, 540) size 50\n\nACTION circle SCALE from 0 to 1 over 1.5s with ease-out\n\nSCENE \"Dados\" (4s)\n...",
  "explanation": "✅ Script gerado por Claude com sucesso!",
  "provider": "Claude"
}
```

### POST /ai/describe-scene

Gera uma descrição visual de uma cena.

**Request:**
```json
{
  "scene": {
    "name": "Intro",
    "duration": 3,
    "elements": [...]
  },
  "provider": "Claude"
}
```

**Response:**
```json
{
  "description": "Uma cena de introdução elegante com um círculo azul que cresce do centro. O efeito é suave e profissional."
}
```

### POST /ai/enhance-script

Melhora um script existente com animações, transições e efeitos melhores.

**Request:**
```json
{
  "script": "SCENE \"Intro\" (2s)\n  ELEMENT circle BLUE at (960, 540) size 50",
  "provider": "Claude"
}
```

**Response:**
```json
{
  "success": true,
  "script": "SCENE \"Intro\" (2s)\n  ELEMENT circle BLUE at (960, 540) size 50\n  ELEMENT text \"Bem-vindo\" WHITE at (960, 400)\n\nACTION circle SCALE from 0 to 1 over 1.5s with ease-out\nACTION text FADE_IN over 1s delay 0.5s",
  "message": "✨ Script aprimorado!"
}
```

---

## ⚙️ API Routes

### GET /status

Retorna o status geral da API.

**Response:**
```json
{
  "version": "2.0.0",
  "environment": "production",
  "uptime": 3600,
  "features": {
    "videoRendering": true,
    "aiIntegration": true,
    "effects": true,
    "templates": true,
    "export": true
  }
}
```

### GET /config

Retorna a configuração da API.

**Response:**
```json
{
  "apiUrl": "https://videoedit.candidaalmeida.com.br/api",
  "environment": "production",
  "maxVideoSize": "500MB",
  "supportedFormats": ["mp4", "gif", "webm"],
  "supportedAIProviders": ["Claude", "ChatGPT", "Gemini", "Copilot"]
}
```

---

## 🔐 Autenticação

Atualmente a API não requer autenticação. Em produção, adicione:

```bash
Authorization: Bearer <your-token>
```

---

## ⚠️ Códigos de Erro

| Código | Mensagem | Causa |
|--------|----------|-------|
| 400 | Bad Request | Parâmetros inválidos |
| 404 | Not Found | Recurso não existe |
| 500 | Internal Server Error | Erro no servidor |
| 503 | Service Unavailable | API indisponível |

---

## 📊 Rate Limiting

- **Limite:** 100 requisições por minuto
- **Header:** `X-RateLimit-Remaining`

---

## 🧪 Exemplos com cURL

### Fazer parse de script

```bash
curl -X POST http://localhost:5000/api/script/parse \
  -H "Content-Type: application/json" \
  -d '{
    "script": "SCENE \"Intro\" (3s)\n  ELEMENT circle BLUE at (960, 540) size 50"
  }'
```

### Gerar script com IA

```bash
curl -X POST http://localhost:5000/api/ai/generate-script \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Crie um vídeo de apresentação de startup",
    "provider": "Claude"
  }'
```

### Verificar status da API

```bash
curl http://localhost:5000/api/status
```

---

## 📚 Integração JavaScript

```javascript
// Parse script
const response = await fetch('/api/script/parse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ script: '...' })
});
const data = await response.json();

// Gerar script com IA
const aiResponse = await fetch('/api/ai/generate-script', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Crie um vídeo...',
    provider: 'Claude'
  })
});
const aiData = await aiResponse.json();
```

---

**Última atualização:** 2026-05-25  
**Versão:** 2.0.0
