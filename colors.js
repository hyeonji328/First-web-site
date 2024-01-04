var Links = {
    setColor: function(color){
        // var alist = document.querySelectorAll('a:not(ol.no a)');
        // var i = 0;
        // while (i < alist.length) {
        // alist[i].style.color = color;
        // i++; // i++는 'i = i + 1'과 같은 뜻.
        // }
        $('a').not(function(){
            return $(this).closest('#nope').length > 0;
        }).css('color', color);
        // $('a').css('color', color); 이 코드가 위에 주석 처리되어 있는 저 많은 코드와 같은 동작을 실행함. jquery의 css 함수를 쓰면 함수가 저런 작업을 내부적으로 알아서 실행하는 것.
    }
}

var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }, 
    // Body라는 변수에 중괄호를 이용해 객체를 담고, 그 객체의 property로 setcolor를 넣은 다음 그 안에 함수를 지정한 것. 객체 Body의 변수 setColor를 호출하면 그에 지정된 함수 내의 코드가 실행됨.
    // **중요** 객체는 property와 property를 구분할 때 콤마를 찍음. 콤마가 없으면 오류가 나서 정상적으로 작동하지 않음.
    setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

var BorderColor = {
    setBorderColor:function (color){
        $('h1').css('border-bottom-color', color);
        $('#tocContainer').css('border-right-color', color);
    }
}

function nightDayHandler(self){

    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        BorderColor.setBorderColor('white');
        self.value = 'day';
        Links.setColor('beige');

     } else { 
        Body.setBackgroundColor('white');
        Body.setColor('black');
        BorderColor.setBorderColor('black');
        self.value = 'night';
        Links.setColor('black');
     
    }
        
}
// nightDayHandler 함수의 self: 조건문 안에 있는 this는 원래 있던 위치인 input 태그의 이벤트속성에 속했을 때엔 이벤트속성이 있는 태그 즉, input 태그를 가리켰지만, 독립된 함수로 만들어 위치를 옮기면서 this가 가리키는 대상이 전역객체로 바뀜. 이에 따라 원래 의도대로 동작하게 하기 위해 함수에 self라는 매개변수를 만들고, 함수를 호출할 때 인자로 this를 넣은 것. 그러면 함수를 호출했을 때 인자인 this가 매개변수인 self로 치환되어 함수 내용이 정상적으로 작동함.