import DocumentTitle_mp from './components/My_project/DocumentTitle_mp'
import OnlineStatus_mp from './components/My_project/OnlineStatus_mp'
import WindowSize_mp from './components/My_project/WindowSize_mp'
import LiveClock_mp from './components/My_project/LiveClock_mp'
import SearchWithEffect_mp from './components/My_project/SearchWithEffect_mp'
import DebounceSearch_mp from './components/My_project/DebounceSearch_mp'
import FetchDueno_mp from './components/My_project/FetchDueno_mp'
import AutoFocusInput_mp from './components/My_project/AutoFocusInput_mp'

const PASO = 1

export default function App_mp() {
  const content =
    PASO === 1 ? <DocumentTitle_mp /> :
    PASO === 2 ? <OnlineStatus_mp /> :
    PASO === 3 ? <WindowSize_mp /> :
    PASO === 4 ? <LiveClock_mp /> :
    PASO === 5 ? <SearchWithEffect_mp /> :
    PASO === 6 ? <DebounceSearch_mp /> :
    PASO === 7 ? <FetchDueno_mp /> :
    PASO === 8 ? <AutoFocusInput_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h2>Clinica Veterinaria UTE</h2>
      {content}
    </main>
  )
}
