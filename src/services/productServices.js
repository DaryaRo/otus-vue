export const getProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => data)
    .catch(err => {
      console.warn(err);
      return false;
    })
}