
function myFunction() {
    let x = document.getElementById("numb").value;
    let ob=new Date();
    let y=ob.getFullYear();

    document.getElementById("demo").innerHTML = y-x+"years";
  }