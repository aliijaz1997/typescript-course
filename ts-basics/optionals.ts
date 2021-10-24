function studentInfo(rollno: string, name: string, extra?: string) {
  console.log(`${rollno} ${name} ${extra ? ` ${extra}` : ""}`);
}

studentInfo("17095667", "HIfz ur Rehman Ali");
studentInfo("8988767", "Lorum", "Bachelo in science");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailWithoutUsingIf(user: User): string {
  return user?.info?.email ?? "";
}

console.log(
  getEmailWithoutUsingIf({ id: "khjkh", info: { email: "lorum@lorum.com" } })
);
