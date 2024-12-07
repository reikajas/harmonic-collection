// Log current storage on page load
console.log(sessionStorage);

// Set variables
let selectionA = document.querySelector('#a');
let selectionB = document.querySelector('#b');
let selectionC = document.querySelector('#c');
let selectionD = document.querySelector('#d');
let selectionE = document.querySelector('#e');
let selectionF = document.querySelector('#f');

let resultTitle = document.querySelector('.result-title');
let resultImage = document.querySelector('img');
let resultText = document.querySelector('.result-text');

console.log(window.location.pathname);

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
if (selectionA) {
  selectionA.addEventListener('click', () => updateClickCount(selectionA));
}
if (selectionB) {
  selectionB.addEventListener('click', () => updateClickCount(selectionB));
}
if (selectionC) {
  selectionC.addEventListener('click', () => updateClickCount(selectionC));
}
if (selectionD) {
  selectionD.addEventListener('click', () => updateClickCount(selectionD));
}
if (selectionE) {
  selectionE.addEventListener('click', () => updateClickCount(selectionE));
}
if (selectionF) {
  selectionF.addEventListener('click', () => updateClickCount(selectionF));
}

// Result Calculation
let getResult = () => {

  let a = parseInt(sessionStorage.a) || 0;
  let b = parseInt(sessionStorage.b) || 0; 
  let c = parseInt(sessionStorage.c) || 0; 
  let d = parseInt(sessionStorage.d) || 0; 
  let e = parseInt(sessionStorage.e) || 0; 
  let f = parseInt(sessionStorage.f) || 0; 

  let max = Math.max (a, b, c, d, e, f);
  
  let maxids = [];

  if(a === max) {maxids.push('a')};
  if(b === max) {maxids.push('b')};
  if(c === max) {maxids.push('c')};
  if(d === max) {maxids.push('d')};
  if(e === max) {maxids.push('e')};
  if(f === max) {maxids.push('f')};
  console.log(maxids);
  return maxids;

}

if (window.location.pathname === '/entry-8/') {

  let maxids = getResult();

  if(maxids.includes('a')) {
    resultTitle.innerHTML = "Mostly A's: Butter";
    resultImage.src = "/entry-8/butter.png";
    resultText.innerHTML = "just like a spoonful of warm melted butter, you provide comfort and richness<br>to whatever setting you're in. you're loyal and dedicated to your loved ones,<br>so much so that it overflows from your body, unable to be contained. you care deeply<br>for others needs, which is respectable, but don't forget to tend to your own needs.";
  } else if (maxids.includes('b')) {
    resultTitle.innerHTML = "Mostly B's: Parsley";
    resultImage.src = "/entry-8/parsley.png";
    resultText.innerHTML = "just like parsley, you're a wild child who yearns to be one with nature. every<br>breeze is a song, every rain is a blessing. you feel deeply but struggle to let<br>those around you know. you're a kid at heart and that shows in how you love to<br>be cared for and the way you'll never reject an opportunity for some mischief.<br>people may not take you seriously because of this, but you just want someone to<br>see you as you are.";
  } else if (maxids.includes('c')) {
    resultTitle.innerHTML = "Mostly C's: Rug";
    resultImage.src = "/entry-8/rug.png";
    resultText.innerHTML = "just like a soft rug, people come to you when they need a comforting and fluffy hug.<br>you make any space more approachable just with your presence. you relish in<br>the feeling of being wanted by others and always have open arms when they<br>need a good cry. but when’s the last time someone’s provided that for you?";
  } else if (maxids.includes('d')) {
    resultTitle.innerHTML = "Mostly D's: Enini";
    resultImage.src = "/entry-8/enini.png";
    resultText.innerHTML = "like enini, you’re an enigma. you’re the epitome of an only child and your unpredictable<br>whims are so frequent people start to predict them. you love being understood<br>when you share your passions with others. maybe you envy people who aren’t so<br>affected by minor inconveniences as you are, though? wonder what it’s like to<br>be someone who didn’t always get their way?";
  } else if (maxids.includes('e')) {
    resultTitle.innerHTML = "Mostly E's: Hoshi";
    resultImage.src = "/entry-8/hoshi.png";
    resultText.innerHTML = "like hoshi, you’re the star of the show. your aura is undeniable, and you make<br>heads turn when you walk into a room, both from your outrageous self-presentation<br>and your equally outrageous statements. is it rude to say that you would probably<br>be a cult leader in another life?";
  } else if (maxids.includes('f')) {
    resultTitle.innerHTML = "Mostly F's: Joy";
    resultImage.src = "/entry-8/joy.png";
    resultText.innerHTML = "like joy, you’re the embodiment of childhood happiness. you love and cherish<br>the relationships you’ve built with people but find it hard to ever be satisfied<br>with what you have. it’s not your fault though - it’s difficult to be carefree when<br>you’ve been forced to grow up early. it’s okay to chase what you missed<br>out on, but don’t let it overtake you.";
  }
}
