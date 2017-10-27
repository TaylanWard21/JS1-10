//write first method
function sleep_in(weekday,vacation) {
    if(weekday==true && vacation == true) {
        return true;
    }
        if(weekday == false) {
            return true;
        }
            if(weekday == true && vacation == false){
                return false;
            }

}

function monkey_trouble(a_smile, b_smile){
    if(a_smile==true && b_smile==true){
        return true;
    }
    if(a_smile==false && b_smile==false){
        return true;
    }
    if(a_smile==true && b_smile==false){
        return false;
    }
    if(a_smile==false && b_smile==true){
        return false;
    }
}

function string_times(string,x){
    var answer= "";

    for(var i = 0; i < x; i++){
        answer=answer + string ;
    }

    return answer;


}


function front_times(word,x){
    var answer = "";
    var front = word.substring (0,3);
    for (var i = 0; i < x; i++){
        answer= answer + front;

    }
    return answer;
}




function string_bits(word){

    var answer = "";
    for ( var i = 0; i < word.length; i = i +2){
        answer=answer + word[i] ;
    }
    return answer;
}



function caughtSpeeding(speed,birthday){
    if(birthday==true){
        speed = speed -5;
    }
    if(speed <= 60){
        return 0;
    }
    if( speed > 61 && <= 81  ){
        return 1;
    }
    if( speed >= 81){
        return 2;
    }

}

function fizz_buzz (number, x){
var fizz = "Fizz";
var Buzz = "Buzz";
var FuzzBuzz = "FizzBuzz"
    var pop= "!";
if (number % 5 == 0 && number % 3 == 0){
    return FuzzBuzz;
}
if (number % 5 == 0){
    return Buzz;
}
if (number % 3 == 0){
    return fizz;
}else{
    return number + pop;
}

}

function teaParty(tea,candy){
    if( tea < 5 || candy < 5 ){
        return 0;
    }
    if( tea * 2 <= candy ||candy * 2 <= tea ){
        return 2;
    }
    if( tea >= 5 || candy >= 5 ){
        return 1;
    }
}

function blackjack( x, y){
    if( x > 21 && y > 21){
        return 0;
    }
    if( x <= 21 && y > 21){
        return x;
    }
    if( x > 21 && y <= 21){
        return y;
    }
    if( x <= 21 && y <= 21 && x > y){
        return x;
    }
    if( x <= 21 && y <= 21 && y > x){
        return y;
    }

}

function loneSum (a,b,c){
    if ( a!= b && b!=a && a!=c && b!=c && c!=a && c!=b){
        return a+=b+=c;
    }else {
        if (a == b && b == c) {
            return 0;
        }
        if (b == a) {

        return c;
    }
        if (c == b) {
            return a;
        }
        if (a == c) {
            return b;
        }
    }




}





//write second method
function nextOne(param1, param2) {

}


function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times(string,x);
    document.getElementById("output4").innerHTML = front_times(word,x);
    document.getElementById("output5").innerHTML = string_bits(word);
    document.getElementById("output6").innerHTML = caughtSpeeding(speed,birthday);
    document.getElementById("output7").innerHTML = fizz_buzz(number,x);
    document.getElementById("output8").innerHTML = teaParty(tea,candy);
    document.getElementById("output9").innerHTML = blackjack(x,y);
    document.getElementById("output10").innerHTML = loneSum(a,b,c;
    //test first method, etc
    // test second method, etc
    // test third method, etc
    // test fourth method, etc
    // test fifth method, etc
    // test sixth method, etc
    // test seventh method, etc
    //test eighth method, etc
    //test ninth method, etc
    //test tenth method, etc
}
