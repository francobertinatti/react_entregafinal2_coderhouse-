import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainers";

function App() {
  return (
    <>
      <NavBar />;
      <ItemListContainer greeting={"Productos"} />
    </>
  );
}

export default App;
