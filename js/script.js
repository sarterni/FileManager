
const addButton = document.querySelector('#add');


addButton.addEventListener('click', function () {

    const newButton = document.createElement('button');
    newButton.textContent = 'Nouveau bouton';

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(newButton);


    newButton.classList.add('grid-item');
    newButton.id = 'btn-' + (buttons.length + 1);
});


const renameButton = document.querySelector('#rename');

renameButton.addEventListener('click', function () {
    // const buttons = document.querySelectorAll('.grid-item');
    const buttonId = prompt('Enter the id of the button you want to rename: (btn-1, btn-2, etc.)');
    const buttonToRename = document.getElementById(buttonId);
    if (buttonToRename) {
        const newName = prompt('Enter the new name for the button:');
        buttonToRename.textContent = newName;
    } else {
        alert('Button not found!');
    }
});


        const removeButton = document.querySelector('#remove');
        
        removeButton.addEventListener('click', function () {
            const buttons = document.querySelectorAll('.grid-item');
            if (buttons.length > 0) {
                const lastButton = buttons[buttons.length - 1];
                lastButton.remove();
            }
        });