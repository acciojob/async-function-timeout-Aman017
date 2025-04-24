//your JS code here. If required.
// Function to simulate a delay
function delayFor(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the message display after delay
async function showMessageAfterDelay() {
  const textInput = document.getElementById('text').value;
  const delayInput = parseInt(document.getElementById('delay').value, 10);
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.textContent = "";

  if (isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Please enter a valid delay in milliseconds.";
    return;
  }

  // Wait for the specified delay
  await delayFor(delayInput);

  // Display the message
  outputDiv.textContent = textInput;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default form submission
  showMessageAfterDelay();
});
