export let T = [
  { id: 1, scoreOne: 0, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 2, scoreOne: 1, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 3, scoreOne: 6, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
];

export let teams = [
  {
    id: 1,
    name: "atletitco",
    img: "assets/images/logo_3.png",
    stadium: "wanda",
    owner: "salah",
  },
  {
    id: 2,
    name: "juve",
    img: "assets/images/logo_4.png",
    stadium: "jvuv",
    owner: "salah",
  },
  {
    id: 3,
    name: "real",
    img: "assets/images/logo_2.png",
    stadium: "santiago",
    owner: "salah",
  },
];

export let players = [
  { id: 1, name: "salah", age: 23, position: "fcb" },
  { id: 2, name: "karim", age: 23, position: "fcb" },
  { id: 3, name: "karim", age: 23, position: "fcb" },
  { id: 4, name: "ahmed", age: 25, position: "fcb" },
];
export let stadiums = [
  { id: 1, name: "wanda", capacity: "obohiou", country: "koop^m" },
  { id: 2, name: "santiago", capacity: "obohiou", country: "koop^m" },
  { id: 3, name: "campnow", capacity: "obohiou", country: "koop^m" },
  { id: 4, name: "sidi rzig", capacity: "obohiou", country: "koop^m" },
];
// decodage
import jwt_decode from "jwt-decode";
export function decodeToken(token: string) {
  return jwt_decode(token);
}
