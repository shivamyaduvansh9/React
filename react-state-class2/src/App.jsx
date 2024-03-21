import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";
import Form from "./Form";
import CommentForm from "./CommentForm";
import Counter from "./Counter";
import Joker from "./Joker";
import LudoBoard from "./LudoBoard";


function App() {
  let winCondition = (ticket) => {
      // return ticket.every((num) => num === ticket[0]);
    // return sum(ticket) === 15;
    return ticket[0] === 0;
  };

  return (
    <>
     <LudoBoard />
      {/* <Joker /> */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}
    </>
  )
}

export default App;
