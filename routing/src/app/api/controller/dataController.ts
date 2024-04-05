import fs from "fs";
import { User } from "@/app/api/model/user";

const filePath: string = "./src/data.json";
const data = fs.readFileSync(filePath, "utf-8");
const jsonData = JSON.parse(data);

const array: User[] = jsonData as User[];

export function getUserByNamePassword(name: string, password: string): User | undefined{
  let index = array.findIndex((user) => user.name.toUpperCase() === name.toUpperCase() && user.password === password);
  if (index !== -1) {
    return array[index];
  }
  return undefined;
}

export function deleteUser(id: number): boolean {
  let index = array.findIndex((user) => user.id === id);
  if (index !== -1) {
    array.splice(index, 1);
    saveData();
    return true;
  }
  return false;
}

export function getUser(id: number): User | undefined {
  let index = array.findIndex((user) => user.id === id);
  if (index !== -1) {
    return array[index];
  }
  return undefined;
}

export function getUsers(): User[] | undefined {
    return array;
}

export function saveUser(newUser: User): User | undefined {
  if (newUser.id === 0) {
    newUser.id = getMaxId() + 1;
    array.push(newUser);
  } else {
    let index = array.findIndex((user) => user.id === newUser.id);
    array[index] = newUser;
  }
  saveData();
  return newUser;
}

function getMaxId(): number {
  let maxId = 0;
  array.forEach((user) => {
    if (user.id > maxId) {
      maxId = user.id;
    }
  });
  return maxId;
}

function saveData() {
  fs.writeFileSync(filePath, JSON.stringify(array), "utf-8");
}
