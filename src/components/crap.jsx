function Crap() {
  const [search, setSearch] = useState("");
  function changed(e) {
    const userInput = e.target.value;
    setSearch(userInput);
  }
  const [thePerson, setThePerson] = useState([]);
  setThePerson(
    contacts.map((people) => {
      return [people];
    })
  );
  console.log(thePerson);
  function check(e) {
    e.preventDefault();
    const searchContact = e.target.getAttribute("personName");
    thePerson.filter((one) => {
      return one.name === searchContact;
    });
  }
  return (
    <div>
      <input
        type="text"
        onChange={changed}
        value={search}
        placeholder="enter contact name"
      />
      <button onClick={check} personName={search}>
        Check
      </button>
      <p>
        {thePerson.map((searched) => {
          return (
            <div>
              <p>{searched.name}</p>
              <p>{searched.villa}</p>
              <p>{searched.tel}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
