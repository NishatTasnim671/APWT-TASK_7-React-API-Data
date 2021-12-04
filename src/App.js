
import Head from './Components/Head';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import AllCategories from './Components/AllCategories';
import Categoryinfo from './Components/Categoryinfo';
function App() {
  return (
   <>
   <Router>
    <Head/>
    <Switch>

    <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/categorylist">
      <AllCategories/>
      </Route>
      <Route exact path="/category/:id">
      <Categoryinfo/>
      </Route>

    
      
  
    </Switch>

    <Foot/>
    </Router>
    

   </>
  );
}

export default App;