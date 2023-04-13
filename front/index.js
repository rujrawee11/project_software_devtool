function loadTable(month) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.88.53.217:3000/users");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            var count = 0;
            var x = ''

            const objects = JSON.parse(this.responseText);
            console.log(objects)

            for (let object of objects) {

                count = object['date'].toString().slice(5, 7)
                console.log(month + "l" + count)
                if (month == count) {
                    if (month == '01') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">January</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'


                    }
                    else if (month == '02') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">February</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '03') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-4" style="font-size:2em">March</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '04') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-5" style="font-size:2em">April</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '05') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-5" style="font-size:2em">May</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '06') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-5" style="font-size:2em">June</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '07') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-5" style="font-size:2em">July</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '08') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 mx-2 px-4" style="font-size:2em">August</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '09') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">September</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:8%"></div></div>'

                    }
                    else if (month == '10') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">October</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'

                    }
                    else if (month == '11') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">November</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:8%"></div></div>'

                    }
                    else if (month == '12') {
                        x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1" style="font-size:2em">December</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:8%"></div></div>'

                    }


                    trHTML +=
                        '<div class="d-flex mx-1 mb-5 p-1  ">'
                    if (object['mood'] == 1) {
                        trHTML += '<div class="card m-2 p-28 " style="width: 21rem;background-color:#faebb8;border-radius:35px;"> '
                    }
                    if (object['mood'] == 2) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#d9eded;border-radius:35px;"> '
                    } if (object['mood'] == 3) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#dfedfc;border-radius:35px;"> '
                    } if (object['mood'] == 4) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#ffe2e2;border-radius:35px;"> '
                    }

                    trHTML +=
                        '<div class="card-body p-4">' +
                        '<div class="d-flex flex-row mb-2">' +
                        '<div>' +
                        '<h6 class="fs-4 fw-5">Date : ' + object['date'] + '</h6>' +
                        '</div>' +
                        '<div>' +
                        '<p type="button" style="margin-left:90px;margin-top:-42px ;color:gray;background-color:transparent;font-size: 45px;cursor:pointer" class="bigger"' +
                        'onclick="showUserEditBox(' + object['id'] + ')" >...</p> </div></div>'

                    if (object['mood'] == 1) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood"  class="m-1 mt-2 mb-3" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#FCD240" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em;font-size:1em;text-decoration-line: underline ; text-decoration: underline #dcac00 3px ;border-width:4px;" class="card-title text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object["status"] + '</p>' +
                            '</div></div></div></div> '
                    }
                    if (object['mood'] == 2) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2 mb-3" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#66C8C7" class="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #66C8C7 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div></div></div> '
                    }
                    if (object['mood'] == 3) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2 mb-3" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#8EB7E2 " class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div ><div>' +
                            '<h5 id="titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #8EB7E2 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div ></div ></div > '
                    }
                    if (object['mood'] == 4) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2  mb-3" onclick="mood(4)" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#FF6961" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />' +
                            '</svg>' +
                            '</div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #FF6961 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div></div></div> '
                    }
                }
                if (month == 'all' || !month) {
                    x = '<div class="d-flex row mb-4"><div class="col-1 mt-3" style="height:0.3vh;background-color:black"></div><div class="col-1 px-5 mx-2" style="font-size:2em">All</div><div class="col-9 mt-3 mb-3" style="height:0.3vh;background-color:black;margin-left:6%"></div></div>'
                    trHTML +=
                        '<div class="d-flex mx-1 mb-5 p-1  ">'
                    if (object['mood'] == 1) {
                        trHTML += '<div class="card m-2 p-28 " style="width: 21rem;background-color:#faebb8;border-radius:35px;"> '
                    }
                    if (object['mood'] == 2) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#d9eded;border-radius:35px;"> '
                    } if (object['mood'] == 3) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#dfedfc;border-radius:35px;"> '
                    } if (object['mood'] == 4) {
                        trHTML += '<div class="card m-2 p-28" style="width: 21rem;background-color:#ffe2e2;border-radius:35px;"> '
                    }

                    trHTML +=
                        '<div class="card-body p-4">' +
                        '<div class="d-flex flex-row mb-2">' +
                        '<div>' +
                        '<h6 class="fs-4 fw-5">Date : ' + object['date'] + '</h6>' +
                        '</div>' +
                        '<div>' +
                        '<p type="button" style="margin-left:90px;margin-top:-42px ;color:gray;background-color:transparent;font-size: 45px;cursor:pointer" class="bigger"' +
                        'onclick="showUserEditBox(' + object['id'] + ')" >...</p> </div></div>'

                    if (object['mood'] == 1) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood"  class="m-1 mt-2 mb-3" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#FCD240" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #dcac00 3px ;border-width:4px;" class="card-title text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object["status"] + '</p>' +
                            '</div></div></div></div> '
                    }
                    if (object['mood'] == 2) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2 mb-3" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#66C8C7" class="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #66C8C7 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div></div></div> '
                    }
                    if (object['mood'] == 3) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2 mb-3" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#8EB7E2 " class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                            '</svg></div ><div>' +
                            '<h5 id="titlemood" style = "font-size:0.9em;text-decoration-line: underline ; text-decoration: underline #8EB7E2 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div ></div ></div > '
                    }
                    if (object['mood'] == 4) {
                        trHTML +=
                            '<div class="m-1 mt-2 text-center justify-content-center align-content-center d-flex">' +
                            '<svg id="mood" class="m-1 mt-2  mb-3" onclick="mood(4)" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="120" height="120" fill="#FF6961" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">' +
                            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />' +
                            '</svg>' +
                            '</div><div>' +
                            '<h5 id = "titlemood" style = "font-size:0.9em; text-decoration-line: underline ; text-decoration: underline #FF6961 3px ;border-width:4px;" class="card-title   text-center ">' + object['title'] + '</h5></div>' +
                            '<p id="statusmood" style="height:15vh;font-size:0.9em;" class="card-text  mt-3  text-center">' + object['status'] + '</p>' +
                            '</div></div></div></div> '
                    }
                }
            }
            document.getElementById("headmonth").innerHTML = x;
            document.getElementById("card-all").innerHTML = trHTML;

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
            '<svg id="mood1" onclick="mood(1)" class="m-1 mt-2 bigger" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FCD240" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div>' +
            '<svg id="mood2"onclick="mood(2)" class="m-1 mt-2 bigger" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#66C8C7" class="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div>' +
            '<svg id="mood3" onclick="mood(3)" class="m-1 mt-2 bigger" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#8EB7E2 " class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">' +
            '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
            '</svg>' +
            '</div>' +
            '<div  >' +
            '<svg id="mood4" class="m-1 mt-2 bigger" onclick="mood(4)" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FF6961" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">' +
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
var moods = ""
function mood(x) {
    moods = x
    if (x == 1) {
        document.getElementById("mood1").style.fill = "#FCD240";

        document.getElementById("mood2").style.fill = "#E4DBBE";
        document.getElementById("mood3").style.fill = "#E4DBBE";
        document.getElementById("mood4").style.fill = "#E4DBBE";
    }
    else if (x == 2) {
        document.getElementById("mood1").style.fill = "#E4DBBE";
        document.getElementById("mood2").style.fill = "#66C8C7";
        document.getElementById("mood3").style.fill = "#E4DBBE";
        document.getElementById("mood4").style.fill = "#E4DBBE";
    }
    else if (x == 3) {
        document.getElementById("mood1").style.fill = "#E4DBBE";
        document.getElementById("mood2").style.fill = "#E4DBBE";
        document.getElementById("mood3").style.fill = "#8EB7E2";
        document.getElementById("mood4").style.fill = "#E4DBBE";

    }
    else if (x == 4) {
        document.getElementById("mood1").style.fill = "#E4DBBE";
        document.getElementById("mood2").style.fill = "#E4DBBE";
        document.getElementById("mood3").style.fill = "#E4DBBE";
        document.getElementById("mood4").style.fill = "#FF6961";
    }
}
console.log(moods)
function userCreate() {
    const id = Math.floor(Math.random() * 100000000000000).toString();
    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;
    const date = document.getElementById("date").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://3.88.53.217:3000/users/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id, "title": title, "status": status, "date": date, "mood": moods
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your diary has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            loadTable();
        }
    };
}

