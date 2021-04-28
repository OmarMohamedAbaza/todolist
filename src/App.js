import logo from './logo.svg';
import './App.css';
import './Assets/Style.css'
import Header from './Components/Header';
import TodoList from './Views/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
