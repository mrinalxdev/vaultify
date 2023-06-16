import './App.css';

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form className="head">
        <div className='basics'>
          <input type="text" placeholder='+200 new Sony Tv' />
          <input type="datetime-local" />
        </div>
        <div className='description'>
          <input type="text" placeholder='description' />
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
