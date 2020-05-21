const calculator = new Vue({
    el: '#calculator',
    data: {
        operation: '',
        result: '',
    },
    methods: {
        addNum: function (num) {
            if (this.result.length > 0) {
                this.operation = '';
                this.result = '';
            }
            this.operation += num
        },
        addOperator: function (operator) {
            if (this.result.length > 0) {
                this.result = '';
            }
            if (this.operation.length === 0) {
                this.operation = `0&${operator}&`;
                return;
            }
            if (this.operation.endsWith('&')) {
                let operation_array = this.operation.split("&");
                operation_array[operation_array.length-2] = operator;
                this.operation = operation_array.join('&');
                return;
            }
            
            this.operation += `&${operator}&`
        },
        getResult: function () {
            try {
                const result = eval(this.rawOperation);
                if (result in memeResults) {
                    this.result = memeResults[result].text;
                    if (memeResults[result]['bg-img']) {
                        document.body.style.backgroundImage = `url('${ memeResults[result]['bg-img'] }')`;
                    } else {
                        document.body.style.backgroundImage = '';
                    }
                } else {
                    document.body.style.backgroundImage = '';
                    if (this.operation.length > 16) {
                        this.result = "I'm not displaying that...";
                        return;
                    }
                    this.result = this.operation.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace('-', '');
                }
            } catch (error) {
                document.body.style.backgroundImage = "url('/backgrounds/glitch.gif')";
                this.result = "";
            }
        },
        clearOperation: function () {
            this.operation = '';
        },
        substractNum: function () {          
            
            if (this.operation.endsWith('&')) {                
                this.operation = this.operation.substring(0, this.operation.length - 3);
            }
                this.operation = this.operation.substring(0, this.operation.length - 1);      
        }
    },
    computed: {
        rawOperation: function () {
            return this.operation.replace(/&/g, ' ');
        }
    }
})

