// CSS
import styles from './App.module.css';

// components
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <main className={styles.main}>
        Conteúdo
      </main>
      <Footer />
    </div>
  )
}

export default App
