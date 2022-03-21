/* eslint-disable no-unused-vars */
class Man {
  constructor(firstName, lastName, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMouthOpen = 'no';
    this.profession = profession;
  }

  handleExternalMouthOpening(person) {
    if (person.profession === 'doctor') {
      this.isMouthOpen = 'yes';
      return `My mouth is open now Doctor ${person.lastName}!`;
    } else {
      return "I'm not opening my mouth, you're not a doctor";
    }
  }

  handleInternalMouthOpening() {
    if (this.isMouthOpen === 'no') {
      this.isMouthOpen = 'yes';
      return 'I opened my own mouth';
    }
    this.isMouthOpen = 'no';
    return 'I closed my own mouth';
  }
}

const newMan = new Man('John', 'Smith');
const newDoctor = new Man('Rick', 'Smith', 'doctor');
const randomGuy = new Man('Joe', 'Johnson', 'plumber');

// newMan.handleExternalMouthOpening(newDoctor);
// newMan.handleExternalMouthOpening(randomGuy);
// newMan.handleInternalMouthOpening();
// newMan.handleInternalMouthOpening();
