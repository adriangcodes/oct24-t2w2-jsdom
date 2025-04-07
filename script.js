function print(value) {
    console.log(value)
}

// Assume we got this array from an API request
const data = [
    'Frankenstein',
    'Dracula',
    'Werewolf',
    'Freddie',
    'Jason'
]

function addCostumeToList(costume) {
    const ul = document.querySelector('#costumeContainer ul')

    // Create an <li> using costume
    const newLi = document.createElement('li')
    // Set the child text of new li to value of costume
    newLi.innerText = costume

    // Create a button for removing the item
    const removeButton = document.createElement('button')
    // Set the button caption
    removeButton.innerText = `Remove ${costume}`
    // Attach a click listener (an event)
    removeButton.addEventListener('click', () => {
        ul.removeChild(newLi)
        // TO DO: remove item from array as well
    })
    // Append button to the li
    newLi.appendChild(removeButton)

    // Insert element into the DOM
    ul.appendChild(newLi)
}

// Iterate over data
for (let costume of data) {
    // ul.innerHTML += `
    //     <li>${costume}
    //     <button>Remove ${costume}
    //     </button>
    //     </li>
    // `

    addCostumeToList(costume)
}

// Listen for form submission
document.querySelector('#newCostumeForm').addEventListener('submit', (event) => {
    event.preventDefault()
    // Get costume from form input
    const newCostumeInput = document.querySelector('#newCostumeForm input')
    const costume = newCostumeInput.value
    // Add new costume to the list
    addCostumeToList(costume)
    print('Submitted form')
    // Clear the input field
    newCostumeInput.value = ''
})


