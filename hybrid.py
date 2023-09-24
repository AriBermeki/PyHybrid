import globals
from random import randint




app = globals.app 
ui = globals.ui

@app.route('/hello')
def hello():
    return "Hello World!"


@ui.expose    
def random_python():
    print("Random function running")
    return randint(1,100)


@ui.expose    
def d_python(data):
    print("data: ",data)
    


@ui.expose
def get_input_value():
    input_element = ui.document.getElementById('inputField')
    value = input_element.value
    ui.document.getElementById('result').innerText = f'Eingegebener Wert: {value}'
