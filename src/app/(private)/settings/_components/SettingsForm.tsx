"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionFadeIn } from "@/components/feedback/SectionFadeIn"
import { ErrorBanner } from "@/components/feedback/ErrorBanner"
import { RotateCw } from "lucide-react"
import { useSettings } from "@/hooks/use-settings"
import { Skeleton } from "@/components/feedback/Skeleton"

export function SettingsForm() {
  const { settings, isLoading, isSaving, error, updateSettings } = useSettings()
  
  // Local form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notifications: true
  })

  // Sync local state with fetched settings
  useEffect(() => {
    if (settings) {
      setFormData(settings)
    }
  }, [settings])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateSettings(formData)
  }

  if (isLoading) {
      return (
          <div className="space-y-4">
               <Skeleton className="h-[300px] w-full" />
          </div>
      )
  }

  if (error) {
      return <ErrorBanner message="Erro ao carregar configurações." />
  }

  return (
    <SectionFadeIn>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>
              Atualize suas informações pessoais e preferências.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSaving}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSaving}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <p className="text-sm text-muted-foreground">
              As alterações podem levar alguns instantes.
            </p>
            <Button type="submit" disabled={isSaving}>
              {isSaving && <RotateCw className="mr-2 h-4 w-4 animate-spin" />}
              {isSaving ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </SectionFadeIn>
  )
}

