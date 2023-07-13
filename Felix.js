var answerOne = 0;
var answerTwo = 0;
var answerThree = 0;
var answerFour = 0;
var answerFive = 0;
var answerSix = 0;

$('.result1').hide();
$('.result2').hide();
$('.result3').hide();
$('.result4').hide();
$('.result5').hide();
$('.result6').hide();

function add_toVariable(clickedId) {
    
    var button = $('#' + clickedId);
    
    button.parent().children().attr('class', 'deactive');
    
    button.attr('class', 'active');
}

function evaluate(clickedId) {
    
    
    if (clickedId == "11" || clickedId == "21" || clickedId == "31" || clickedId == "41" || clickedId == "51" || clickedId == "61" || clickedId == "71" || clickedId == "81") {
        answerOne++;
    }
    else if (clickedId == "12" || clickedId == "22" || clickedId == "32" || clickedId == "42" || clickedId == "52" || clickedId == "62" || clickedId == "72" || clickedId == "82") {
        answerTwo++;
    }
    else if (clickedId == "13" || clickedId == "23" || clickedId == "33" || clickedId == "43" || clickedId == "53" || clickedId == "63" || clickedId == "73" || clickedId == "83") {
        answerThree++;
    }
    else if (clickedId == "14" || clickedId == "24" || clickedId == "34" || clickedId == "44" || clickedId == "54" || clickedId == "64" || clickedId == "74" || clickedId == "84") {
        answerFour++;
    }
    else if (clickedId == "15" || clickedId == "25" || clickedId == "35" || clickedId == "45" || clickedId == "55" || clickedId == "65" || clickedId == "75" || clickedId == "85") {
        answerFive++;
    }
    else {
        answerSix++;
    }
}

function submit() {
    
    $('.quiz').hide();
    
    $('.active').each(function(){
        
        var clickedId = $(this).attr('id');
        
        evaluate(clickedId);
        
    });
    
    if (answerOne >= answerTwo && answerOne >= answerThree && answerOne >= answerFour && answerOne >= answerFive && answerOne >= answerSix) {
        $('.result1').show();
    }
    else if (answerTwo > answerOne && answerTwo >= answerThree && answerTwo >= answerFour && answerTwo >= answerFive && answerTwo >= answerSix) {
        $('.result2').show();
    }
    else if (answerOne < answerThree && answerTwo < answerThree && answerThree >= answerFour && answerThree >= answerFive && answerThree >= answerSix) {
        $('.result3').show();
    }
    else if (answerOne < answerFour && answerTwo < answerFour && answerThree < answerFour && answerFour >= answerFive && answerFour >= answerSix) {
        $('.result4').show();
    }
    else if (answerOne < answerFive && answerTwo < answerFive && answerThree < answerFive && answerFour < answerFive && answerFive >= answerSix) {
        $('.result5').show();
    }
    else {
        $('.result6').show();
    }
}

function goBack() {
    $('.result1').hide();
    $('.result2').hide();
    $('.result3').hide();
    $('.result4').hide();
    $('.result5').hide();
    $('.result6').hide();
    $('.quiz').show();
    answerOne = 0;
    answerTwo = 0;
    answerThree = 0;
    answerFour = 0;
    answerFive = 0;
    answerSix = 0;
}

