import "./App.css";
import Address from "./components/Profilee/Address";
import FullName from "./components/Profilee/FullName";
import ProfilePhoto from "./components/Profilee/ProfilePhoto";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Card className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </Card>
  );
}

export default App;
