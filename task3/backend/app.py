from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/account', methods=['GET'])
def grocery_list():
    bank_account = {
        "name": "Dr. Nilex Tietgione",
        "balance": 35000,
        "pending_charges" : [
            12,
            14,
            -3,
            400,
            35
        ]
    }
    
    return jsonify(bank_account)

if __name__ == '__main__':
    app.run(debug=True)

