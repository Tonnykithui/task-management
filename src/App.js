import './App.css';
import Header from './components/Header';
import PopupTask from './components/PopupTask';
import TaskBody from './components/TaskBody';
import { useSelector } from 'react-redux';

function App() {

  const showModal = useSelector(state => state.showModalReducer.show)
  return (
    <div className="App">
      <Header />
      <TaskBody />
      {
        showModal ? (
          <PopupTask />
        ) : ''
      }
    </div>
  );
}

export default App;
