export const fetchProducts = async () =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/products`).then((res) =>
    res.json()
  );

export const fetchProductsByCategoryName = async (
  name: string,
  limit?: number,
  sort?: string,
  order?: string
) =>
  await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST_NAME}/products/category/${name}${
      limit ? "?limit=" + limit : "?limit=0"
    }${sort ? "&sortBy=" + sort : ""}${order ? "&order=" + order : ""}`
  ).then((res) => res.json());

export const fetchCategories = async () =>
  await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST_NAME}/products/categories`
  ).then((res) => res.json());

export const fetchProduct = async (id: string) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/products/${id}`).then(
    (res) => res.json()
  );

export const fetchSearchProducts = async (query: string) =>
  await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST_NAME}/products/search?q=${query}`
  ).then((res) => res.json());
