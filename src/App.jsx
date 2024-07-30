import './App.css'
import { FindUs, Footer, Gallery, Header,  SpecialMenu } from '../src/container';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <AboutUs /> */}
      <SpecialMenu />
      {/* <Chef />
      <Intro />
      <Laurels /> */}
      <Gallery />
      <FindUs />
      <Footer />
  </div>
  )
}

export default App
