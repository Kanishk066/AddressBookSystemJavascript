class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.setFirstName(firstName);
      this.setLastName(lastName);
      this.setAddress(address);
      this.setCity(city);
      this.setState(state);
      this.setZip(zip);
      this.setPhoneNumber(phoneNumber);
      this.setEmail(email);
    }

    setFirstName(firstName) {
        this.firstName = firstName;
      }
    
      setLastName(lastName) {
        this.lastName = lastName;
      }
    
      setAddress(address) {
        this.address = address;
      }
    
      setCity(city) {
        this.city = city;
      }
    
      setState(state) {
        this.state = state;
      }
    
      setZip(zip) {
        this.zip = zip;
      }
    
      setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
      }
    
      setEmail(email) {
        this.email = email;
      }
    
      // Getter methods for contact properties
      getFirstName() {
        return this.firstName;
      }
    
      getLastName() {
        return this.lastName;
      }
    
      getAddress() {
        return this.address;
      }
    
      getCity() {
        return this.city;
      }
    
      getState() {
        return this.state;
      }
    
      getZip() {
        return this.zip;
      }
    
      getPhoneNumber() {
        return this.phoneNumber;
      }
    
      getEmail() {
        return this.email;
      }
    
      toString() {
        return `${this.firstName} ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZip: ${this.zip}\nPhone: ${this.phoneNumber}\nEmail: ${this.email}\n`;
      }
  
    setFirstName(firstName) {
      const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
      if (nameRegex.test(firstName)) {
        this.firstName = firstName;
      } else {
        throw new Error("Invalid first name. First name should start with a capital letter and have at least 3 characters.");
      }
    }
  
    setLastName(lastName) {
      const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
      if (nameRegex.test(lastName)) {
        this.lastName = lastName;
      } else {
        throw new Error("Invalid last name. Last name should start with a capital letter and have at least 3 characters.");
      }
    }
  
    setAddress(address) {
      if (address.length >= 4) {
        this.address = address;
      } else {
        throw new Error("Invalid address. Address should have at least 4 characters.");
      }
    }
  
    setCity(city) {
      if (city.length >= 4) {
        this.city = city;
      } else {
        throw new Error("Invalid city. City should have at least 4 characters.");
      }
    }
  
    setState(state) {
      if (state.length >= 4) {
        this.state = state;
      } else {
        throw new Error("Invalid state. State should have at least 4 characters.");
      }
    }
  
    setZip(zip) {
      const zipRegex = /^\d{6}$/;
      if (zipRegex.test(zip)) {
        this.zip = zip;
      } else {
        throw new Error("Invalid ZIP code. ZIP code should be a 6-digit number.");
      }
    }
  
    setPhoneNumber(phoneNumber) {
      const phoneRegex = /^[1-9]\d{9}$/;
      if (phoneRegex.test(phoneNumber)) {
        this.phoneNumber = phoneNumber;
      } else {
        throw new Error("Invalid phone number. Phone number should be a 10-digit number.");
      }
    }
  
    setEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(email)) {
        this.email = email;
      } else {
        throw new Error("Invalid email address.");
      }
    }
  }
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    displayContacts() {
      console.log("Address Book Contacts:");
      for (let contact of this.contacts) {
        console.log("-------------------------------");
        console.log("Name: " + contact.firstName + " " + contact.lastName);
        console.log("Address: " + contact.address);
        console.log("City: " + contact.city);
        console.log("State: " + contact.state);
        console.log("Zip: " + contact.zip);
        console.log("Phone Number: " + contact.phoneNumber);
        console.log("Email: " + contact.email);
        console.log("-------------------------------");
      }
    }
  }
  
  // Creating a new Address Book array
  const addressBooks = [];
  
  // Adding contacts to the first Address Book
  const addressBook1 = new AddressBook();
  try {
    const contact1 = new Contact(
      "John",
      "Doe",
      "123 Main St",
      "New York",
      "NY",
      "12345",
      "1234567890",
      "john.doe@example.com"
    );
    addressBook1.addContact(contact1);
  
    const contact2 = new Contact(
      "Jane",
      "Smith",
      "456 Elm St",
      "Los Angeles",
      "CA",
      "98765",
      "9876543210",
      "jane.smith@example.com"
    );
    addressBook1.addContact(contact2);
  
    // Adding addressBook1 to the addressBooks array
    addressBooks.push(addressBook1);
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Adding contacts to the second Address Book
  const addressBook2 = new AddressBook();
  try {
    const contact3 = new Contact(
      "Alice",
      "Johnson",
      "789 Oak St",
      "Chicago",
      "IL",
      "54321",
      "9876543210",
      "alice.johnson@example.com"
    );
    addressBook2.addContact(contact3);
  
    // Adding addressBook2 to the addressBooks array
    addressBooks.push(addressBook2);
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Displaying all contacts in each Address Book
  for (let i = 0; i < addressBooks.length; i++) {
    console.log("Address Book " + (i + 1) + ":");
    addressBooks[i].displayContacts();
  }
  
  