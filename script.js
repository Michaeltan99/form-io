
let gender = document.forms[0];
let txt = "";
let i;
var form = document.getElementById('frm');
var values = [];
var hobies = document.getElementsByName("hobi");
var hobi = "";

function submit() {
    var name = document.getElementById('name').value;
    var area = document.getElementById('area').value;

    for(i=0;i < gender.length; i++){
        if(gender[i].checked){
            txt = txt + gender[i].value + "";
        }
    }

    for(var i = 0; i < hobies.length; i++){
        if(hobies[i].checked){
            hobi = hobi + hobies[i].value +", ";
        }
    }

    document.getElementById('nama').innerHTML = (name);
    document.getElementById('alamat').innerHTML = (area);
    document.getElementById('gender').innerHTML = txt.replace(/,\s*$/, "");
    document.getElementById('hobby').innerHTML = hobi.replace(/,\s*$/, "");

}



        