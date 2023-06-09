function calcularArea() {

    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);


    var perimetro = lado1 + lado2 + lado3;

   
    var s = perimetro / 2; 
    var area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));


    document.getElementById('resultado').textContent = 'El área del triángulo es: ' + area.toFixed(2);
  }

  function calcularPerimetro() {

    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    
    var perimetro = lado1 + lado2 + lado3;


    document.getElementById('resultado').textContent = 'El perímetro del triángulo es: ' + perimetro.toFixed(2);
  }

  function calcularTipo() {
 
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    
    var tipo = '';
    if (lado1 === lado2 && lado2 === lado3) {
      tipo = 'Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      tipo = 'Isósceles';
    } else {
      tipo = 'Escaleno';
    } 
    document.getElementById('resultado').textContent = 'El triángulo es de tipo: ' + tipo;
  }