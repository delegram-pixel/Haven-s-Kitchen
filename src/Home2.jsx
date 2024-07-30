

import './App.css'
import { FindUs, Footer, Gallery, Header,  SpecialMenu } from '../src/container';
import NavbarII from './components/NavbarII/NavbarII';

function Home2() {
  return (
    <div>
      <NavbarII/>
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

export default Home2
