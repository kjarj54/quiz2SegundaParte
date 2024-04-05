export class User {
  id: number;
  name: string;
  password: string;
  lastname: string;
  privacy: string;
  role: string;
  gender: string;
  place_of_residence: string;
  birthdate: Date | string;

  constructor(
    id: number,
    name: string,
    password: string,
    lastname: string,
    privacy: string,
    role: string,
    gender: string,
    place_of_residence: string,
    birthdate: Date | string
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.lastname = lastname;
    this.privacy = privacy;
    this.role = role;
    this.gender = gender;
    this.place_of_residence = place_of_residence;
    this.birthdate = birthdate;
  }
}
