// Log current storage on page load
console.log(sessionStorage);

// Set variables
let selectionA = document.querySelector('#a');
let selectionB = document.querySelector('#b');
let selectionC = document.querySelector('#c');
let selectionD = document.querySelector('#d');
let selectionE = document.querySelector('#e');
let selectionF = document.querySelector('#f');


// Get stored data
let clickData = sessionStorage.getItem("clickData");


// Function to record the click and add to existing stored data
let updateClickCount = (selection) => {

    // Get the current count from storage or start it at 0 if it's not set
    let currentCount = parseInt(sessionStorage.getItem(selection.id)) || 0;
    currentCount++;
    
    // Store count    
    sessionStorage.setItem(selection.id, currentCount);
  }

// Event Listeners
selectionA.addEventListener('click', () => updateClickCount(selectionA));
selectionB.addEventListener('click', () => updateClickCount(selectionB));
selectionC.addEventListener('click', () => updateClickCount(selectionC));
selectionD.addEventListener('click', () => updateClickCount(selectionD));
selectionE.addEventListener('click', () => updateClickCount(selectionE));
selectionF.addEventListener('click', () => updateClickCount(selectionF));