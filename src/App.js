
import './App.css';
import cards from './cards'
import Header from './layout/Header'
import Main from './layout/Main'
console.log(Main)

function App() {
  return (
    <div className="App">
      <Header />
      <Main cards={cards} />
    </div>
  );
}

export default App;
