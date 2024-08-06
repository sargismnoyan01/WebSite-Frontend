document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const displayArea = document.getElementById('display-area');

    // Update the display area with the search input value
    displayArea.textContent = searchInput.value ? `You searched for: ${searchInput.value}` : 'Your search term will appear here';
});
