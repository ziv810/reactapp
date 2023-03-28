import './App.css';
import {HashRouter,Route,Routes} from 'react-router-dom'
import page1 from './components/Page1';
import page2 from './components/Page2';
import Menu from './components/Menu';

function App() {




  return (
    <div className="App">
      
      <HashRouter>
      <Menu />
      <Routes>

      <Route path='page1' element={page1} />
      <Route path='page2' element={page2} />

      </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