function userDelete(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://3.88.53.217:3000/users/delete/" + id);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id
    }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your diary has been deleted',
                showConfirmButton: false,
                timer: 1500
            })
            loadTable();
        }
    };
}
// test
function showUserEditBox(id) {
    console.log(id);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://3.88.53.217:3000/users/" + id);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            const user = objects['user'];
            console.log('l' + objects['user']);
            Swal.fire({
                title: 'Edit User' +
                    '<svg class="bigger mx-3"style="cursor:pointer" onclick="userDelete(' + user['id'] + ')" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">' +
                    '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />' +
                    '</svg>',
                html:
                    '<div class="form-floating mb-4 d-flex flex-row">' +
                    '<input type="text" class= "form-control mx-3 "  id="title" placeholder="Title" value="' + user['title'] + '">' +
                    '<input type="date" id="date" class= "form-control" placeholder="Date" value="' + user['date'] + '">' +
                    '</div>' +
                    '<div class="form-floating mx-4 mb-4 ">' +
                    '<textarea id="status" style="height:15vh" class="form-control" placeholder="How are you ?">' + user['status'] + '</textarea>' +
                    '<div class="form-floating mb-4 d-flex flex-row justify-content-end">' +
                    '<div>' +
                    '<svg id="mood1" onclick="mood(1)" class="m-1 mt-2 bigger" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FCD240" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">' +
                    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                    '</svg>' +
                    '</div>' +
                    '<div>' +
                    '<svg id="mood2"onclick="mood(2)" class="m-1 mt-2 bigger" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#66C8C7" class="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">' +
                    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                    '</svg>' +
                    '</div>' +
                    '<div>' +
                    '<svg id="mood3" onclick="mood(3)" class="m-1 mt-2 bigger" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#8EB7E2 " class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">' +
                    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />' +
                    '</svg>' +
                    '</div>' +
                    '<div  >' +
                    '<svg id="mood4" class="m-1 mt-2 bigger" onclick="mood(4)" xmlns="http://www.w3.org/2000/svg" style="cursor:pointer" width="40" height="40" fill="#FF6961" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">' +
                    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />' +
                    '</svg>' +
                    '</div>' +


                    '</div',

                focusConfirm: false,
                preConfirm: () => {
                    userEdit(user.id);
                }
            }
            )
        }
    };
}

function userEdit(x) {
    const id = x
    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;
    const date = document.getElementById("date").value;
    //const moods = document.getElementById("mood").value;



    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://3.88.53.217:3000/users/update");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "id": id, "title": title, "status": status, "date": date, "mood": moods
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your diary has been updated',
                showConfirmButton: false,
                timer: 1500
            })
            loadTable();
        }
    };
}

function add() {


    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://3.88.53.217:3000/chat/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "clientchat": "สวัสดีค่ะ", "doctorchat": "สวัสดีค่ะ คนเก่ง :) วันนี้เป็นยังไงมั่งคะ"
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your diary has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            loadTable();
        }
    };
}
