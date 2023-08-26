
$(document).ready(function() {
    
    // Fetch stock details when a ticker is selected
    $('#fetchStock').click(function() {
        const selectedTicker = $('#tickerInput').val();
        $.get(`http://localhost:5000/stocks/${selectedTicker}`, function(data) {
            $('#stockDetails').html(`
                <tr>
                    <td>Ticker</td>
                    <td>${selectedTicker}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>${data.price}</td>
                </tr>
            `);
            }).fail(function(error) {
                console.error("Error in AJAX call:", error);
        });
    });
});

