import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ThemeProvider from '../../src/lib/theme-provider'
import '../global.css'

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}
