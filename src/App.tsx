import './styles/styles.scss'
import Card from './components/Card'
import video from './assets/Lights.mp4'

function App() {
  return (
    <div className="app">
      <Card/>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default App
