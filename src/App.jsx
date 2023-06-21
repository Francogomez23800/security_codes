import ContextProvider from "./Context/Context";
import ClassState from "./Components/ClassState";
import UseState from "./Components/UseState";

const App = () => (
  <ContextProvider>
    <ClassState />
    <UseState />
  </ContextProvider>
);

export default App;