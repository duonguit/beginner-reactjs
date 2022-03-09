import logo from './logo.svg';
import './App.css';
import ColorBoxFeature from './features/ColorBox';
import Counter from './components/Counter';
import TodoListFeature from './features/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wellcome to reacrjs for beginner.
        </p>

        <TodoListFeature></TodoListFeature>

        {/* <ColorBoxFeature /> */}

        {/* <Counter /> */}

      </header>
    </div>
  );
}

export default App;
