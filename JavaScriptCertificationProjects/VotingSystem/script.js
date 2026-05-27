// Initialize poll as a Map
const poll = new Map();

// Function to add options
function addOption(option) {
  // Check for empty option
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  // Check if option already exists
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  // Add option with an empty Set
  poll.set(option, new Set());

  return `Option "${option}" added to the poll.`;
}

// Function to vote
function vote(option, voterId) {
  // Check if option exists
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  // Check duplicate vote
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  // Add voter to Set
  voters.add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

// Function to display results
function displayResults() {
  let results = "Poll Results:\n";

  for (const [option, voters] of poll.entries()) {
    results += `${option}: ${voters.size} votes\n`;
  }

  return results.trim();
}

// Add at least three options
console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Spain"));

// Additional options for testing
console.log(addOption("Malaysia"));
console.log(addOption("Algeria"));

// At least three votes
console.log(vote("Turkey", "traveler1"));
console.log(vote("Turkey", "traveler2"));
console.log(vote("Morocco", "traveler3"));

// Additional test cases
console.log(vote("Malaysia", "traveler1"));
console.log(vote("Algeria", "traveler1"));
console.log(vote("Algeria", "traveler1")); // Duplicate vote
console.log(vote("Nigeria", "traveler2")); // Invalid option

// Display results
console.log(displayResults());

/*
Expected Output Example:

Option "Turkey" added to the poll.
Option "Morocco" added to the poll.
Option "Spain" added to the poll.

Voter traveler1 voted for "Turkey".
Voter traveler2 voted for "Turkey".
Voter traveler3 voted for "Morocco".

Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
Malaysia: 1 votes
Algeria: 1 votes
*/
