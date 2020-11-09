import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  //make a "Home" component in react router dom

  render() {
    return (
      <>
        <main className="container my-5">
          <h1 className="text-primary text-center">CHIRPR</h1>
          <div className="d-flex justify-content-center">
            <input type="text" />
            <textarea name="" id=""></textarea>
            <button type="button" className="btn btn-dark">
              Send
            </button>
          </div>
        </main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Details}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
