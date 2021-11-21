type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hello {props.name}!! How you doin??</h2>
    </div>
  );
}
