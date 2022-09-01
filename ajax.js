console.log("This is ajax tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchButton);

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popButton);

function fetchButton() {
    console.log("You have clicked the fetchBtn");


    // Instantiation of object
    const xhr = new XMLHttpRequest();


    //Open the object 
    // xhr.open('GET', "Subha.txt", true);
    xhr.open('POST', "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.getResponseHeader('Content-type', 'application/json')




    // function when the request is on progress(Optional)
    xhr.onprogress = function () {
        console.log("You have clicked on the button");
    }

    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Error 404! Some error occcured!");
        }


    }

    params = `{"name":"testgwrfweg","salary":"123","age":"23"}`;

    xhr.send(params);


}

function popButton() {
    console.log("You have clicked the popBtn");


    // Instantiation of object
    const xhr = new XMLHttpRequest();


    //Open the object 
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true);

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let emailList = document.getElementById('emailList');
            let idList = document.getElementById('idList');
            let str1 = "";
            for (key in obj) {
                str1 += `<li>${obj[key].email}</li>`;
            }
            emailList.innerHTML = str1;
            
            let str2 = "";
            for (key in obj) {
                str2 += `<li>${obj[key].id}</li>`;
            }
            idList.innerHTML = str2;
        }
        else {
            console.error("Error 404! Some error occcured!");
        }


    }

    xhr.send();
    console.log("We are done fetching employees!");


}