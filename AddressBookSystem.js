console.log("Welcome to the Address book Problem");
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
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
  
  // Creating an AddressBook instance
  const addressBook = new AddressBook();
  
  // Adding contacts
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
  addressBook.addContact(contact1);
  
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
  addressBook.addContact(contact2);
  
  // Displaying contacts
  addressBook.displayContacts();
  