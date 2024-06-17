export const fetchLoginUser = async (username: string, password: string) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30,
    }),
  }).then((res) => res.json());

export const fetchGetAuth = async (token: string) =>
  await /* providing token in bearer */
  fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const fetchAddUser = async (
  username: string,
  email: string,
  password: string
) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST_NAME}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  }).then((res) => res.json());
