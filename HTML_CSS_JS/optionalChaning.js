// Concept of Optional Chaining:

/* 
 Optional chaining allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
*/

// Example without optional chaining

let userDetails= {
    address:{
        state : "Garudadiri Nagar",
        city : "Tirupati",
        state : "Andhra Pradesh",
        postalCode : "517501"
    }
};

let state = userDetails.address && userDetails.address.state
console.log(state); // Output: "Andhra Pradesh"