import { useState } from 'react'
import { Brain, Send, Copy, Loader } from 'lucide-react'

interface AIProvider {
  name: string
  icon: string
  color: string
  connected: boolean
}

const PROVIDERS: AIProvider[] = [
  { name: 'Claude', icon: '🤖', color: 'bg-orange-600', connected: false },
  { name: 'ChatGPT', icon: '🧠', color: 'bg-green-600', connected: false },
  { name: 'Gemini', icon: '✨', color: 'bg-blue-600', connected: false },
  { name: 'Copilot', icon: '🚀', color: 'bg-purple-600', connected: false },
]

export default function AISkillIntegration() {
  const [prompt, setPrompt] = useState('')
  const [selectedProvider, setSelectedProvider] = useState<string>('Claude')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [generatedScript, setGeneratedScript] = useState('')

  const handleGenerateScript = async () => {
    if (!prompt.trim()) {
      alert('Digite uma descrição do vídeo!')
      return
    }

    setIsLoading(true)

    try {
      // Chamar API de AI Skills
      const res = await fetch('/api/ai/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          provider: selectedProvider,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        setGeneratedScript(data.script)
        setResponse(data.explanation || '')
      }
    } catch (error) {
      console.error('Erro ao gerar script:', error)
      setResponse('Erro ao conectar com a IA')
    } finally {
      setIsLoading(false)
    }
  }

  const copyScript = () => {
    navigator.clipboard.writeText(generatedScript)
    alert('✅ Script copiado!')
  }

  const useScript = () => {
    const event = new CustomEvent('use-script', { detail: generatedScript })
    window.dispatchEvent(event)
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-black border-b border-gray-700 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Brain size={24} className="text-yellow-400" />
          <h3 className="text-xl font-bold text-white">AI Skills</h3>
          <span className="text-xs text-gray-400 ml-auto">Powered by LLMs</span>
        </div>
        <p className="text-sm text-gray-400">Descreva seu vídeo e a IA gerará um script</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Provider Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Selecione o Provedor
          </label>
          <div className="grid grid-cols-2 gap-2">
            {PROVIDERS.map((provider) => (
              <button
                key={provider.name}
                onClick={() => setSelectedProvider(provider.name)}
                className={`px-3 py-2 rounded transition border-2 ${
                  selectedProvider === provider.name
                    ? `${provider.color} text-white border-white`
                    : 'bg-gray-700 text-gray-300 border-transparent hover:bg-gray-600'
                }`}
              >
                <span className="text-lg mr-1">{provider.icon}</span>
                {provider.name}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Descreva seu vídeo
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Um vídeo de apresentação de uma startup de IA, com animações suaves, gráficos crescentes mostrando métricas de crescimento, e um final com call-to-action..."
            className="w-full h-24 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-yellow-500 focus:outline-none text-sm resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            ✨ Seja descritivo! Quanto mais detalhes, melhor será o script gerado.
          </p>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateScript}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Gerando...
            </>
          ) : (
            <>
              <Send size={20} />
              Gerar Script com IA
            </>
          )}
        </button>

        {/* Generated Script */}
        {generatedScript && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-white mb-3">✨ Script Gerado</h4>
            <div className="bg-gray-900 rounded p-3 mb-3 max-h-40 overflow-y-auto">
              <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
                {generatedScript}
              </pre>
            </div>

            {response && (
              <div className="bg-gray-800 rounded p-3 mb-3">
                <p className="text-sm text-gray-300">{response}</p>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={copyScript}
                className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded font-medium transition flex items-center justify-center gap-2"
              >
                <Copy size={16} />
                Copiar
              </button>
              <button
                onClick={useScript}
                className="flex-1 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded font-medium transition"
              >
                Usar Script
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="bg-gray-900 border-t border-gray-700 p-3 text-xs text-gray-400">
        <p>💡 Dica: Configure suas chaves de API nos seus ambientes para ativar cada provedor.</p>
      </div>
    </div>
  )
}
