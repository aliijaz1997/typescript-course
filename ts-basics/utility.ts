interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 2,
      email: "dontemail@dontemail.com",
    },
    {
      email: "dontemailbaz@dontemail.com",
    }
  )
);
// Required removes the optional type if any
type RequiredMyUser = Required<MyUser>;
// Pick allows us to select the required types from a type
type JustEmailAndName = Pick<MyUser, "email" | "name">;
// Opposite of pick
type UserWithoutID = Omit<MyUser, "id">;
