window.onload = function() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = "Welcome to the FLAMES game! Please enter two names to start.";

    // Add event listener for form submission
    document.getElementById('flamesForm').addEventListener('submit', function(event) {
        // Prevent the form from being submitted normally
        event.preventDefault();
        // Call the calculateFLAMES function
        calculateFLAMES();
    });

    // Add event listener for Enter key press
    document.getElementById('person1').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateFLAMES();
        }
    });
    document.getElementById('person2').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateFLAMES();
        }
    });
}

// ... rest of the calculateFLAMES function ...

// ... rest of the calculateFLAMES function ...

// ... rest of the calculateFLAMES function ...


function calculateFLAMES() {
    const person1 = document.getElementById('person1').value.toLowerCase().trim();
    const person2 = document.getElementById('person2').value.toLowerCase().trim();
    const resultElement = document.getElementById('result');

    if (!person1 || !person2) {
        resultElement.textContent = "Please enter both names.";
        return false;
    }

    if (!/^[a-z]+$/i.test(person1) || !/^[a-z]+$/i.test(person2)) {
        resultElement.textContent = "Names should only contain alphabets. Please avoid numbers or special characters.";
        return false;
    }

    let combinedName = [...person1, ...person2];
    combinedName = combinedName.filter((char, index) => combinedName.indexOf(char) === index);

    let count = 0;
    combinedName.forEach(char => {
        if (person1.includes(char) && person2.includes(char)) {
            count += 2;
        }
    });

    const remainingLetters = person1.length + person2.length - count;
   const flames = ['🤪Friendship', '❤️Love', '🩷Affection', '😍Marriage', '☠Enemy', '😭Sibling'];
    const result = flames[(remainingLetters - 1) % flames.length];

    resultElement.textContent = result;

    return false; // Prevent form submission
}




// window.onload = function() {
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = "Welcome to the FLAMES game! Please enter two names to start.";
// }

// function calculateFLAMES() {
//     const person1 = document.getElementById('person1').value.toLowerCase().trim();
//     const person2 = document.getElementById('person2').value.toLowerCase().trim();
//     const resultElement = document.getElementById('result');

//     if (!person1 || !person2) {
//         resultElement.textContent = "Please enter both names.";
//         return false;
//     }

//     if (!/^[a-z]+$/i.test(person1) || !/^[a-z]+$/i.test(person2)) {
//         resultElement.textContent = "Names should only contain alphabets. Please avoid numbers or special characters.";
//         return false;
//     }

//     let combinedName = [...person1, ...person2];
//     combinedName = combinedName.filter((char, index) => combinedName.indexOf(char) === index);

//     let count = 0;
//     combinedName.forEach(char => {
//         if (person1.includes(char) && person2.includes(char)) {
//             count += 2;
//         }
//     });

//     const remainingLetters = person1.length + person2.length - count;
//     const flames = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
//     const result = flames[(remainingLetters - 1) % flames.length];

//     resultElement.textContent = result;

//     return false; // Prevent form submission
// }
