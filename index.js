    <script>
        function carClick() {
            var car = document.querySelector(`.car`);
            if (car.classList.contains('active')) {
                car.classList.remove('active');
            } else {
                car.classList.add('active');
            }
        }
        function btnClick(className) {
            var car = document.querySelector(`${className}`);
            let span = document.querySelector(`.size p span`);
            
            span.innerHTML=car.innerHTML
            if (car.classList.contains('active')) {
                car.classList.remove('active');
            } else {
                car.classList.add('active');
                let siblingArr=siblings(car);
                for (let index = 0; index < siblingArr.length; index++) {
                    siblingArr[index].classList.remove('active');;
                }
            }
        }
        function siblings(obj) {
            var a = []; 
            var p = obj.previousSibling; 
            while(p) { 
                if(p.nodeType === 1) { 
                a.push(p); 
                } 
                p = p.previousSibling 
            } 
            a.reverse() 
            var n = obj.nextSibling; 
            while(n) { 
                if(n.nodeType === 1) { 
                a.push(n); 
                } 
                n = n.nextSibling; 
            }
            return a;
            };


        
        function submit() {
            let select = document.querySelector('.size-list .active');
            if (!select) {
                alert('Please select');
                return
            }
            let carList = document.querySelector('.car-list');
            let carNum = document.querySelector('.car .n');
            let val = select.innerHTML;
            var div = document.createElement("div");
            let dom = carList.children;
            div.classList.add('item', val);

            console.log('carList.childNodes', dom, val);
            let flag = false;
            for (let index = 0; index < dom.length; index++) {
                const domI = dom[index];
                console.log('domI', domI.classList, dom[index].classList.contains('S'));
                if (dom[index].classList.contains(val)) {
                    flag = true;
                    let seleDom = document.querySelector('.S .item-price');
                    let num = document.querySelector('.S .item-price span').innerHTML;
                    num = Number(num) + 1
                    seleDom.innerHTML = `<span>${num}</span>x <b>$75.00</b>`
                    console.log('num1111');
                    break
                } else if (dom[index].classList.contains(val)) {
                    flag = true;
                    let seleDom = document.querySelector('.M .item-price');
                    let num = document.querySelector('.M .item-price span').innerHTML;
                    num = Number(num) + 1
                    seleDom.innerHTML = `<span>${num}</span>x <b>$75.00</b>`
                    console.log('333');
                    break
                } if (dom[index].classList.contains(val)) {
                    flag = true;
                    let seleDom = document.querySelector('.L .item-price');
                    let num = document.querySelector('.L .item-price span').innerHTML;
                    num = Number(num) + 1
                    seleDom.innerHTML = `<span>${num}</span>x <b>$75.00</b>`
                    console.log('22');
                    break
                }
            }
            if (flag) return
            console.log('111');
            div.innerHTML = `<div class="item-left">
                                <img src="./1.jpg" alt="">
                            </div>
                            <div class="item-right">
                            <p>Classic Tee </p>
                            <div class="item-price"><span>1</span>x <b>$75.00</b></div>
                            <div class="item-size">Size:${val}</div>
                            </div>`;
            carList.appendChild(div)
            carNum.innerHTML = dom.length;
        }


        window.onload = function () {
            function get(url, data, callback) {
            
                var xhr = null
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {//IE6
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }
                
                if (data) {
                    url = url + '?';
                }
       
                xhr.open('get', url);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        callback(xhr.responseText);
                    }
                }
                xhr.send(null);
            }
            var name = document.querySelector('.name');
            var priceDom = document.querySelector('.price');
            var dsc = document.querySelector('.dsc');
            var sizeList = document.querySelectorAll('.size-list span');
            var img = document.getElementById('img');
            get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product', {}, function (data) {
                console.log(JSON.parse(data));
                let { description, imageURL, price, title, sizeOptions } = JSON.parse(data);
                console.log('price', sizeList);

                name.innerHTML = title;
                priceDom.innerHTML = price + "$";
                dsc.innerHTML = description;
                img.src = imageURL;

                sizeOptions.forEach((e, i) => {
                    console.log('sizeList[i]', sizeList[i], e.label);
                    sizeList[i].innerHTML = e.label
                })
            });
        }
    </script>
