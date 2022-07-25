import './App.css';
import Header from './components/Header';
import PopupTask from './components/PopupTask';
import TaskBody from './components/TaskBody';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskBody />
      {/* <PopupTask /> */}
    </div>
  );
}

export default App;
