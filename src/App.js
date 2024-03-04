import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_ACCESSTOKEN}
    </div>
  );
}

export default App;
