function displayDateTime()
{
    const last_modified = new Date('2025-05-23T21:16:00');
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
            const formattedDate = now.toLocaleString('fr-FR', options); // Format the date and time
            document.getElementById('dateTime').innerText = formattedDate; // Display it in the paragraph
}

        window.onload = displayDateTime;