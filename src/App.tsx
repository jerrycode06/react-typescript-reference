import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";

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
      <Status status="loading" />
      <Heading>I am Iron Man</Heading>
      <Oscar>
        <Heading>Oscar goes to Joaquin Phoenix 👏👏👏</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default App;
