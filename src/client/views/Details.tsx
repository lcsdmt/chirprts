import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

//same exact code as Home except the fetch request url will be `/api/chirps/${this.props.match.params()}`}
//the empty state object property should be an empty object instead of an empty array
//set state (chirp) in a .then() after the fetch is made

export default class Details extends React.Component<
  DetailsProps,
  DetailsState
> {
  constructor(props: DetailsProps) {
    super(props);
    this.state = {
      chirp: {
        name: "",
        text: "",
      },
      newName: "",
      newText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`/api/chirps/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((chirp) => this.setState({ chirp }));
  }

  async handleSubmit() {
    // fetch PUT req for editting chirp. Passing the ID and the body for edit
    const data = {
        name: this.state.newName,
        text: this.state.newText
    }

    await fetch(`/api/chirps/${this.props.match.params.id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <input className="card-title" value={this.state.chirp.name}></input>
          <p className="card-text">{this.state.chirp.text}</p>
        </div>
      </div>
    );
  }
}

interface DetailsProps extends RouteComponentProps<{ id: string }> {}

interface DetailsState {
  chirp: {
    name: string;
    text: string;
  },
  newName: string,
  newText: string
}
