import './App.scss';
import AddnewProduct from "./components/AddnewProduct";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className="App">
			<TodoList/>
			<AddnewProduct />
		</div>
	);
}

export default App;
