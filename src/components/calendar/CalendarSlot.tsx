import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export function CalendarSlot() {
  const slots = generateRandomSlots(Math.floor(Math.random() * 10))

  return (
    <View>
      {slots
        .sort((a, b) => a.start.localeCompare(b.start))
        .map((slot, index) => (
          <Slot key={index} slot={slot} />
        ))}
    </View>
  )
}

const Slot = ({ slot }: any) => {
  const [click, setClick] = useState(0)
  const onPress = () => {
    if (click === 3) return setClick(0)
    setClick((prev) => prev + 1)
  }

  return (
    <TouchableOpacity
      style={[styles.container, click === 2 && { backgroundColor: 'green' }, click === 3 && { backgroundColor: 'blue' }]}
      onPress={onPress}>
      <Text>
        {new Date(slot.start).toLocaleTimeString('fr', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Text>
    </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: 'rgb(247, 247, 247)',
    cursor: 'pointer',
  },
})
