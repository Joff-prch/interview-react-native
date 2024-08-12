import { Image, StyleSheet, Platform, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Calendar } from '@/src/components/calendar/Calendar'

export default function HomeScreen() {
  return (
    <ThemedView>
      <View style={{ marginTop: 100 }}>
        <ThemedText style={{ textAlign: 'center' }}>Calendar</ThemedText>
        <Calendar />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({})
