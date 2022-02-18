function Confirm(){
    var x = confirm('salam')
 if(x==true&& document.getElementById('body').style.backgroundColor== "white")
 {
     document.getElementById('body').style.backgroundColor = 'black'
     document.getElementById('info').style.Color = 'red'
     document.getElementById('info').style.backgroundColor = 'white'
 }
 else{
     document.getElementById('body').style.backgroundColor = 'white'
     document.getElementById('info').style.backgroundColor = 'black'
     document.getElementById('info').style.Color = 'red'
 }
}

function Input(){
    var x=prompt("Yaşinizi daxil edin");
 
    if (x<0) {
        alert("Yaş mənfi ola bilməz")
    }
    else{
        if (x.trim()==''){
            alert('bos ola bilmez')
        }
        else{
            if (isNaN(x)==true )
            {
               alert("herf daxil etmek olamaz ")
           }
           
           else{
              if (x<18) {
                  alert("Yaş 18-dən kiçik ola bilməz");  
               }
               
               else{
                   alert("Uğurla qeydiyyatdan keçdiniz" );
               }
           
           }
        }
    }
}

class Human{
    constructor(info){
        this.name = info.name
        this.surname = info.surname
        this.password = info.password
    }
    show(){
        return `${this.name} ${this.surname}`
    }
}

    const human = new Human({
        name: 'Altan',
        surname: 'Ibrahimli',
        password: 'code123'
    })
    var item = human.show()

    document.getElementById('info').innerHTML = item.toUpperCase();

