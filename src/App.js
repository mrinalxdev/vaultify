import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction(event) {
    event.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, description, datetime }),
    }).then(response => {
      response.json().then(json => {
        console.log('result', json)
      })
    });
  }

  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form className="head" onSubmit={addNewTransaction}>
        <div className="basics">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="+200 new Sony Tv"
          />
          <input
            value={datetime}
            onChange={(event) => setDatetime(event.target.value)}
            type="datetime-local"
          />
        </div>
        <div
          className="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        >
          <input type="text" placeholder="description" />
        </div>
        <button>Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Jwellery for Mom</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-12-18 15:23</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">A new Gig for the website development</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2023-12-18 15:23</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Reliance Stock Investment Return</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2023-12-18 15:23</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Iphone</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-12-18 15:23</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
