import { useState, useEffect, useCallback } from "react"
import { api, UserSettings } from "@/services/api"
import { useToast } from "@/components/feedback/ToastProvider"

interface UseSettingsResult {
  settings: UserSettings | null
  isLoading: boolean
  isSaving: boolean
  error: Error | null
  updateSettings: (data: Partial<UserSettings>) => Promise<void>
}

export function useSettings(): UseSettingsResult {
  const [settings, setSettings] = useState<UserSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const { success, error: toastError } = useToast()

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const data = await api.settings.get()
        if (!cancelled) setSettings(data)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err : new Error("Erro ao carregar"))
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const updateSettings = async (data: Partial<UserSettings>) => {
    setIsSaving(true)
    try {
      const updated = await api.settings.update(data)
      setSettings(updated)
      success("Configurações salvas", "Suas alterações foram atualizadas com sucesso.")
    } catch (err) {
      toastError("Erro ao salvar", "Não foi possível salvar suas alterações. Tente novamente.")
      throw err // Re-throw to let form handle local states if needed
    } finally {
      setIsSaving(false)
    }
  }

  return { settings, isLoading, isSaving, error, updateSettings }
}

