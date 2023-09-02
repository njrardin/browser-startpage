function updateDateTime(id, options) {
    var date = new Date();
    var formattedDateTime = date.toLocaleString(undefined, options);
    document.getElementById(id).textContent = formattedDateTime;
}

// Define options for time formatting
var timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
};

// Define options for date formatting
var dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit'
};

updateDateTime("time", timeOptions);
updateDateTime("date", dateOptions);

setInterval(() => {
    updateDateTime("time", timeOptions);
    updateDateTime("date", dateOptions);
}, 1000);
