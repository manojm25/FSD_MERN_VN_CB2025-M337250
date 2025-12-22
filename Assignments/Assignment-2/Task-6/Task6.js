let totalSeats = 120;
let bookedSeats = 78;

// Calculate available seats
let availableSeats = totalSeats - bookedSeats;

let status;

// Check availability status
if (availableSeats < 20) {
  status = "Almost Full";
} else if (availableSeats >= 20 && availableSeats <= 60) {
  status = "Moderate Availability";
} else {
  status = "Plenty of Seats Available";
}

// Print results
console.log("Seats left:", availableSeats);
console.log("Status:", status);
