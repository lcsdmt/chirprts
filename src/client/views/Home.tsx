import { Router } from "express";
import * as React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      chirps: [],
    };
  }

  componentDidMount() {
    fetch("/api/chirps")
      .then((res) => res.json())
      .then((chirps) => this.setState({ chirps }));
  }

  render() {
    return this.state.chirps.map((chirp) => {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{chirp.name}</h5>
            <p className="card-text">{chirp.text}</p>
            <Link to={`/details/${chirp.id}`}>
              <button>Admin Options</button>
            </Link>
          </div>
        </div>
      );
    });
  }
}

export default Home;

interface HomeProps {}

interface HomeState {
  chirps: Array<IChirp>;
}

interface IChirp {
  id: string;
  name: string;
  text: string;
}
