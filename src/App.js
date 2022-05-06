import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Approuter from "./router/Approuter";

function App() {
  return (
    <div className="App">
      <p>çalışıyor</p>
      <AuthContextProvider>
        <Approuter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
