from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/groceries', methods=['GET'])
def grocery_list():
    # Hardcoded grocery list with item counts
    groceries = {
        "apples": 2,
        "bananas": 2,
        "milk": 2,
        "bread": 1,
        "eggs": 1,
        "carrots": 1,
        "chicken": 1
    }
    
    return jsonify(groceries)

if __name__ == '__main__':
    app.run(debug=True)

