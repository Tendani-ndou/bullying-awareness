document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        reporterType: formData.get('reporterType'),
        description: formData.get('description'),
        anonymous: formData.get('anonymous') ? true : false,
        location: formData.get('location') // Include location
    };

    fetch('/api/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = 'reports.html'; // Redirect to reports page after submission
    })
    .catch(error => {
        console.error('Error:', error);
    });
});