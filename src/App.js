import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/* Define route for Detailedforecast.js */}
        <Route path="/detailed-forecast/:weatherId" component={Detailedforecast} />
        {/* Other routes */}
      </Switch>
    </Router>
  );

  
}

export default App;
