// Function to simulate a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to show the message after the delay
async function handleSubmit() {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const output = document.getElementById("output");

  // Clear previous output
  output.textContent = "";

  // Validation check
  if (!text) {
    output.textContent = "Please enter a message.";
    return;
  }

  if (isNaN(delay) || delay < 0) {
    output.textContent = "Please enter a valid positive delay in milliseconds.";
    return;
  }

  // Wait for the delay
  await wait(delay);

  // Display the message
  output.textContent = text;
}

// Add click event to the submit button
document.getElementById("btn").addEventListener("click", handleSubmit);
