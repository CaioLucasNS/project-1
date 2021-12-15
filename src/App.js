import { Component } from "react";
import './App.css';
class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Título 1",
        body: "Corpo 1",
      },
      {
        id: 2,
        title: "Título 2",
        body: "Corpo 2",
      },
      {
        id: 3,
        title: "Título 3",
        body: "Corpo 3",
      },
    ],
  };

  timeoutUpdate = null;

  // componentDidMount => é chamado 1x assim que o component é montado na tela
  componentDidMount() {
    this.handleTimeout();
  };

  // componentDidUpdate(prevProps, prevState, snapshot) =>
  // prevProps: propriedade anterior, prevState: estado anterior
  // snapshot: qdo usamos uma outro lifecycle method
  componentDidUpdate() {
    this.handleTimeout();
  };

  // componentWillUnmount() => é chamado quando o component for ser desmontado
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  };

  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = 'O título 1 mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 2000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
