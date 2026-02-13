import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { Button } from 'rn-cn-ui/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from 'rn-cn-ui/components/ui/empty'
import { useTheme } from '../../src/lib/theme-provider'

const Icon = () => {
  const { resolvedTheme } = useTheme()
  return <Ionicons name="document-text" size={24} color={resolvedTheme === 'dark' ? 'white' : 'black'} />
}

const EmptyState = () => {
  return (
    <View className="flex-1 bg-background">
      <Empty padding="lg">
        <EmptyHeader>
          <EmptyMedia variant="icon" size="xl">
            <Icon />
          </EmptyMedia>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>No data found in your account.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button label="Add data" className="w-full" />
          <Button label="Learn more" variant="secondary" className="w-full" />
        </EmptyContent>
      </Empty>
    </View>
  )
}

export default EmptyState