const memeResults = {
    '0': {
        'text': 'The amount of friends you have',
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '69': {
        'text': 'Nice!',
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '420': {
        'text': 'Nice!',
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '9001': {
        'text': "It's over nine thousand!",
        'class': null,
        'bg-img': '/backgrounds/over_9000.jpg',
        'color': null,
    },
    '666': {
        'text': "Ľ̨̧̤̼͖̼̟̯̗̲͙͔̠̼̘̫͈͇͔̪̳̯̲̟̪̲̭̬̣̝͖͔̯̞͖͓͖͙̆͋̐̈́́̅̑̂̄̊̀̿̓̓̒́̃̓̐̌̋̇̊̔̍̽̎̾̇͐̉̑̋̑͂̽̕̕͟͜͢͢͝͝͠͝ͅò͓̖̮͇̖̥͔̥̤̻̳̖̠̹̐̅́͐̓̓̅͐̀͆͞͝͡ŗ̨̢̝̗͚͔̮̜͕͍̟̪͚̼͍͎̪̜̭͈͖͍̖̯͖̖͎͎͕͍̠̯̳̠̲͚̖͓͚̥̗͚̏̂̉̽̏̓̾͒̀̀̅͌͆̐̑̔͆̌̅̀̅͐̍͑͊́̃̾̍͂̍͑̿̏͘͘͘̕̚̚͠͝͡͝ͅe̬̻̱͇̪̼͉̰̦̗̦̠̺̻͒̒͌̀̀̔͛́̓̆̄̅̽͐̒̓̕͜͜͢m̡̗̖̟̩̼̙̘̩̺̗̹̫͊̐̋͛͗͒̑̿̆̓̽̚͡ ̢̡̡̢̨̨̛̛͕͙͓̹̖̳͍̩̤̲̝̹͎̦͓̮̜̙͍͖̟̳͇̺͓̳̠̰͇̯̹̤̳͍͇̪̥̜͇̮̹̒͊̓̐̔͗̏̋̎͗̇̀̀̏͐̇̍͛̉̾͐̆̿̏̂̇͑́̓̋̓̎̓͒̊̓͌̒͂̿̚͡͞͡͠i̧̨̨̛̜̟̲̝̭̯̦͍͚̳͍̼͚͇̹͉̜̣͈͇̹̹̬̬̺͇͕͋́́̇̏̒̔̓̑̒̑̈́͑̍̽̂̔̒̄̍̓̊́̈̓̀̒̎̅̆͛̕̕͢͜͜͟͞ͅp̙͇̺͉͖̭͕̣̣̲̳̟̣̮͖̦̲̟̙̅̅̑͑̀̅͋̌̇͋͒̆̃̎̽̽̀̿̚͞ͅs̢̧͚̦̱͚̝̹͚̤̰͇͈̥̻̞̝͚̠͖̩̖͇̻̬̗̩̩̠͇̍̈́̓̉̎͆̑̓̓̉̈́̀̋́͂͋̿̃̊̐͋͊̓̃͋̾̿͘͘̕̕͢͟͟͢͝͡͠ư̧̢̩̱͖͕̘̪̦̗͙̬̠̯͙͉̖̮͚̠͚̺̙̙̬̮̯͙̬̯͒̽̿̋̌̆́̑͋́̅̈́́̎͌̄͛̈́́̃͆͐̇̀̀̇̔̌͝m̡̛̤̠̳͚̯̝͕͙͚̰̠̲̟̖̔͆̂̒̿̑͊̋̐̌̑͌̂̈͘͟͟͞ ͕̳̲̼̙͓͔̯̠̱̱͎̮̟̻͈̬̋̇̏̃̓̏̒̓̓̔͐̌̏̆̓̾́̚͜͟͞ḓ̡̬̦̦̜̏̓̐̄̕̚ǫ̡̡̢̨̨̨̛̛͈̳͈̳̤̺̣̼͈̠̜̥͕̯͎̜͍̪̪̞̥̹̣̪̬̭͉͍͈̳͍̯̺̤̤̳͈̱̌͗͛͒̈̐̍̓͒̒̍͂̋̀̓̋̑̽̀̄̌͛̄̿̽͊̓͆̽͋͌͂̈͆̉͌̚̚̚̚̕̕̕͢͟͢͢͢͡͝͡͡͠ḷ̨̛̙̫̮̬̩̬̬̲͍̹̤̞̰͈̟͔̙̤͉̯̥̗͍̬̰̻̓͋̈́̐͊̽͒̅͑͊̀͋̎̒̄̔̑͋̅̅̀̍̑̍̓̚̕̚͜͟͝ơ̢͇͙͙̝̜̮̳̖̯̯̻͇͉̲̗̦̥͇͚̙̞͎̱͍̻̩͔͙̗̫̳͂́̀̀̌͂͒̉̃͋̃́̑̑̎̇̏͒̈́̐̃̀͗̕̚͘͢͝͞͝͝͞͡ŗ̪͙͉͇̝̜̜̰̯̝̬͉͓͈̙͎͌͗̓̊̾̇̍̓̏̀̆̽̐͒̓͗͋̚͜ ̨̨̧̛̛̜͔̦̩̩̜͕̖͍̯̻͚̤͓͇͕̍́͆̅̈́̽̑̍͗̐͋͆̈̀̊͘͘̕͟͟͝͞ͅś̢̡̢̢̨̡̛̛̛͓̻̗͓̖͇̗̤̟̬͈̬̗̤̱̱̗͙͓̤̣͉͈̰͍̣̲̱̥̤͔̭̹̣͕̯̯͚͆͑̊͂̅̄̏̆͋̿̎́̾̓͌̃̍̑͒̀̌̀̉́̍̉̈̐̾̔͂̐̎̕̚̕̚̕͘̕͜͟͝͠͡͝ͅͅi̢̧̛̠͎͚̬̤͍̳̱̟̹̝͕̝̩̭͍̲̣̣̖̠̠̺͓͍̗̬̮̯̻̠͓͇̜̠̦̱̜̩̮̳̼̐̉́̊͊̉̓͊̋̐͐͛̈̑̉̇̇͆͂̉͌͐͐͂̅͐̓́̈́͋͂͆̊̆̅̓̕̚̚͘̕͟͜͝͝͞͞t̢̨̙̹̜̬̫͉͓͓̫̲̰̦̭̫̩̺̻͇̲̻͕̟̱̜̩̗͒̉̽̅͛̃̋̅̋̅̓͐̈́̉̀͛̾̈́̆̍̏͌̇͒͑̈́̑̚͘͜͜͢͜͠͡͠͞ͅ ̧̧̛͙͓̜͉̠̟͉͈̤̜̘̘̺̬̻̓̏̋̌̒̏̐̓̈̃́̽́̓͑̚a̡͉͕͎͖̖̫̥̳͖̭̣͚̞̠̣̙͎̪̫̙̦͔̙̟͍̮̬̙̯͔̘͚̓̅͌̈͐̓̋̈́̈́͋̔̿̔̎̋͂̍̑̿̅̄̑̋̾̊̾̈̚͘̕̚͟͜͜͞͝͠͝͝m̡̰̭̬͖͎͕̫̗̙͙̹̤͆̅̑̈́͛̔̄͊̍̌̈́̕͢͝͡͠ͅé̢̡̨̫̭̺̜̠̳̹̳̠̱̰͈̩͉̝̭̖̪̥̜͂̌̌̀̂̽́̓͆̉́͂͒̈̓́̾͌̆͐̀̊̅̅̚̕͜͢͜͠ͅͅt̨̨̧̛̙̗̜͎̲̜͓̜̗͕͇̗̗͉̤͇̘͚͕͈̘̱̲̖̮̟̬͖̳̼̯̮͍̞̊̑̊́͌̐̓̾̎͊̑̆͌͂̑̌̓̌͊͊̐̽̔̌̀͆̃͛͊͒̓̚̚̚͞͞.̡̨̧̡̨̡̢̢̢͎̥̳̖̜̪̼͓̝̱̗͈̣̘͉̑̋̋̌̏̂̆̈́̊̓̿̔̍̏͊̄͌̏̿̚̕͜͝͞͠͡",
        'class': null,
        'bg-img': '/backgrounds/666.gif',
        'color': null,
    },
    '911': {
        'text': "911, whats your emergency?",
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '5318008': {
        'text': "Pervert",
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '58008': {
        'text': "Pervert",
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '379009': {
        'text': "",
        'class': null,
        'bg-img': '/backgrounds/google.png',
        'color': null,
    },
    '338': {
        'text': "BZZ",
        'class': null,
        'bg-img': '/backgrounds/bee.jpg',
        'color': null,
    },
    '5338': {
        'text': "BZZZZZZ",
        'class': null,
        'bg-img': '/backgrounds/bees.png',
        'color': null,
    },
    '37818': {
        'text': "Isaac!",
        'class': null,
        'bg-img': null,
        'color': null,
    },
    '5663': {
        'text': "youtube.com/user/HowToBasic",
        'class': null,
        'bg-img': '/backgrounds/eggs.jpg',
        'color': null,
    },
    '399': {
        'text': "But can you do THIS?",
        'class': null,
        'bg-img': '/backgrounds/chair.jpg',
        'color': null,
    },
    '1': {
        'text': "We are number one",
        'class': null,
        'bg-img': '/backgrounds/number_one.gif',
        'color': null,
    },
};

document.onkeydown = function (e) {
    const operator_codes = [191, 56, 61, 173, 109, 111, 106, 107];
    const result_codes = [61];
    const enter_code = 13;
    const backspace_code = 8;
    if (!isNaN(e.key)) {
        calculator.addNum(e.key);        
        return;
    }
    
    if (operator_codes.includes(e.keyCode) && e.key !== "=") {
        calculator.addOperator(e.key);
        return;
    }

    if (result_codes.includes(e.keyCode) || e.keyCode === enter_code) {
        calculator.getResult();
        return;
    }

    if (e.keyCode === backspace_code) {
        calculator.substractNum();
        return;
    }
    
}

const background_colors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add(background_colors[Math.floor(Math.random() * background_colors.length)]);
});

