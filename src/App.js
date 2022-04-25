
import './index.css';
import Todo from "./components/Todo"
function App() {
  
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title = {"Learn React"}/>
      <Todo title = {"Be good"}/>
      <Todo title = {"Master react"}/>
    </div>
  );
}

export default App;
