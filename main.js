function displayDateTime()
{
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
            const formattedDate = now.toLocaleString('FR', options); // Format the date and time
            document.getElementById('dateTime').innerText = formattedDate; // Display it in the paragraph
}

        window.onload = displayDateTime;