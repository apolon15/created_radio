let temp = /\.*дурак/;
let temp2 = /\.*придурок/;
let temp3 = /\.*дура/;
let temp4 = /\.*идиот/;
function autoriz() {
    let login = document.querySelector('.login').value;
    let pass = document.querySelector('.pass').value;
    let tempLog = /^\w{1,8}$/;
    let tempPassLet = /[a-zA-Z]/;
    let tempPassSymb = /[(!@#$%^&*()]/;
    if (tempLog.test(login) && tempPassLet.test(pass) && tempPassSymb.test(pass)) {
        return true;
    }
    else {
        alert("Проверьте логин или пароль");
        return false;
    }
}


function sendMessage() {
    let mailTemp = document.querySelector('.email').value;
    let text = document.querySelector('#comment').value;
    let temp = /\w+@\w+\.[a-zа-я]+/;
    let bool = maxValue();
    if (!temp.test(text) && !temp2.test(text) && !temp3.test(text) && !temp4.test(text)) {
        if (temp.test(mailTemp) && bool) {
            alert("Ваше сообщение отправлено");
        } else {
            alert("Не верна введена почта");
        }
    } else {
        alert("Ругаться не красиво");
    }
};

function maxValue() {
    let text = document.querySelector('#comment').value.split("");
    let btn = document.querySelector('#send');
    if (text.length === 300) {
        $(btn).attr('disabled', true);
        btn.style.backgroundColor = "rgb(186, 227, 247)";
        document.getElementById('comment').style.backgroundColor = 'rgb(255, 223, 206)';
        return false
    } else {
        $(btn).attr('disabled', false);
        btn.style.backgroundColor = "rgb(63, 116, 169)";
        document.getElementById('comment').style.backgroundColor = 'rgb(255, 255, 255)';
        return true;
    }
}