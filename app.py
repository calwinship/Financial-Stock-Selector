from flask import Flask, jsonify

app = Flask(__name__)

# Mock data for stocks
stocks = {
    "AAPL": {"name": "Apple Inc.", "price": 150.00},
    "MSFT": {"name": "Microsoft Corporation", "price": 300.00},
    "AMZN": {"name": "Amazon.com, Inc.", "price": 3500.00}
}

@app.route('/tickers', methods=['GET'])
def get_tickers():
    return jsonify(list(stocks.keys()))

@app.route('/stocks/<ticker>', methods=['GET'])
def get_stock_details(ticker):
    stock = stocks.get(ticker)
    if stock:
        return jsonify(stock)
    return jsonify({"message": "Stock not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)









