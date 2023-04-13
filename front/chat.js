var chats = '';
function showUserEditBox(clientchat) {

    console.log("cx" + clientchat);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/chat/" + clientchat);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("x" + this.responseText)
            const objects = JSON.parse(this.responseText);
            const user = objects['user'];
            console.log(user);
            chats += '<div class="d-block" style="margin-top:3%">' +
                '<div class="p-2 mt-3 " style="width:30vw;height:5vh;background-color: #b5dfdd;border-radius: 5%;">' + user['clientchat'] + '</div>' +
                '<div class="p-2  mt-3 mb-5" style="width:30vw;height:5vh;background-color: #b5dfdd;border-radius: 5%;margin-left:120% ">' + user['doctorchat'] + '</div>' +
                '</div>'
        }
        document.getElementById("client").innerHTML = chats;
        console.log("chat" + chats)
    }

}

function advice() {
    Swal.fire({
        title: 'ยินยอมรับคำปรึกษาจากแพทย์',
        html:
            '<div class="d-flex row p-3">' +
            '<p>ชื่อ - นามสกุล</p>' +
            '<input id="name" type="text" class= "form-control mb-3"  placeholder="firstname - lastname" >' +
            '<p>เบอร์ติดต่อ</p>' +
            '<input type="text" id="tel" class= "form-control" placeholder="Tel">' +
            '</div>',
        showConfirmButton: true,
        focusConfirm: false,
        preConfirm: () => {
            advicemessage(document.getElementById('name').value, document.getElementById('tel').value)
        }
    })


}
function advicemessage(name, tel) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เจ้าหน้าที่จะติดต่อกลับ ภายใน 24 ชั่วโมง',

        showConfirmButton: false,
        timer: 1500

    })
}
