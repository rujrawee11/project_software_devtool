function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/users");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['id'] + '</td>';
                trHTML += '<td><img width="50px" src="' + object['avatar'] + '" class="avatar"></td>';
                trHTML += '<td>' + object['fname'] + '</td>';
                trHTML += '<td>' + object['lname'] + '</td>';
                trHTML += '<td>' + object['username'] + '</td>';
                trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + object['id'] + ')">Edit</button>';
                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + object['id'] + ')">Del</button></td>';
                trHTML += "</tr>";
            }
            document.getElementById("mytable").innerHTML = trHTML;
        }
    };
}

loadTable();

function showUserCreateBox() {
    Swal.fire({
        title: 'Diary Time',
        html:

            '<div class="form-floating mb-4 d-flex flex-row">' +
            '<input type="text" class= "form-control mx-3 "  id="title" placeholder="Title" >' +
            '<input type="date" id="date" class= "form-control" placeholder="Date">' +
            '</div>' +
            '<div class="form-floating mx-4 mb-4 ">' +
            '<textarea id="status" style="height:15vh" class="form-control" placeholder="How are you ?"></textarea>' +
            '<div class="form-floating mb-4 d-flex flex-row justify-content-end">' +
            '<div>' +
            '<svg class="m-1 mt-2" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FCD240" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div>' +
            '<svg class="m-1 mt-2" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#66C8C7" class="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div>' +
            '<svg class="m-1 mt-2" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#8EB7E2 " class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div>' +
            '<svg class="m-1 mt-2" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FF6961" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />' +
            '</svg>' +
            '</div>' +
            '</div',

        focusConfirm: false,
        preConfirm: () => {
            userCreate();
        }
    })
}

function userCreate() {
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/users/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id, "title": title, "status": status
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire(objects['message']);
            loadTable();
        }
    };
}

function userDelete(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/users/delete");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            Swal.fire(objects['message']);
            loadTable();
        }
    };
}
// test
function showUserEditBox(id) {
    console.log(id);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/users/" + id);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            const user = objects['user'];
            console.log(user);
            Swal.fire({
                title: 'Edit User',
                html:
                    '<input id="id" class="swal2-input" placeholder="First" value="' + user['id'] + '" disabled>' +
                    '<input id="fname" class="swal2-input" placeholder="First" value="' + user['fname'] + '">' +
                    '<input id="lname" class="swal2-input" placeholder="Last" value="' + user['lname'] + '">' +
                    '<input id="username" class="swal2-input" placeholder="Username" value="' + user['username'] + '">' +
                    '<input id="email" class="swal2-input" placeholder="Email" value="' + user['email'] + '">' +
                    '<input id="avatar" class="swal2-input" placeholder="Avatar" value="' + user['avatar'] + '">',
                focusConfirm: false,
                preConfirm: () => {
                    userEdit();
                }
            })
        }
    };
}

function userEdit() {
    const id = document.getElementById("id").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const avatar = document.getElementById("avatar").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://localhost:3000/users/update");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id, "fname": fname, "lname": lname, "username": username, "email": email,
        "avatar": avatar
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire(objects['message']);
            loadTable();
        }
    };
}
