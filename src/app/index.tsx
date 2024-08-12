import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { Calendar } from '@/src/components/calendar/Calendar'

const { width } = Dimensions.get('window')
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={[{ marginTop: 100 }, width > 800 ? styles.desktop : styles.mobile]}>
        <Text style={{ textAlign: 'center' }}>Calendar</Text>
        <Calendar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  desktop: {
    width: width / 2,
    alignSelf: 'center',
  },
  mobile: {
    width: width,
  },
})
