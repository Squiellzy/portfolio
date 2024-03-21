import { NavMenu } from './component/NavMenu';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects'
import { Footer } from './component/Footer';
import { About } from './component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Banner />
      <About/>
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
