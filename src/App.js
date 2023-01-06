import "./App.css";
import Calculator from "./components/Calculator";
import StudentSelectResult from "./components/StudentSelectResult";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Calculator></Calculator>
      <StudentSelectResult></StudentSelectResult>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </>
  );
}

export default App;
