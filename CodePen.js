function out(){
let html=document.getElementById("html").value;
let css=document.getElementById("css").value;
let js=document.getElementById("js").value;
let output=document.getElementById("output");

output.contentDocument.body.innerHTML=html + "<style>" + css +"</style>";
output.contentWindow.eval(js);
}

function copyhtml(){
    let html=document.getElementById("html");
    html.select();
    document.execCommand("copy");
}
function copycss(){
    let css=document.getElementById("css");
    css.select();
    document.execCommand("copy");
}
function copyjs(){
    let js=document.getElementById("js");
    js.select(); 
    document.execCommand("copy");
}