import { colors } from '@ak-design-system/tokens'
import { getContrast } from 'polished'

export default function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={styles({ color }).box}>
        <div style={styles({ color }).intern}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}

const styles = (arg?: { color: string }) => {
  return {
    box: {
      display: 'flex',
      backgroundColor: arg?.color,
      padding: '2rem',
      fontFamily: 'monospace',
    },
    intern: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      color:
        arg?.color && getContrast(arg.color, '#FFF') < 3.5 ? '#000' : '#FFF',
    },
  }
}
