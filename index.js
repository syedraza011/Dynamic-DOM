//alert("hello");

const arr = [
  {
    id: 1,
    first_name: "Glenn",
    last_name: "Tatlowe",
    email: "gtatlowe0@bing.com",
    gender: "Bigender",
  },
  {
    id: 2,
    first_name: "Julio",
    last_name: "Leyban",
    email: "jleyban1@skyrock.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Roselia",
    last_name: "Duxbarry",
    email: "rduxbarry2@webnode.com",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Hedvige",
    last_name: "De Gregoli",
    email: "hdegregoli3@jugem.jp",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Jean",
    last_name: "Yellep",
    email: "jyellep4@cdc.gov",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "April",
    last_name: "Weatherhead",
    email: "aweatherhead5@opensource.org",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Arabel",
    last_name: "Davy",
    email: "adavy6@phoca.cz",
    gender: "Female",
  },
  {
    id: 8,
    first_name: "Cassi",
    last_name: "Jinkins",
    email: "cjinkins7@npr.org",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Coralyn",
    last_name: "Penelli",
    email: "cpenelli8@columbia.edu",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Jayson",
    last_name: "Schwandner",
    email: "jschwandner9@ocn.ne.jp",
    gender: "Male",
  },
];

// DOM Map example
const body = document.querySelector('body');

// make a function that makes the HTML for the people to be displayed
const CardMaker = (user) => {
    // make the pieces of HTML
    const container = document.createElement('div');
    const fname = document.createElement('h3');
    const lname = document.createElement('h3');
    const email = document.createElement('p');
    const gender = document.createElement('p');

    // add content to them
    fname.innerText = user.first_name;
    lname.innerText = user.last_name;
    email.innerText = user.email;
    gender.innerText = user.gender;

    // combine them
    container.append(fname, lname, email, gender);
    // container.append(lname);
    // container.append(email);
    // container.append(gender);
    console.log(container);

    // return
    return container;
}

// run that function x times for the array
arr.map((element) => {
    const card = CardMaker(element);
    body.append(card);
});
