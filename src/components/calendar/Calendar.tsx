import { StyleSheet, View } from 'react-native'
import { ThemedText as Text } from '../ThemedText'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

export function Calendar() {
  const [firstDay, setFirstDay] = useState(new Date())
  const today = new Date()
  const cantGoBack = firstDay.getDate() === today.getDate()

  const renderCalendar = () => {
    const calendarDays = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000)
      const day = date.toLocaleDateString('fr', { weekday: 'long' })
      const month = date.toLocaleDateString('fr', { month: 'long' })
      const dayOfMonth = date.getDate()

      calendarDays.push(
        <View key={i} style={styles.calendar}>
          <Text style={styles.text}>{day.slice(0, 3)}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text, { marginRight: 2, fontWeight: 'bold' }]}>{dayOfMonth}</Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>{month.slice(0, 4)}</Text>
          </View>
        </View>
      )
    }
    return calendarDays
  }

  const onPressArrow = (choice: string) => {
    if (choice === 'back') {
      if (cantGoBack) return
      const newDate = new Date(firstDay.getTime())
      newDate.setDate(newDate.getDate() - 7)
      setFirstDay(newDate)
    } else {
      const newDate = new Date(firstDay.getTime())
      newDate.setDate(newDate.getDate() + 7)
      setFirstDay(newDate)
    }
  }

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ionicons
          size={20}
          name='chevron-back-outline'
          disabled={cantGoBack}
          onPress={() => onPressArrow('back')}
          color={cantGoBack ? 'gray' : 'black'}
        />
        <Ionicons size={20} name='chevron-forward-outline' onPress={() => onPressArrow('')} />
      </View>
      <View style={{ flexDirection: 'row' }}>{renderCalendar()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
})
