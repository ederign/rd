const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston MA', 
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Z',
    age: 26,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Cambridge MA', 
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  }, {
    name: 'William X',
    age: 49,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston MA', 
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.lenght ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}

