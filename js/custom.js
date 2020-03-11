//funcao que faz o progressbar e o carro se movimentar

var i = 0;
    function move() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var elem2 = document.getElementById("myBar2");
            var elem3 = document.getElementById("img1");
            var elem4 = document.getElementById("img2");
            var elem5 = document.getElementById("pct");
            var elem6 = document.getElementById("pct2");


            var width = 0;
            var marginLeft = 0;          
            var id = setInterval(frame, 100);
           

                function frame() {
                    if (width >= 100 || marginLeft >=100) {
                        clearInterval(id);
                        i = 0;
                        x = 0;
                    } else {
                        width++;                        
                        marginLeft++;                         
                                             
                        elem3.style.marginLeft = marginLeft + "%";
                        elem4.style.marginLeft = marginLeft + "%";
                                                                      

                        elem.style.width = width + "%";
                        elem.innerHTML = width + "km";
                        elem2.style.width = width + "%";
                        elem2.innerHTML = width + "km";
                    }
                }
             
                        
                
      }
    
 } 
 
 


       