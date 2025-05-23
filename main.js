function displayLastUpdatedDateTime() {
    // Set the last updated date here
    const lastUpdated = new Date('2025-05-20T21:22:00'); // Change this date to your last update date
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const formattedDate = lastUpdated.toLocaleString('fr-FR', options); // Format the date and time in French (EURO format)
    document.getElementById('dateTime').innerText = `Dernière mise à jour : ${formattedDate}`; // Display it in the paragraph
}

window.onload = displayLastUpdatedDateTime;
