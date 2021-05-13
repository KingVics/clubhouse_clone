import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//layout
import PlanLayout from "./pages/layout/planLayout";
import AppLayout from "./pages/layout/appLayout";
// layout end //

// PAGES
import PhoneConfim from "./pages/phoneConfirm";
import Welcome from "./pages/welcome"
import CodeConfirm from "./pages/codeConfirm";
import AllowNotification from "./pages/allowNotification";
import Home from "./pages/home"
import Explore from "./pages/explore"
import Profile from "./pages/profile"
//PAGES ENDS

// CSS
import './App.css';

//CSS ENDS

function App() {
  return (
    <Router>
      <Route 
        exact
        path={[
          "/",
          "/invite",
          "/allow_notification",
          "/get_username",
          "/code_confirm"
        ]} 
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfim} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route exact path="/allow_notification" component={AllowNotification}/>
          </Switch>
        </PlanLayout>
      </Route>
      <Route 
        exact
        path={[
          "/home", 
          "/explore",
          "/profile"
        ]}
      >
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/explore" component={() => <Explore />} />
            <Route exact path="/profile" component={() => <Profile />} />
          </Switch>
        </AppLayout>
      </Route>
    </Router>
    
  
  );
}

export default App;
