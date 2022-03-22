# Nelson David Daza Take-Home Assessment

# Question 1 Answer
```
select "code", "year", "govt_debt" / "gdp_per_capita" as average_government_debts
from "countries"
where "gdp_per_capita" > 40000.00 and "year" > 2014
order by average_government_debts desc
limit 3

```

# Question 2 Answer 
```
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
      if (this.isMouthOpen === 'yes') {
        this.isMouthOpen = 'no';
      }
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

```


# Question 3 Demo


https://user-images.githubusercontent.com/88061673/159384163-d248d5d9-92dd-4538-b355-4e8e72b95bce.mov





