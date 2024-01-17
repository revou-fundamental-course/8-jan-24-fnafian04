function calculate() {
    var sideLength = parseFloat(document.getElementById("sideLength").value);
  
    if (sideLength <= 0) {
      alert("masukkan panjang sisi yang benerr");
      return;
    }else if(isNaN(sideLength)){
        alert("masukkan panjang sisinya duluu")
    }
  
    var calculationType = document.querySelector('input[name="calculationType"]:checked').value;
  
    var luas, keliling;
  
    if (calculationType === "luas") {
      luas = sideLength * sideLength;
      keliling = null;
    } else {

      keliling = 4 * sideLength;
      luas = null;
    }
  
    var resultElement = document.getElementById("result");
  
    var resultHTML = `<p>sisi = ${sideLength} cm</p>`;
    if (calculationType === "luas") {
      resultHTML += `<p>rumus luas = <b>sisi x sisi</b>, maka ${sideLength} x ${sideLength} = ${luas} cm</p>`;
    } else {
      resultHTML += `<p>rumus keliling = <b>4 x sisi</b>, maka 4 x ${sideLength} = ${keliling} cm</p>`;
    }
  
    resultElement.innerHTML = resultHTML;
  }