export const fetchGetCart = async (user: string) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/carts/${user}`).then(
    (res) => res.json()
  );
export const fetchGetCartsByUser = async (user: string) =>
  await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST_NAME}/users/${user}/carts`
  ).then((res) => res.json());

export const fetchSaveCart = async (user: string, products: Array<Object>) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/carts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user,
      products: products,
    }),
  }).then((res) => res.json());

export const fetchUpdateCart = async (cart: string, products: Array<Object>) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/carts/${cart}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge: false,
      products: products,
    }),
  }).then((res) => res.json());
