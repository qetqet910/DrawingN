
const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll('.colors li');
const Fillbtn = document.querySelector('.buttons button');
const Savebtn = document.querySelectorAll('.buttons button')[1]
let range = document.querySelector('.range input');

let Painting;
let Fill;
let Cbtn;

ctx.strokeStyle = 'black';
ctx.lineWidth = range.value;

ctx.fillStyle = 'black';

canvas.width = '400';
canvas.height = '500';

if(canvas){
    function MM(e){
        let x = e.offsetX;
        let y = e.offsetY;
        if(!Painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
        }else{
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }
    function ML(e){
        Painting = false;
        console.log(Painting);
    }
    function MD(e){
        Painting = true;
        console.log(Painting);
        canvas.addEventListener('mouseleave', ML);
    }
    function MU(e){
        Painting = false;
        console.log(Painting);
    }
    function CC(e){
        if(Cbtn){
            ctx.fillRect(0, 0, 400, 500);
        }
    }
    function SC(e){
        e.preventDefault();
    }
    canvas.addEventListener('mousemove', MM);
    canvas.addEventListener('mousedown', MD);
    canvas.addEventListener('mouseup', MU);
    canvas.addEventListener('click', CC);
    canvas.addEventListener('contextmenu', SC);
    Savebtn.addEventListener('click', function(e){
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = image;
        a.download = 'Image[🧊]';
        a.click();
    });
}

if(colors){
    colors.forEach(ele => {
        ele.addEventListener('click', function(e){
            const ThisColor = e.target.style.backgroundColor;
            ctx.strokeStyle = ThisColor;
            ctx.fillStyle = ThisColor;
        })
    });
}

if(range){
    range.addEventListener('input', RangeValue);
    function RangeValue(e){
        ctx.lineWidth = e.target.value;
    }
};

if(Fillbtn){
    Fillbtn.addEventListener("click", function(e){
        if(Cbtn){
            Cbtn = false;
            Fillbtn.innerText = 'paint';
        }else{
            Cbtn = true;
            Fillbtn.innerText = 'fill';
        }
    })
};

