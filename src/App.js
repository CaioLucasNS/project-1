import { Component } from "react";
import './App.css';
class App extends Component {
  state = {
    counter: 0,
    posts: []
  };

  // componentDidMount => é chamado 1x assim que o component é montado na tela
  componentDidMount() {
    this.loadPosts();
  };
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    // no Promise.all é passado um array de Promises.
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json(); // convertendo pra json
    const photosJson = await photos.json(); // convertendo pra json

    // uma foto para cada post
    // unir 2 arrays pelo menor array com zip 
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    console.log('posts:', posts)

    return (
      <section className="container">
        <div className="posts">

          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    );
  }
}

export default App;
