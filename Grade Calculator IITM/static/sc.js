function compute(){
    gaa=document.getElementById("GAA").value
    console.log(gaa)
    q1=document.getElementById("Q1").value
    q2=document.getElementById("Q2").value
    oppe1=document.getElementById("OPPE1").value
    oppe2=document.getElementById("OPPE2").value
    f=document.getElementById("ET").value


    total_score=0.1*gaa+Math.max(0.2*Math.max(oppe1,oppe2),(0.15*oppe1+0.15*oppe2))+Math.max(0.35*f+0.2*Math.max(q1,q2),(0.3*f+0.15*q1+0.15*q2))

    console.log(total_score)
    
    grade=total_score>=90?'S':total_score>=80?'A':total_score>=70?'B':total_score>=60?'C':total_score>=50?'D':total_score>=40?'E':'F'
    box=document.getElementById('grade')
    box.innerHTML=`<h3>Total Score ${total_score}<br>Grade Obtained: <strong>${grade}</strong></h3>`
}