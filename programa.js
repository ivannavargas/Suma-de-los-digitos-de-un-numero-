function mostrar() {
    var a,b,c,d,e,f,g,h;
  

    //dividir las cifras del numero 
    h=document.getElementById("h").value;
    

    a= h/1000000;
    a=parseInt(a);
        b=(h/100000)-(a*10);
        b=parseInt(b);
        c=(h/10000)-(a*100)-(b*10);
        c=parseInt(c);
        d=(h/1000)-(a*1000)-(b*100)-(c*10);
        d=parseInt(d);
        e=(h/100)-(a*10000)-(b*1000)-(c*100)-(d*10);
        e=parseInt(e);
        f=(h/10)-(a*100000)-(b*10000)-(c*1000)-(d*100)-(e*10);
        f=parseInt(f);
        g=(h/1)-(a*1000000)-(b*100000)-(c*10000)-(d*1000)-(e*100)-(f*10);
        g=parseInt(g);

        document.getElementById("resultado").innerHTML=a+b+c+d+e+f+g;
    
}

function parimpar() {

    var a,b,c,d,e,f,g,h;
  

    //dividir las cifras del numero 
    h=document.getElementById("h").value;
    

    a= h/1000000;
    a=parseInt(a);
        b=(h/100000)-(a*10);
        b=parseInt(b);
        c=(h/10000)-(a*100)-(b*10);
        c=parseInt(c);
        d=(h/1000)-(a*1000)-(b*100)-(c*10);
        d=parseInt(d);
        e=(h/100)-(a*10000)-(b*1000)-(c*100)-(d*10);
        e=parseInt(e);
        f=(h/10)-(a*100000)-(b*10000)-(c*1000)-(d*100)-(e*10);
        f=parseInt(f);
        g=(h/1)-(a*1000000)-(b*100000)-(c*10000)-(d*1000)-(e*100)-(f*10);
        g=parseInt(g);

        document.getElementById("resultado").innerHTML=a+b+c+d+e+f+g;
    var l;
    
     l=a%2;
    if(a%2==0){
       document.write( a+ " Es par"+"<br>");
    }else{
        document.write(a+ " Es Impar"+"<br>");
    }
    
    if(b%2==0){
        document.write(b+ " Es par"+"<br>");
    }else{
        document.write(b+ " Es Impar"+"<br>");
    }
    if(c%2==0){
        document.write(c+ " Es par"+"<br>");
    }else{
        document.write(c+ " Es Impar"+"<br>");
    }
    if(d%2==0){
        document.write(d+ " Es par"+"<br>");
    }else{
        document.write(d+ " Es Impar"+"<br>");
    }
    if(e%2==0){
        document.write(e+ " Es par"+"<br>");
    }else{
        document.write(e+ " Es Impar"+"<br>");
    }
    if(f%2==0){
        document.write(f+ " Es par"+"<br>");
    }else{
        document.write(f+ " Es Impar"+"<br>");
    }
    if(g%2==0){
        document.write(g+ " Es par"+"<br>");
    }else{
        document.write(g+ " Es Impar"+"<br>");
    }
    }


       
        
       
        
        
       
        
    

   
    
  
  




  