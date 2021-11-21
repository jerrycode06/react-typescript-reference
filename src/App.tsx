import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Tony",
    last: "Stark",
  };

  const nameList = [
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Bruce",
      last: "Banner",
    },
    {
      first: "Thor",
      last: "Odinson",
    },
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greet name="Jerry" messageCount={69} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
