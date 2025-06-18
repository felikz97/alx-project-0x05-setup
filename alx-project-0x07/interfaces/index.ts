import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}
export interface ImageGenerationProps {
    prompt: string
    imageUrl: string
    loading: boolean
    error: string | null
}
export interface ImageGenerationContextType {
    prompt: string
    setPrompt: React.Dispatch<React.SetStateAction<string>>
    imageUrl: string
    setImageUrl: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    error: string | null
    setError: React.Dispatch<React.SetStateAction<string | null>>
}
export interface ImageGenerationProviderProps {
    children: React.ReactNode
}
export interface ImageGenerationFormProps {
    onGenerateImage: (prompt: string) => void
    loading: boolean
    error: string | null
}
export interface ImageGalleryProps {
    images: string[]
    onImageClick: (imageUrl: string) => void
}
export interface ImageGalleryItemProps {
    imageUrl: string
    onClick: (imageUrl: string) => void
}
export interface ImageGenerationResultProps {
    imageUrl: string
    prompt: string
    loading: boolean
    error: string | null
}
export interface ImageGenerationErrorProps {
    error: string | null
}
export interface ImageGenerationLoadingProps {
    loading: boolean
}
export interface ImageGenerationSuccessProps {
    imageUrl: string
    prompt: string
}
export interface ImageGenerationPromptInputProps {
    prompt: string
    setPrompt: React.Dispatch<React.SetStateAction<string>>
}
export interface ImageGenerationButtonProps {
    onClick: () => void
    loading: boolean
}
export interface ImageGenerationContextProviderProps {
    children: React.ReactNode
}

export interface ImageGenerationContextProps {
    prompt: string
    setPrompt: React.Dispatch<React.SetStateAction<string>>
    imageUrl: string
    setImageUrl: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    error: string | null
    setError: React.Dispatch<React.SetStateAction<string | null>>
}
export interface ImageGenerationFormState {
    prompt: string
    imageUrl: string
    loading: boolean
    error: string | null
}
export interface ImageGenerationFormProps {
    onGenerateImage: (prompt: string) => void
    loading: boolean
    error: string | null
}
export interface ImageGalleryProps {
    images: string[]
    onImageClick: (imageUrl: string) => void
}