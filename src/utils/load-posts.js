export const loadPosts = async () => {
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

    return postsAndPhotos
}