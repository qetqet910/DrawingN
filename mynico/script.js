const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const FormRange = document.querySelector('.FormRange input');
const FormBtn = document.querySelector('.FormBtn');
const button1 = FormBtn.querySelectorAll("button")[0];
const button2 = FormBtn.querySelectorAll("button")[1];
const button3 = FormBtn.querySelectorAll("button")[2];
const colors = document.querySelectorAll('.Colors li');
const ColorInput = document.querySelector('.Colors li input');
let SaveColor;

let mouse;
let btn = true;

canvas.width = '500';
canvas.height = '600';

ctx.strokeStyle = 'black';
ctx.lineWidth = 3.3;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 500, 600);

ctx.fillStyle = 'black';
// ctx.beginPath();
// ctx.path()
// ctx.moveTo()
// ctx.Stroke()
// ctx.lineTo()
// ctx.fillStyle
// ctx.lineStyle

if(canvas){
    canvas.addEventListener('mousemove', function(e){
        let x = e.offsetX;
        let y = e.offsetY;
        if(btn){
            if(!mouse){
                ctx.beginPath();
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }
    });
    canvas.addEventListener('mousedown', function(e){
        mouse = true;
        canvas.addEventListener('mouseleave', function(e){
            mouse = false;
        });
    });
    canvas.addEventListener('mouseup', function(e){
        mouse = false;
    });
    canvas.addEventListener('click', function(e){
        if(!btn){
            ctx.fillRect(0, 0, 500, 600);
        }
    });
}
if(colors){
    colors.forEach(ele => {
        ele.addEventListener('click', function(e){
            const color = e.target.style.backgroundColor;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            SaveColor = color;
        })
    })
}
if(FormRange){
    FormRange.addEventListener('input', function(e){
        const LineWidth = e.target.value;
        ctx.lineWidth = LineWidth;
    });
}
if(FormBtn){
    button1.addEventListener('click', function(e){
        if(btn){
            button1.innerText = "Paint";
            btn = false;
            console.log(btn);
        }else{
            button1.innerText = "Fill";
            btn = true;
            console.log(btn);
        }
    });
    button2.addEventListener('click', function(e){
        const image = canvas.toDataURL('image/png');
        const ATag = document.createElement('a');
        ATag.href = image;
        ATag.download = "IMG[🍙]"
        ATag.click();
    });
    button3.addEventListener('click', function(e){
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 500, 600);
        ctx.fillStyle = SaveColor;
    });
}
if(ColorInput){
    ColorInput.addEventListener('change', function(e){
        const CustomColor = e.target.value;
        ctx.strokeStyle = CustomColor;
        ctx.fillStyle = CustomColor;
    })
}