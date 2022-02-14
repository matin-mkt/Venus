import './App.css';
import Content from './components/Content';
import Leftbar from './components/Leftbar';
function App() {
  return (
    <div className="body">
      <div className="left">
      <Leftbar/>
      </div>
      <div className="right">
      <Content/>
      </div>
    </div>
  );
}

export default App;
