
const addButton = document.querySelector('#add');


addButton.addEventListener('click', function () {

    const newButton = document.createElement('button');
    newButton.textContent = 'Nouveau bouton';

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(newButton);


    newButton.classList.add('grid-item');
});
