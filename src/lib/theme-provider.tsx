import React, { createContext, useContext, useMemo, useState } from 'react'
import { Appearance, type ColorSchemeName, useColorScheme, View } from 'react-native'
import { cn } from './utils'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: Theme
  resolvedTheme: Exclude<ColorSchemeName, null>
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

const ThemeProvider = ({ children, defaultTheme = 'system' }: ThemeProviderProps) => {
  const systemColorScheme = useColorScheme()
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const resolvedTheme: Exclude<ColorSchemeName, null> =
    theme === 'system' ? (systemColorScheme === 'dark' ? 'dark' : 'light') : theme

  const applyNativeColorScheme = (nextTheme: Theme) => {
    try {
      if (nextTheme === 'system') {
        Appearance.setColorScheme(null as unknown as ColorSchemeName)
        return
      }
      Appearance.setColorScheme(nextTheme)
    } catch {
      // No-op: some platforms/versions may not support forcing the color scheme.
    }
  }

  const toggleTheme = () => {
    const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyNativeColorScheme(nextTheme)
  }

  const value = useMemo<ThemeContextType>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: nextTheme => {
        setTheme(nextTheme)
        applyNativeColorScheme(nextTheme)
      },
      toggleTheme,
    }),
    [theme, resolvedTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <View className={cn('flex-1 bg-background', resolvedTheme === 'dark' && 'dark')}>{children}</View>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
export default ThemeProvider
