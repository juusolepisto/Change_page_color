
function changeColor() {
    let red = document.getElementById('red').value;
    let blue = document.getElementById('blue').value;
    let green = document.getElementById('green').value;
    let color = 'rgb(' + red + "," + green + "," + blue + ')';
    document.p1.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ': ' + color;
}

document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);