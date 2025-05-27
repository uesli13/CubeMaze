export function setupMainMenu(startGameCallback) {
    const mainMenu = document.getElementById('mainMenu');
    const startGameButton = document.getElementById('startGameButton');
    const howToPlayButton = document.getElementById('howToPlayButton');
    const howToPlayModal = document.getElementById('howToPlayModal');
    const closeHowToPlayButton = document.getElementById('closeHowToPlayButton');

    startGameButton.addEventListener('click', () => {
        mainMenu.style.display = 'none'; // Hide the menu
        startGameCallback(); // Start the game
    });

    howToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('hidden'); // Show the modal
    });

    closeHowToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.add('hidden'); // Hide the modal
    });
}