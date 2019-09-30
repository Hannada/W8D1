import React from "react";
import GreetingContainer from "./greeeting_container";


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
  </div>
);

class Greeting extends React.Component {

  render() {
    return (
      <div>
        <Link></Link>
        <Link></Link>
      </div>
    )
  }
}

export default Greeting; 