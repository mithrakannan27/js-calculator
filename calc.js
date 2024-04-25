function display(value){
    document.getElementById('display').value += value;
}
function allclear(){
    document.getElementById('display').value="";
}
function del(){
    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);
}
function calc(){
    var a=document.getElementById('display').value;
    var result=eval(a);
    document.getElementById('display').value=result;
}