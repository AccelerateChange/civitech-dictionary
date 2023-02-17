Civitech Dictionary
This is a Node.js module for looking up online voter registration data by state.

Installation
bash
Copy code
npm install civitech-dictionary
Usage
js
Copy code
const civitech = require('civitech-dictionary');

// Get data by state abbreviation
const byState = civitech.getByState('CA');
console.log(byState);
// Output:
// [
//   {
//     state_long: 'California',
//     state: 'CA',
//     has_ovr: true,
//     state_ovr_url: 'https://registertovote.ca.gov/',
//     ovr_id_required: true
//   }
// ]

// Get data by state name
const byStateLong = civitech.getByStateLong('California');
console.log(byStateLong);
// Output:
// [
//   {
//     state_long: 'California',
//     state: 'CA',
//     has_ovr: true,
//     state_ovr_url: 'https://registertovote.ca.gov/',
//     ovr_id_required: true
//   }
// ]
API
getByState(state: string): object[]
Returns an array of objects containing the online voter registration data for the given state abbreviation.

state (string): The two-letter abbreviation for the state.
Returns an array of objects, where each object has the following fields:

state_long (string): The full name of the state.
state (string): The two-letter abbreviation of the state.
has_ovr (boolean): Whether the state offers online voter registration.
state_ovr_url (string): The URL of the state's online voter registration website.
ovr_id_required (boolean): Whether a state ID is required to complete the online voter registration process.
getByStateLong(stateLong: string): object[]
Returns an array of objects containing the online voter registration data for the given state name.

stateLong (string): The full name of the state.
Returns an array of objects, where each object has the following fields:

state_long (string): The full name of the state.
state (string): The two-letter abbreviation of the state.
has_ovr (boolean): Whether the state offers online voter registration.
state_ovr_url (string): The URL of the state's online voter registration website.
ovr_id_required (boolean): Whether a state ID is required to complete the online voter registration process.
License
MIT