window.onload=function() {
    var OIn = document.getElementById("search");
    var ODiv = document.getElementById("sou");
    OIn.onfocus = function () {
        ODiv.style.display = 'block'
    };
    OIn.onblur = function () {
        ODiv.style.display = 'none'
    }

        var arrLi = document.querySelectorAll('.banner li');
        var arrImg = document.querySelectorAll('.banner img');
        for (var i = 0; i < arrLi.length; i++) {
            arrLi[i].index = i;
            arrLi[i].onmousemove = function () {
                for (var j = 0; j < arrImg.length; j++) {
                    arrImg[j].style.display = 'none';
                    arrLi[j].classList.remove('now');
                }
                arrImg[this.index].style.display = 'block';
                arrLi[this.index].classList.add('now');

            }

        }
}
