import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Container fluid>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
      </Container>

    </Router>
  );
}

export default App;
