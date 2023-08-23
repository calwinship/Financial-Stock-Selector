
$(document).ready(function() {
    // Fetch tickers and populate dropdown
    $.get('http://localhost:5000/tickers', function(data) {
        data.forEach(ticker => {
            $('#tickerDropdown').append(`<option value="${ticker}">${ticker}</option>`);
        });
    });

    // Fetch stock details when a ticker is selected
    $('#tickerDropdown').change(function() {
        const selectedTicker = $(this).val();
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
        });
    });
});
