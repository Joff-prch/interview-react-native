import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export function CalendarSlot() {
  const slots = generateRandomSlots(Math.floor(Math.random() * 10))
  const [selected, setSelected] = useState<number | null>(null)
  const onPress = (index: number) => setSelected(index)

  return (
    <View>
      {slots
        .sort((a, b) => a.start.localeCompare(b.start))
        .map((slot, index) => (
          <View key={index} style={styles.container}>
            <Text>{new Date(slot.start).toLocaleTimeString('fr', { hour: 'numeric', minute: 'numeric' })}</Text>
          </View>
        ))}
    </View>
  )
}

function generateRandomSlots(maxSlots: number) {
  const slots = []
  for (let i = 0; i < maxSlots; i++) {
    const random = getRandomTime()
    slots.push(random)
  }
  return slots
}

function getRandomTime() {
  const hours = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 2) % 2 === 0 ? 0 : 30
  const start = new Date()
  start.setHours(hours)
  start.setMinutes(minutes)

  const end = new Date(start)
  end.setHours(start.getHours() + 1)

  return { start: start.toISOString(), end: end.toISOString() }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    paddingVertical: 7,
    borderRadius: 5,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: 'rgb(247, 247, 247)',
    cursor: 'pointer',
  },
})
