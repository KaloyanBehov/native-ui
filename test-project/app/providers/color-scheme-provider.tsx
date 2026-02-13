import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { Appearance, ColorSchemeName, useColorScheme as useExpoColorScheme } from 'react-native'

type ColorScheme = 'light' | 'dark' | 'auto'

interface ColorSchemeContextType {
  colorScheme: ColorScheme
  resolvedColorScheme: ColorSchemeName
  toggleColorScheme: () => void
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined)

interface ColorSchemeProviderProps {
  children: ReactNode
  defaultColorScheme?: ColorScheme
}

export function ColorSchemeProvider({ children, defaultColorScheme = 'auto' }: ColorSchemeProviderProps) {
  const systemColorScheme = useExpoColorScheme()
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme)

  // Resolve the actual color scheme based on the selected mode
  const resolvedColorScheme: ColorSchemeName =
    colorScheme === 'auto' ? systemColorScheme : colorScheme === 'light' ? 'light' : 'dark'

  // Update expo-system-ui when color scheme changes
  useEffect(() => {
    if (colorScheme !== 'auto') {
      Appearance.setColorScheme(colorScheme)
    } else {
      // Reset to system preference when set to auto
      Appearance.setColorScheme(null)
    }
  }, [colorScheme])

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        resolvedColorScheme,
        toggleColorScheme: () => {
          Appearance.setColorScheme(resolvedColorScheme === 'light' ? 'dark' : 'light')
        },
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  )
}

export function useColorSchemeContext() {
  const context = useContext(ColorSchemeContext)
  if (context === undefined) {
    throw new Error('useColorSchemeContext must be used within a ColorSchemeProvider')
  }
  return context
}
