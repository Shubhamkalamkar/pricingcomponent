import "./App.css";

function App() {
  return (
    <div className="app">
    <div className="container">
      <div className="item1">
        <div className="wrap1">
        <h3 className="item1item1">Join our community</h3>
        <h4 className="item1item2">30-day, hassle-free money back guarantee</h4>
        <h5 className="item1item3">Gain access to our full library of tutorials along with expert code reviews.</h5>
        <h5 className="item1item4 item1item3">Perfect for any developers who are serious about honing their skills</h5>
        </div>
      </div>
      <div className="item2">
        <div className="wrap2">
        <h4 className="item2item1">Monthly Subscription</h4>
        <h4 className="item2item2"><span className="price">$29 </span> <span className="permonth"> per month</span></h4>
        <h5 className="item2item3">Full access for less than $1 a day</h5>
        <button className="button item2item4">Sign Up</button>
        </div>  
      </div>
      <div className="item3">
        <h4>Why Us</h4>
        <ul style={{ listStyleType: "none" }} className="ulItem" >
          <li>tutorials by industry experts</li>
          <li>peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
export default App;
