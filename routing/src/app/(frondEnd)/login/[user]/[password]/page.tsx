type Params = {
  user: string;
  password: string;
};

export default function Page(context: { params: Params }) {
  const user = context.params.user;
  const password = context.params.password;
  return <h1>Hola {user}</h1>;
}
