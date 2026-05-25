# 🎬 Guia de Uso - VideoEdit 2.0

Bem-vindo ao VideoEdit! Este é um guia completo para usar todas as novas funcionalidades.

## 📋 Índice

1. [Começando](#começando)
2. [Editor de Scripts DSL](#editor-de-scripts-dsl)
3. [AI Skills - Gerador Automático](#ai-skills)
4. [Templates Prontos](#templates-prontos)
5. [Efeitos Avançados](#efeitos-avançados)
6. [Exportar Vídeos](#exportar-vídeos)
7. [Exemplos Práticos](#exemplos-práticos)

---

## 🚀 Começando

### Passo 1: Abra o VideoEdit

```
http://localhost:3000
```

### Passo 2: Você Verá 5 Abas

1. **📝 Script Editor** - Escreva scripts manualmente
2. **✨ AI Skills** - Gere scripts com IA
3. **🎨 Canvas Preview** - Veja a preview do vídeo
4. **🎨 Advanced Effects** - Adicione efeitos
5. **📚 Templates** - Use templates prontos
6. **⚡ Export** - Baixe seu vídeo

---

## ✍️ Editor de Scripts DSL

### Sintaxe Básica

```
SCENE "Nome da Cena" (duração em segundos)
  ELEMENT tipo COR at (x, y) size (width, height)
  
ACTION elemento ANIMAÇÃO to (x, y) over (tempo em segundos)
```

### Tipos de Elementos

- `circle` - Círculo
- `rect` - Retângulo
- `text` - Texto
- `path` - Caminho personalizado
- `image` - Imagem

### Cores Suportadas

```
RED, BLUE, GREEN, YELLOW, PURPLE, ORANGE, PINK, GRAY, WHITE, BLACK
```

### Exemplo Completo

```
SCENE "Introdução" (3s)
  ELEMENT circle BLUE at (400, 540) size 100
  ELEMENT text "Bem-vindo" WHITE at (960, 540)
  ELEMENT rect GREEN at (1400, 540) size (200, 200)
  
ACTION circle MOVE to (800, 540) over 2s
ACTION text FADE_IN over 1.5s delay 0.5s
ACTION rect SCALE from 0 to 1 over 2s

SCENE "Dados" (4s)
  ELEMENT rect RED at (400, 300) size (300, 500)
  ELEMENT rect BLUE at (850, 150) size (300, 650)
  ELEMENT rect GREEN at (1300, 400) size (300, 400)
  
ACTION rect SCALE from 0 to 1 over 2s with ease-out
```

### Animações Disponíveis

- `MOVE` - Movimento linear
- `FADE_IN` - Aparecimento gradual
- `FADE_OUT` - Desaparecimento gradual
- `SCALE` - Mudança de tamanho
- `ROTATE` - Rotação
- `PULSE` - Pulsação rítmica
- `BOUNCE` - Quique/salto
- `GLOW` - Efeito de brilho
- `BLUR` - Desfoque

---

## 🤖 AI Skills - Gerador Automático

### Como Usar

1. Vá para a aba **AI Skills**
2. Escolha o provedor (Claude, ChatGPT, Gemini, Copilot)
3. Descreva seu vídeo em português natural
4. Clique **"Gerar Script com IA"**
5. A IA criará um script automaticamente!

### Exemplo de Prompt

```
"Crie um vídeo de apresentação de um app de delivery. 
Deve ter uma intro com logo bouncing, 
depois mostrar um gráfico de crescimento 300%, 
e terminar com um botão de download pulsando."
```

### Provedores Disponíveis

| Provedor | Modelo | Custo | Velocidade |
|----------|--------|-------|-----------|
| **Claude** | Claude 3.5 Sonnet | Médio | Rápida ⚡⚡⚡ |
| **ChatGPT** | GPT-4 | Alto | Média ⚡⚡ |
| **Gemini** | Gemini 1.5 Flash | Baixo | Muito rápida ⚡⚡⚡⚡ |
| **Copilot** | Copilot Codex | Médio | Rápida ⚡⚡⚡ |

### Configurar API Keys

Edite seu `.env`:

```bash
CLAUDE_API_KEY=sk-ant-xxxx...
OPENAI_API_KEY=sk-xxxx...
GEMINI_API_KEY=AIzaSy...
GITHUB_COPILOT_TOKEN=gho_...
```

---

## 📚 Templates Prontos

### Como Usar um Template

1. Vá para **Templates**
2. Procure por categoria (Introdução, Gráficos, Social Media, etc)
3. Clique no template
4. Clique **"Usar Template"**
5. Personalize conforme necessário

### Templates Inclusos

#### 1. 🎬 Intro com Fade
Abertura elegante com transição suave
```
Categoria: Introdução
Duração: 3s
Efeito: Fade-in suave
```

#### 2. 📊 Visualização de Dados
Apresente métricas com estilo
```
Categoria: Gráficos
Duração: 4s
Efeitos: Scale, animação de barras
```

#### 3. 📝 Slide de Título
Título com efeito de aparecimento
```
Categoria: Apresentação
Duração: 2s
Efeito: Fade-in
```

#### 4. 📱 Promoção Social
Perfeito para redes sociais
```
Categoria: Social Media
Duração: 3s
Efeitos: Scale, pulse
```

#### 5. 👨‍🏫 Passo de Tutorial
Para ensinar processos passo-a-passo
```
Categoria: Educação
Duração: 3s
Efeito: Glow
```

#### 6. ⏱️ Contagem Regressiva
Perfeito para eventos e promoções
```
Categoria: Eventos
Duração: 4s
Efeito: Pulse
```

---

## 🎨 Efeitos Avançados

### Biblioteca de Efeitos

#### Efeitos Básicos
- **Fade In** - Aparecimento gradual ⚪ → ●
- **Fade Out** - Desaparecimento gradual ● → ⚪
- **Slide Left** - Desliza para esquerda → ●
- **Slide Right** - Desliza para direita ● ←
- **Scale Up** - Aumenta de tamanho ⚪ → ●●
- **Scale Down** - Diminui de tamanho ●● → ⚪

#### Efeitos Avançados
- **Blur In** - Desfoca ao aparecer ◎ → ●
- **Glow Effect** - Efeito de brilho ✨ ●
- **Shadow Drop** - Sombra em movimento ● 🔳
- **Rotate** - Rotação 360° ↻ ●

#### Efeitos Especiais
- **Bounce** - Quique/salto ↕ ●
- **Pulse** - Pulsação rítmica ◯ ● ◯
- **Flip** - Virada 3D ⟲ ●
- **Morph** - Transformação de forma ● ◆

### Como Aplicar Efeitos

1. Vá para **Advanced Effects**
2. Procure por efeito na biblioteca
3. Clique para selecionar
4. Aparecerá no painel "Selecionados"
5. Clique **"Aplicar Efeitos"**

---

## ⚡ Exportar Vídeos

### Formatos Suportados

| Formato | Vantagem | Uso |
|---------|----------|-----|
| **MP4** | Melhor compatibilidade | Redes sociais, web |
| **GIF** | Compartilhamento rápido | Whatsapp, Twitter |
| **WebM** | Melhor compressão | Web, blog |

### Qualidades

- **Low (720p)** - Menor tamanho (~5MB)
- **Medium (1080p)** - Recomendado (~15MB) ⭐
- **High (4K)** - Maior qualidade (~50MB)

### Passo a Passo

1. Vá para **Export**
2. Veja as estatísticas do seu vídeo
3. Escolha formato (MP4, GIF, WebM)
4. Escolha qualidade
5. Clique **"Exportar Vídeo"**
6. Aguarde processamento
7. Seu vídeo será baixado automaticamente!

---

## 📚 Exemplos Práticos

### Exemplo 1: Apresentação de Startup

```
SCENE "Logo Animado" (2s)
  ELEMENT circle BLUE at (960, 540) size 50
  
ACTION circle SCALE from 0 to 1 over 1.5s with ease-out

SCENE "Título Principal" (3s)
  ELEMENT text "Nossa Startup" WHITE at (960, 300)
  ELEMENT text "Revolucionando a tecnologia" GRAY at (960, 400)
  
ACTION text FADE_IN over 2s

SCENE "Métricas" (4s)
  ELEMENT rect GREEN at (400, 300) size (200, 400)
  ELEMENT text "1M+" WHITE at (500, 350)
  
  ELEMENT rect BLUE at (850, 150) size (200, 600)
  ELEMENT text "500K+" WHITE at (950, 250)
  
  ELEMENT rect RED at (1300, 200) size (200, 500)
  ELEMENT text "10K+" WHITE at (1400, 300)
  
ACTION rect SCALE from 0 to 1 over 2s with ease-out
```

### Exemplo 2: Vídeo Social (Instagram)

```
SCENE "Chamada" (2s)
  ELEMENT rect RED at (100, 100) size (1720, 880)
  ELEMENT text "APROVEITE!" YELLOW at (960, 300)
  ELEMENT text "50% OFF" WHITE at (960, 500)
  
ACTION text SCALE from 0.8 to 1 over 1.5s

SCENE "Call to Action" (2s)
  ELEMENT circle GREEN at (960, 600) size 100
  ELEMENT text "CLIQUE AGORA" WHITE at (960, 600)
  
ACTION circle PULSE over 1.5s
```

### Exemplo 3: Tutorial

```
SCENE "Passo 1" (3s)
  ELEMENT circle BLUE at (300, 540) size 80
  ELEMENT text "1" WHITE at (300, 540)
  ELEMENT text "Abra o aplicativo" WHITE at (700, 540)
  
ACTION circle GLOW over 2s

SCENE "Passo 2" (3s)
  ELEMENT circle GREEN at (300, 540) size 80
  ELEMENT text "2" WHITE at (300, 540)
  ELEMENT text "Clique em Configurações" WHITE at (700, 540)
  
ACTION circle GLOW over 2s

SCENE "Passo 3" (3s)
  ELEMENT circle RED at (300, 540) size 80
  ELEMENT text "3" WHITE at (300, 540)
  ELEMENT text "Personalize seu perfil" WHITE at (700, 540)
  
ACTION circle GLOW over 2s
```

---

## 🆘 Dicas & Truques

### Dica 1: Use Coordenadas Centralizadas

```
Tela: 1920x1080 (16:9)
Centro: (960, 540)
```

### Dica 2: Combine Animações

```
SCENE "Complexo" (3s)
  ELEMENT circle BLUE at (100, 100) size 50
  
ACTION circle MOVE to (300, 300) over 2s
ACTION circle SCALE from 1 to 1.5 over 1.5s delay 0.5s
ACTION circle GLOW over 2s
```

### Dica 3: Exporte em Alta Qualidade

Para melhor resultado em redes sociais, sempre exporte em **Medium (1080p)**.

### Dica 4: Use AI para Inspiração

Se está travado criando um vídeo, use o AI Skills para gerar ideias!

---

## 📞 Suporte

- 📖 Documentação: https://github.com/candidalameida/videoedit
- 🐛 Reportar Bug: https://github.com/candidalameida/videoedit/issues
- 💬 Discussões: https://github.com/candidalameida/videoedit/discussions

---

**Divirta-se criando vídeos incríveis! 🎬✨**
