// Outer function
function greet(){
    let name = "Jhon"
    // Inner Function
    function displayName(){
        console.log(`Hi : ${name}`)
    }
    // displayName()
    return displayName
}

// greet()
const g1 = greet()
g1()