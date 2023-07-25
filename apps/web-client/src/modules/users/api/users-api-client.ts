import { User } from "../users.types";


const mockData = [{
  "name": "Pammie Ebbrell",
  "email": "pebbrell0@squarespace.com",
  "age": 1,
  "avatar": "https://picsum.photos/200?cache=1"
}, {
  "name": "Lanie Shurman",
  "email": "lshurman1@mlb.com",
  "age": 2,
  "avatar": "https://picsum.photos/200?cache=2"
}, {
  "name": "Doris Durrett",
  "email": "ddurrett2@privacy.gov.au",
  "age": 3,
  "avatar": "https://picsum.photos/200?cache=3"
}, {
  "name": "Jeanie Izakof",
  "email": "jizakof3@google.co.jp",
  "age": 4,
  "avatar": "https://picsum.photos/200?cache=4"
}, {
  "name": "Malva Trevan",
  "email": "mtrevan4@hud.gov",
  "age": 5,
  "avatar": "https://picsum.photos/200?cache=5"
}, {
  "name": "Halley Vlasyuk",
  "email": "hvlasyuk5@linkedin.com",
  "age": 6,
  "avatar": "https://picsum.photos/200?cache=6"
}, {
  "name": "Brena Cavozzi",
  "email": "bcavozzi6@discuz.net",
  "age": 7,
  "avatar": "https://picsum.photos/200?cache=7"
}, {
  "name": "Vin Markos",
  "email": "vmarkos7@house.gov",
  "age": 8,
  "avatar": "https://picsum.photos/200?cache=8"
}]



class UsersApiClient {
  constructor() {}

  public async getUsers(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000);
    });
  }
}

export default UsersApiClient;
