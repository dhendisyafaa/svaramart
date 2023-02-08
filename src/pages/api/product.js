// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const getAllProduct = () => {
  return fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    // .then((json) => console.log(json));
}

export const getProductDetail = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    // .then((json) => console.log(json));
}