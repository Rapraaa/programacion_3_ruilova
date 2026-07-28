import AutoFocusForm_mp from './components/My_project/AutoFocusForm_mp'
import Stopwatch_mp from './components/My_project/Stopwatch_mp'
import InlineEditor_mp from './components/My_project/InlineEditor_mp'
import PreviousValue_mp from './components/My_project/PreviousValue_mp'

const PASO = 1

export default function App_mp() {
  const content =
    PASO === 1 ? <AutoFocusForm_mp /> :
    PASO === 2 ? <Stopwatch_mp /> :
    PASO === 3 ? <InlineEditor_mp /> :
    PASO === 4 ? <PreviousValue_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2>Clinica Veterinaria UTE</h2>
      {content}
    </main>
  )
}
