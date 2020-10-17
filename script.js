var results= document.querySelector('.passwordResults')
var lowerLts= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLts= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var otherChars= ["!","@","#","$","%","^","&","*","(",")","_","-","=","+",",",".","<",">","/",".","/","?","[","]"];
var numbers=[0,1,2,3,4,5,6,7,8,9];

var passwordLgth = parseInt(prompt('How long would you like the password to be?'))
var useUppercase = confirm('Would you like it to have uppercase letters?')
var useSpecial = confirm('Would you like it to have special characters?')
var useNumbers = confirm('Would you like it to have numbers?')


passGen(passwordLgth, useUppercase, useSpecial, useNumbers)



function passGen(length, upper, spec, num){
    const availableChar = [
        lowerLts
    ]
    
    if (upper){
        availableChar.push(upperLts)
    }

    if (spec){
        availableChar.push(otherChars)
    }

    if (num){
        availableChar.push(numbers)
    }

    for (var i= 0; i < length; i++){
        var ran = availableChar[Math.floor(Math.random()*availableChar.length)];
        var answer= alert('your new password is ' + ran)
    }     
    
   

}
