import PodiumStep from './PodiumStep'

export default function Podium({ winners }) {
  // Ordenar ganadores por puntuación de mayor a menor
  const sortedWinners = winners.sort((a, b) => b.score - a.score)

  // Seleccionar los tres primeros ganadores
  const podium = sortedWinners.slice(0, 3)


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      {podium?.map((winner, index) => (
        <PodiumStep key={winner.id} podium={podium} winner={{ ...winner, position: index }} />
      ))}

    </div>
  )
}
