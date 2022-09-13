;const generatePassword=()=>{
    n=parseInt(document.getElementById('length').value);
    lowerAlphabets="abcedfghijklmnopqrstuvwxyz";
    upperAlphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    digits="0123456789";
    symbols="+_-*&%$^#@!></;"
    corpus=lowerAlphabets+upperAlphabets+digits+symbols;
    l=corpus.length;
    let password='';
    for(let i=0;i<n;i++){
        x=Math.floor(Math.random()*l);
        password+=corpus[x];
    }
    result=document.getElementById("result");
    result.value=password;
}

const copyToClipboard=()=>{
    result=document.getElementById("result");
    result.select();
    navigator.clipboard.writeText(result.value);
    alert("Copied the text: " + result.value);
}