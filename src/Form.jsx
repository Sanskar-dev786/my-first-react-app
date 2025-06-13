function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form>
      <input placeholder="write someting"></input>
      <button onClick={handleFormSubmit}>Click Me!</button>
    </form>
  );
}
