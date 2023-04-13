function discountCalc(){
    let sum = $('#sum').val();
    if(sum >=200 && sum < 300){
        let discount1 = sum * 0.03;
        let total1 = sum - discount1;
        $('#out1').text('Ваша сумма со скидкой будет равна ' + total1);
    }
    else if(sum >=300 && sum < 500){
        let discount2 = sum * 0.05;
        let total2 = sum - discount2;
        $('#out1').text('Ваша сумма со скидкой будет равна ' + total2);
    }
    else if(sum >= 500){
        let discount3 = sum * 0.07;
        let total3 = sum - discount3;
        $('#out1').text('Ваша сумма со скидкой будет равна ' + total3);
    }
}

function geometry(){
    let length = $('#length').val();
    let per = $('#per').val();
    let sideLength = per / 4;
    let d = length / 3.14;
    if(d <= sideLength){
        $('#out2').text('Влезет')
    }
    else {
        $('#out2').text('Не влезет')
    }
}

let i1 = 0
let i2 = 0
let i3 = 0


$('#sucsess1').click(
    function(){
        let s = 2
        i1 = s
        console.log(i1)
    }
)
$('#sucsess2').click(
    function(){
        let s = 2
        i2 = s
        console.log(i2)
    }
)
$('#sucsess3').click(
    function(){
        let s = 2
        i3 = s
        console.log(i3)
    }
)
$('#result').click(
    function(){
    let total = i1+i2+i3;
    $('#out3').text('вы набрали ' + total + ' баллов')
    }
)
$('.vic1').click(
    function(){
        let count = 1
        count --
        if(count == 0){
            $('.vic1').hide()
        }
    }
)

$('.vic2').click(
    function(){
        let count = 1
        count --
        if(count == 0){
            $('.vic2').hide()
        }
    }
)

$('.vic3').click(
    function(){
        let count = 1
        count --
        if(count == 0){
            $('.vic3').hide()
        }
    }
)

$('#but1').click(discountCalc);
$('#but2').click(geometry);
