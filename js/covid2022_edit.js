// const { findLastIndex } = require("underscore");

//show column
var showId = false;
var showTitle = true;
var showCreatedAt = true;
var showUpdatedAt = true;
var showContent = true;
let title;
let content;
var editBtnOnClickFunction;
var selectedEditingRecord;
var username_page = document.getElementById('username_page');
var userDetails_page = document.getElementById('userDetails_page');
var overview_page = document.getElementById('overview_page');
var result_page = document.getElementById('result_page');
var username_navbar = document.getElementById('navbar_username');
var userDetails_navbar = document.getElementById('navbar_userDetails');
var overview_navbar = document.getElementById('navbar_overview');
var result_navbar = document.getElementById('navbar_result');
var b_username = "Admin";
var b_password = "admin";
var page = [];
var number_of_page = 0;
var total_number_of_page_display = 0;
var total_number_of_result_display = 0;
var current_page = 1;
var firstTime = true;
var headerTitle = ["type", 'content', 'phoneNo', 'name', 'status', 'reply', 'followedBy', 'createdTime', 'createdBy', 'updatedTime', 'updatedBy']
var token = localStorage.getItem("token");
var login_username_cache = localStorage.getItem("login_username_cache");
var login_role_id_cache = localStorage.getItem("login_role_id_cache");
var x = 0;

console.log(token);
console.log(login_username_cache);
console.log(login_role_id_cache);
// const inputData =[
//         {
//             "id": 2,
//             "title": "1",
//             "content": "request //n for //n water",
//             "phoneNo": "58882229",
//             "staffname": "Coolman dfadsfds ",
//             "status": "Closed",
//             "staffid": null,
//             "remarks": null,
//             "serviceuser": null,
//             "createdTime": "2022-02-04T04:05:53.000+00:00",
//             "updatedTime": "2022-02-08T04:14:57.000+00:00",
//             "requestType": null
//         }
//     ];
var inputData = [
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq\nq",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    {
        "id": 1,
        "content": "test content",
        "createdBy": 3,
        "createdTime": "2022-02-17T07:06:45.000+00:00",
        "followedBy": "Nobody",
        "name": "testName",
        "phoneNo": "87654321",
        "reply": "test reply",
        "status": "unknown status",
        "type": "testType",
        "updatedBy": 3,
        "updatedTime": "2022-02-17T08:14:11.000+00:00"
    },
    
]


var xhr_getCovidRecord = new XMLHttpRequest();
var url_getCovidRecord = "http://lscm-tps.net:8080/CallLogServer/callLogs?phoneNo=";

var xhr_getAllCovidRecord = new XMLHttpRequest();
var url_getAllCovidRecord = "http://lscm-tps.net:8080/CallLogServer/callLogs";


var xhr_postCallLogs = new XMLHttpRequest();
var url_postCallLogs = "http://lscm-tps.net:8080/CallLogServer/callLogs";

var xhr_putCallLogs = new XMLHttpRequest();
var url_putCallLogs = "http://lscm-tps.net:8080/CallLogServer/callLogs/";

var xhr_deleteCovidRecord = new XMLHttpRequest();
var url_deleteCovidRecord = "https://a363a092fa1c24bc79ac5786e038b933-683584616.us-east-2.elb.amazonaws.com:30003/api/notes/";

const app = express();
// Middlewares
var csrfProtect = csrf({ cookie: true })
app.get('/form', csrfProtect, function(req, res) {
// Generate a tocken and send it to the view
res.render('send', { csrfToken: req.csrfToken() })
})
app.post('/posts/create', parseForm, csrfProtect, function(req, res) {
res.send('data is being processed')
})

// getCovidRecord();

//Get Covid Record list
function getCovidRecord(){
    
    try{
        document.getElementById("table").innerHTML = "";
    }catch{}
    try{
        document.getElementById("table_header").innerHTML = "";
    }catch{}
    // try{
    //     xhr_getCallLogs.open( "GET", url_getCovidRecord + document.getElementById("searchPhoneNumberInput").value.toString(), false ); // false for synchronous request
    // }catch{}

    var getCallLogs_resp = getCallLogs();

    const temp = JSON.parse(getCallLogs_resp).reverse();
    current_page = 1;

    divideArray(temp, 20);
    temp.reverse();

    covidRecordList = page[0];

    console.log(covidRecordList);

    constructTable(covidRecordList, '#table');
    constructHeader(covidRecordList, '#table_header');
    closeLoadingModel();
    document.getElementById('logResult').style.display = 'block';
    document.getElementById('noResultLabel').style.display = 'none';
    document.getElementById('noResultLabel_reset').style.display = 'none'; 

    // document.getElementById("searchPhoneNumberInput").value = '';
    document.getElementById("searchPhoneNumberbutton").disabled = true;
    document.getElementById("pageUpBtn").disabled = true;
    if(number_of_page <= 1){
        document.getElementById("pageDownBtn").disabled = true;
    }else{
        document.getElementById("pageDownBtn").disabled = false;
    }

    resizeTableDiv();
    // setPageSelectionArea();
}

function getCallLogs()
{
    var xhr_getCallLogs = new XMLHttpRequest();
    xhr_getCallLogs.open( "GET", url_getCovidRecord + document.getElementById("searchPhoneNumberInput").value.toString(), false ); // false for synchronous request
    xhr_getCallLogs.setRequestHeader("Content-Type", "application/json");
    xhr_getCallLogs.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr_getCallLogs.send( null );
    // console.log(url_getCovidRecord + document.getElementById("searchPhoneNumberInput").value.toString());
    console.log(xhr_getCallLogs.responseText);
    return xhr_getCallLogs.responseText;
}

// const loader = document.querySelector("#loading");

document.querySelector("#searchAllbutton").addEventListener("click", fetchHandler);

function fetchHandler(event) {
    displayLoading();

    getAllCovidRecord();
}

function displayLoading() {
    document.querySelector("#loading").classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        document.querySelector("#loading").classList.remove("display");
    }, 5000);
}

function hideLoading() {
    document.querySelector("#loading").classList.remove("display");
}






function getAllCovidRecord(){
    var xhr_getAllCallLogs = new XMLHttpRequest();

    try{
        document.getElementById("table").innerHTML = "";
    }catch{}
    try{
        document.getElementById("table_header").innerHTML = "";
    }catch{}
    // try{
    //     xhr_getAllCallLogs.open("GET", url_getAllCovidRecord, false);
    // }catch{}

    xhr_getAllCallLogs.open("GET", url_getAllCovidRecord, false); // true for asynchronous 
    xhr_getAllCallLogs.setRequestHeader("Content-Type", "application/json");
    xhr_getAllCallLogs.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr_getAllCallLogs.onreadystatechange = function() { 
        if (xhr_getAllCallLogs.readyState == 4 && xhr_getAllCallLogs.status == 200){
            console.log("DONE");
            const temp = JSON.parse(xhr_getAllCallLogs.responseText).reverse();
            current_page = 1;

            divideArray(temp, 10);
            temp.reverse();

            covidRecordList = page[0];

            console.log(covidRecordList);
            // if(x = 0){
                hideLoading();
                constructTable(covidRecordList, '#table');
                constructHeader(covidRecordList, '#table_header');
                closeLoadingModel();
                document.getElementById('logResult').style.display = 'block';
                document.getElementById('noResultLabel').style.display = 'none';
                document.getElementById('noResultLabel_reset').style.display = 'none'; 
    
                document.getElementById("searchPhoneNumberInput").value = '';
                document.getElementById("searchPhoneNumberbutton").disabled = true;
                document.getElementById("pageUpBtn").disabled = true;
                if(number_of_page <= 1){
                    document.getElementById("pageDownBtn").disabled = true;
                }else{
                    document.getElementById("pageDownBtn").disabled = false;
                }
                // x++;
            // }

            // return xhr_getAllCallLogs.responseText;
        }
    }
    xhr_getAllCallLogs.send(null);


    // var getCallLogs_resp = getAllCallLogs();
        

    resizeTableDiv();
    // setPageSelectionArea();
}

// function getAllCallLogs()
// {
//     var xhr_getAllCallLogs = new XMLHttpRequest();
//     xhr_getAllCallLogs.open( "GET", url_getAllCovidRecord, false ); // false for synchronous request
//     xhr_getAllCallLogs.setRequestHeader("Content-Type", "application/json");
//     xhr_getAllCallLogs.setRequestHeader('Authorization', 'Bearer ' + token);
//     xhr_getAllCallLogs.send( null );
//     console.log(xhr_getAllCallLogs.responseText);
//     return xhr_getAllCallLogs.responseText;
// }

function getAllCallLogs()
{

}

function resizeTableDiv(){

    if(document.getElementById("table").clientHeight <= 570){
        document.getElementById("inner_table_div").style.height = document.getElementById("table").clientHeight.toString() + "px";
    }else{
        document.getElementById("inner_table_div").style.height = "570px";

    }
}

function convertToDatetime(datetime_input){
    date = new Date(datetime_input);
    var time = date.toLocaleString().toString();
    year = date.getFullYear();
    month = date.getMonth()+1;
    dt = date.getDate();
    
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    var datetime = year+'-' + month + '-'+dt +time.substring(time.indexOf(',') + 1);
    return datetime;
}

function setOpenCaseColour(){
    var table = document.getElementById("table");
    for (let i in table.rows) {
       let row = table.rows[i]
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       for (let j in row.cells) {
         let col = row.cells[j]
         try {
            // col.style.textAlign = "center";
            // col.style.
            
            col.classList.add("lineBreak");
            if(col.innerHTML == "已處理"){
                col.classList.add("openBox");
                // col.style.backgroundColor = "#076923b8"; 
                // col.colour = "white"; 
             }else if(col.innerHTML == "處理中"){
                col.classList.add("closeBox");
                // col.style.backgroundColor = "#076923b8"; 
                // col.colour = "white"; 
             }else if(i%2 == 1){
                col.classList.add("evenRow");
            }
         } catch (error) {}
         
        //  col.classList.add("colourClass");
        //  console.log(col.innerHTML)
         
         //iterate through columns
         //columns would be accessed using the "col" variable assigned in the for loop
       }  
    }
}


console.log(colIndex);
// var time=new Date('2022-02-04T05:28:31.000+00:00').toLocaleString().toString();
// console.log(time.substring(time.indexOf(',') + 1));

// .substring(string.indexOf(',') + 1)

function constructHeader(list, selector) {         
    // Getting the all column names
    var cols = Headers(list, selector); 
    console.log(cols);
    // Traversing the JSON data
            var row = $('<tr/>');  
            for (var colIndex = 0; colIndex < cols.length; colIndex++){
                
                //removing id, createdTime, updatedTime columns
                if( cols[colIndex]!= 'id'){     
                        var val = cols[colIndex];

                    if (val == null) val = ""; 
                    
                    // row.append($('<td/>').html(val));
                }
    
            }       
            // row.append($('<td/>').html(editBtnOnClickFunction));
            
            // $(selector).append(row);
    
            $('th:nth-child(1)').css('width', '120px');//標題
            $('th:nth-child(2)').css('width', '250px');//備註欄
            $('th:nth-child(3)').css('width', '100px');//電話號碼
            $('th:nth-child(4)').css('width', '130px');//名字
            $('th:nth-child(5)').css('width', '80px');//狀態
            $('th:nth-child(4)').css('text-align', 'center');
            $('th:nth-child(5)').css('text-align', 'center');
            $('th:nth-child(6)').css('width', '190px');  // 回覆 
            $('th:nth-child(7)').css('width', '130px');//跟進人員
            $('th:nth-child(8)').css('width', '200px');//新增時間
            // $('th:nth-child(9)').css('width', '150px');//新增人員
            $('th:nth-child(9)').css('width', '200px');//更新時間
            // $('th:nth-child(11)').css('width', '150px');//更新人員
            $('th:nth-child(10)').css('width', '72px');//View
            // $('th:nth-child(13)').css('width', '53px');//
}

//Contruct Table from JSON response
function constructTable(list, selector) {         
    // Getting the all column names
    var cols = notShowHeaders(list, selector); 
    console.log(cols);

    // Traversing the JSON data
    for (var i = 0; i < list.length; i++) {
            var row = $('<tr/>');  
            
            for (var titleIndex = 0; titleIndex < headerTitle.length; titleIndex++) {
                // console.log( headerTitle[titleIndex]);
                // console.log( cols);
                
                for(var colIndex = 0; colIndex < cols.length; colIndex++){
                    if(cols[colIndex] == headerTitle[titleIndex]){
                        // console.log( headerTitle[titleIndex]);
                        //removing id, createdTime, updatedTime columns
                        if( cols[colIndex]!= 'id' &&  cols[colIndex]!= 'createdBy' &&  cols[colIndex]!= 'updatedBy'){

                            if(cols[colIndex] == 'createdTime' || cols[colIndex] == 'updatedTime'){
                                var val = convertToDatetime(list[i][cols[colIndex]]);
                            }else if(cols[colIndex] == 'status'){
                                if(list[i][cols[colIndex]]=="Open"){
                                    var val ="處理中";
                                }else{
                                    var val ="已處理";
                                }
                            }else if(cols[colIndex] == 'content'){
                                var val ="<div class='outer''><div class='inner'>"+list[i][cols[colIndex]]+"</div></div>";
                            }else{
                                var val = list[i][cols[colIndex]];
                            }
                            // If there is any key, which is matching
                            // with the column name
                            if (val == null) val = ""; 
                            
                            row.append($('<td/>').html(val));
                                // console.log(row)
                        }
                    }
                }
            }       
            // Adding each row to the table
            editBtnOnClickFunction = "<button i onclick='openEditModel(" + i + ");'>檢視</button>"
            row.append($('<td/>').html(editBtnOnClickFunction));
            $(selector).append(row);
    }
    $('td:nth-child(1)').css('width', '120px');//標題
    $('td:nth-child(2)').css('width', '250px');//備註欄
    $('td:nth-child(3)').css('width', '100px');//電話號碼
    $('td:nth-child(4)').css('width', '130px');//名字
    $('td:nth-child(5)').css('width', '80px');//狀態
    $('td:nth-child(4)').css('text-align', 'center');
    $('td:nth-child(5)').css('text-align', 'center');
    $('td:nth-child(6)').css('width', '190px');  // 回覆 
    $('td:nth-child(7)').css('width', '130px');//跟進人員
    $('td:nth-child(7)').css('text-align', 'center');
    $('td:nth-child(8)').css('width', '200px');//新增時間
    $('td:nth-child(8)').css('text-align', 'center');
    // $('td:nth-child(9)').css('width', '150px');//新增人員
    $('td:nth-child(9)').css('width', '200px');//更新時間
    $('td:nth-child(9)').css('text-align', 'center');
    // $('td:nth-child(11)').css('width', '150px');//更新人員
    $('td:nth-child(10)').css('width', '52px');//View
    // $('td:nth-child(13)').css('width', '53px');//
    setOpenCaseColour();
}

// function 


function Headers(list, selector) {
    var columns = [];
    var header = $('<thead/>');

            var headerObject = {
                "type":"標題",
                'content':"備註欄", 
                'phoneNo':"電話號碼", 
                'name':"名字", 
                'status':"狀態", 
                'reply':"回覆", 
                'followBy':"跟進人員", 
                'createTime':"新增時間", 
                // 'createBy':"新增人員", 
                'updatedTime':"更新時間", 
                // 'updateBy':"更新人員"
            };
            row = Object.values(headerObject);
            console.log(row);
            for (var k in row) {
                header.append($('<th/>').html(row[k]));
            }

        header.append($('<th/>').html(""));
        // Appending the header to the table
        $(selector).append(header);
        return header;
}      

function notShowHeaders(list, selector) {
    var columns = [];
    for (var i = 0; i < list.length; i++) {
        var row = list[i];
        for (var k in row) {
            if ($.inArray(k, columns) == -1) {
                //removing id, createdTime, updatedTime columns
                if( k!= 'id'){
                    columns.push(k);
                }
            }
        }
    }
    return columns;
}    

function divideArray(arr, number_of_item_in_page){
    page = [];
    var input = arr;
    if(input.length%number_of_item_in_page == 0){
        number_of_page = Math.floor(input.length/number_of_item_in_page);
    }else{
        number_of_page = Math.floor(input.length/number_of_item_in_page)+1;
    }

    for( i = 0; i < number_of_page; i++){
        page[i] = input.slice(number_of_item_in_page*i, number_of_item_in_page*i+number_of_item_in_page);
        console.log(page[i]);
    }

    current_page_display = current_page.toString();
    total_number_of_result_display =  arr.length.toString();
    total_number_of_page_display =  number_of_page.toString();

    setPageSelectionArea();


}


function setPageSelectionArea(){
    document.getElementById("current_page_text").innerText = current_page_display;
    document.getElementById("number_of_result_text").innerText = total_number_of_result_display;
    document.getElementById("number_of_page_text").innerText = total_number_of_page_display;
}

function pageUp()
{
    resetFilterInputs();
    try{
        document.getElementById("table").innerHTML = "";
    }catch{}
    try{
        document.getElementById("table_header").innerHTML = "";
    }catch{}


    current_page--;

    if(current_page == 1){
        document.getElementById("pageUpBtn").disabled = true;
    }

    document.getElementById("pageDownBtn").disabled = false;

    covidRecordList = page[current_page-1];

    constructTable(covidRecordList, '#table');
    // if(firstTime == true){
        constructHeader(covidRecordList, '#table_header');
    //     firstTime = false;
    // }
    current_page_display = current_page.toString();
    document.getElementById("current_page_text").innerText = current_page_display;

    document.getElementById('logResult').style.display = 'block';
    document.getElementById('noResultLabel').style.display = 'none';
    document.getElementById('noResultLabel_reset').style.display = 'none'; 
    resizeTableDiv();
}

function pageDown(){
    resetFilterInputs();
    try{
        document.getElementById("table").innerHTML = "";
    }catch{}
    try{
        document.getElementById("table_header").innerHTML = "";
    }catch{}

    current_page++;

    if(current_page == number_of_page){
        document.getElementById("pageDownBtn").disabled = true;
    }

    document.getElementById("pageUpBtn").disabled = false;

    covidRecordList = page[current_page-1];

    constructTable(covidRecordList, '#table');

        constructHeader(covidRecordList, '#table_header');


    current_page_display = current_page.toString();
    document.getElementById("current_page_text").innerText = current_page_display;
    document.getElementById('logResult').style.display = 'block';
    document.getElementById('noResultLabel').style.display = 'none';
    document.getElementById('noResultLabel_reset').style.display = 'none'; 
    resizeTableDiv();

}


//Post Covid Record list
function postCallLogs(phoneNo, name, type, content, reply, followedBy, status){
    xhr_postCallLogs.open("POST", url_postCallLogs, true);
    xhr_postCallLogs.setRequestHeader("Content-Type", "application/json");
    // xhr_postCallLogs.setRequestHeader("X-Frame-Options", "DENY");
    // xhr_postCallLogs.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    // xhr_postCallLogs.setRequestHeader("pragma", "no-cache");
    // xhr_postCallLogs.setRequestHeader("X-Content-Type-Options", "nosniff");
    xhr_postCallLogs.setRequestHeader('Authorization', 'Bearer ' + token);

    if(type == "other"){
        type = document.getElementById('editOtherInput').value;
    }

    var toSend = {
        phoneNo: phoneNo,
        name: name,
        type: type,
        content: content,
        reply: reply,
        followedBy: followedBy,
        status: status
    };

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    xhr_postCallLogs.onreadystatechange = function () {

        if (xhr_postCallLogs.readyState == XMLHttpRequest.DONE) {

            if (xhr_postCallLogs.status == "200") {

                console.log("xhr_postCallLogs RESPONSE: " + xhr_postCallLogs.responseText);
                
                if(document.getElementById("searchPhoneNumberInput").value.toString() == null ||document.getElementById("searchPhoneNumberInput").value.toString() == undefined )
                    getCovidRecord();
                else
                    getAllCovidRecord();

                alert("Covid record is created!");

                closeCreateModel();

            }else {
                //error msg
                console.log(xhr_postCallLogs.status);
            }

        } 
    }
    xhr_postCallLogs.send(jsonString);
}

function searchRecordByPhoneNumber(){
    if(document.getElementById("searchPhoneNumberInput").value.toString().length >= 4 && document.getElementById("searchPhoneNumberInput").value.toString().length <= 20 ){
        getCovidRecord(); 
        // getCovidRecord(document.getElementById('logResult').value.toString()); 

    }else{
        alert("請輸入有效的電話號碼");
    }
}


function setSeachbuttonAvailabilty() {
    var input, phoneNumberInput;
    input = document.getElementById("searchPhoneNumberInput");
    phoneNumberInput = input.value;

    if (phoneNumberInput.length >= 4 && phoneNumberInput.length <= 20 ) {
        document.getElementById("searchPhoneNumberbutton").disabled = false;
    }else {
        document.getElementById("searchPhoneNumberbutton").disabled = true;
    }       
    
}


function resetSearchRecordByPhoneNumber(){
    document.getElementById('logResult').style.display = 'none'; 
    document.getElementById('noResultLabel_reset').style.display = 'block'; 
    document.getElementById('noResultLabel').style.display = 'none';
    document.getElementById('searchPhoneNumberForm').reset();
    document.getElementById("searchPhoneNumberInput").value = '';
    document.getElementById("searchPhoneNumberbutton").disabled = true;
    document.getElementById("titleFilterInput").value = '';
    document.getElementById("contentFilterInput").value = '';
    document.getElementById("phoneNoFilterInput").value = '';
    document.getElementById("nameFilterInput").value = '';
    document.getElementById("statusFilterInput").value = '';
    document.getElementById("replyFilterInput").value = '';
    document.getElementById("followedByFilterInput").value = '';
}

function resetFilterInputs(){
    document.getElementById("titleFilterInput").value = '';
    document.getElementById("contentFilterInput").value = '';
    document.getElementById("phoneNoFilterInput").value = '';
    document.getElementById("nameFilterInput").value = '';
    document.getElementById("statusFilterInput").value = '';
    document.getElementById("replyFilterInput").value = '';
    document.getElementById("followedByFilterInput").value = '';
}


function focusOnTitleFilterInputs(){
    console.log("title")
    if(document.getElementById("titleFilterInput").value != ''){
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }
}

function focusOnContentFilterInputs(){
    console.log("content")

    if(document.getElementById("contentFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }
}

function focusOnPhoneNoFilterInputs(){
    console.log("phoneNo")

    if(document.getElementById("phoneNoFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }
}

function focusOnNameFilterInputs(){
    console.log("name")

    if(document.getElementById("nameFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }t
}

function focusOnStatusFilterInputs(){
    console.log("staus")

    if(document.getElementById("statusFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }
}


function focusOnReplyFilterInputs(){
    console.log("reply")

    if(document.getElementById("replyFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("followedByFilterInput").value = '';
    }t
}

function focusOnfollowedByFilterInputs(){
    console.log("followedBy")

    if(document.getElementById("followedByFilterInput").value != ''){
        document.getElementById("titleFilterInput").value = '';
        document.getElementById("contentFilterInput").value = '';
        document.getElementById("phoneNoFilterInput").value = '';
        document.getElementById("nameFilterInput").value = '';
        document.getElementById("replyFilterInput").value = '';
        document.getElementById("statusFilterInput").value = '';
    }
}


//Put Covid Record list
function putCallLogs(phoneNo, name, type, content, reply, followedBy, status){
    xhr_putCallLogs.open("PUT", url_putCallLogs + selectedEditingRecord.id.toString(), true);
    xhr_putCallLogs.setRequestHeader("Content-Type", "application/json");
    // xhr_putCallLogs.setRequestHeader("X-Frame-Options", "DENY");
    // xhr_putCallLogs.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    // xhr_putCallLogs.setRequestHeader("pragma", "no-cache");
    // xhr_putCallLogs.setRequestHeader("X-Content-Type-Options", "nosniff");
    xhr_putCallLogs.setRequestHeader('Authorization', 'Bearer ' + token);

    
    if(type == "other"){
        type = document.getElementById('editOtherInput').value;
    }

    var toSend = {
        id: selectedEditingRecord.id.toString(),
        phoneNo: phoneNo,
        name: name,
        type: type,
        content: content,
        reply: reply,
        followedBy: followedBy,
        status: status
    };

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    xhr_putCallLogs.onreadystatechange = function () {

        if (xhr_putCallLogs.readyState == XMLHttpRequest.DONE) {

            if (xhr_putCallLogs.status == "200") {

                console.log("xhr_putCallLogs RESPONSE: " + xhr_putCallLogs.responseText);
                
                if(document.getElementById("searchPhoneNumberInput").value.toString() == null ||document.getElementById("searchPhoneNumberInput").value.toString() == undefined )
                    getCovidRecord();
                else
                    getAllCovidRecord();

                alert("Covid record is edited!");

                closeEditModel();
                // setTimeout(
                //     function(){
                //         alert("Covid record is edited!");
                //     }, 
                // 0.3*1000);
                

            }else {
                //error msg
                console.log(xhr_putCallLogs.status);
            }

        } 

    }
    xhr_putCallLogs.send(jsonString);
}



//Delete Covid Record list
function deleteCovidRecord(){
    xhr_deleteCovidRecord.open("DELETE", url_deleteCovidRecord + selectedEditingRecord.id.toString(), true);
    xhr_deleteCovidRecord.setRequestHeader("Content-Type", "application/json");
    xhr_deleteCovidRecord.setRequestHeader("X-Frame-Options", "DENY");
    xhr_deleteCovidRecord.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    xhr_deleteCovidRecord.setRequestHeader("pragma", "no-cache");
    xhr_deleteCovidRecord.setRequestHeader("X-Content-Type-Options", "nosniff");
    xhr_deleteCovidRecord.setRequestHeader('Authorization', 'Basic ' + window.btoa("Admin" + ':' + "admin"));


    xhr_deleteCovidRecord.onreadystatechange = function () {

        if (xhr_deleteCovidRecord.readyState == XMLHttpRequest.DONE) {

            if (xhr_deleteCovidRecord.status == "200") {

                console.log("xhr_deleteCovidRecord RESPONSE: " + xhr_deleteCovidRecord.responseText);
                
                getCovidRecord();

                alert("Covid record is deleted!");

                closeEditModel();
                // setTimeout(
                //     function(){
                //         alert("Covid record is deleted!");
                //     }, 
                // 0.3*1000);
                

            }else {
                //error msg
                console.log(xhr_deleteCovidRecord.status);
            }

        } 
    }
    xhr_deleteCovidRecord.send();
}

// Get the modal
var modal = document.getElementById("editModel");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openEditModel(index){

    document.getElementById('editModel').style.display='block';
    console.log(covidRecordList[index]);
    selectedEditingRecord = covidRecordList[index];
    console.log(index);

    // document.getElementById("editTypeInput").defaultValue = selectedEditingRecord.title;
    // document.getElementById("editContentInput").defaultValue = selectedEditingRecord.content;

    try {
        document.getElementById("editForm").phoneNo.defaultValue = selectedEditingRecord.phoneNo;
    } catch (error) {}
    document.getElementById("editForm").name.defaultValue = selectedEditingRecord.name;
    setDefaultEditTitle();
    document.getElementById("editForm").content.defaultValue = selectedEditingRecord.content;
    document.getElementById("editForm").reply.defaultValue = selectedEditingRecord.reply;
    document.getElementById("editForm").followedBy.defaultValue = selectedEditingRecord.followedBy;
    setDefaultEditStatus();    
    //WAIT
    //document.getElementById("editForm").status.defaultValue = selectedEditingRecord.status;
}

function setDefaultEditStatus(){

    if(selectedEditingRecord.status == "Open"){
        document.getElementById("openOption").selected = true;
        document.getElementById("closeOption").selected = false;
    }else{
        document.getElementById("openOption").selected = false;
        document.getElementById("closeOption").selected = true;
    }
}

function setDefaultEditTitle(){

    if(selectedEditingRecord.type == "膳食"){
        document.getElementById("foodOption").selected = true;
        document.getElementById("environmentOption").selected = false;
        document.getElementById("medicalOption").selected = false;
        document.getElementById("otherOption").selected = false;
        document.getElementById('editOtherInput').defaultValue = '';
    }else if(selectedEditingRecord.type == "環境及設備"){
        document.getElementById("foodOption").selected = false;
        document.getElementById("environmentOption").selected = true;
        document.getElementById("medicalOption").selected = false;
        document.getElementById("otherOption").selected = false;
        document.getElementById("editOtherInput").defaultValue = '';   
    }else if(selectedEditingRecord.type == "醫療查詢"){
        document.getElementById("foodOption").selected = false;
        document.getElementById("environmentOption").selected = false;
        document.getElementById("medicalOption").selected = true;
        document.getElementById("otherOption").selected = false;
        document.getElementById("editOtherInput").defaultValue = '';   
    }else{
        document.getElementById("foodOption").selected = false;
        document.getElementById("environmentOption").selected = false;
        document.getElementById("medicalOption").selected = false;
        document.getElementById("otherOption").selected = true;
        document.getElementById("editOtherInput").disabled = false; 
        document.getElementById("editOtherInput").defaultValue = selectedEditingRecord.type; 
        document.getElementById('editOtherInput').value = document.getElementById('editOtherInput').defaultValue;
  
    }
    // document.getElementById("editForm").title.defaultValue = selectedEditingRecord.title;
}

function openLoadingModel(){
    console.log("Open");
    document.getElementById('loadingModel').style.display='block';
    // getAllCovidRecord();
    console.log("Open");
    document.getElementById("hiddenSearchAllButton").click();
}

function closeLoadingModel(){
    console.log("Close");
    document.getElementById('loadingModel').style.display='none';
    console.log("Close");
}

function openCreateModel(){
    resetCreatingInputDefaultValues();
    // if()
    document.getElementById('createOtherInput').style.disabled = true;
    try {
        document.getElementById("createForm").phoneNo.defaultValue = document.getElementById('searchPhoneNumberInput').value.toString();
    } catch (error) { }
    document.getElementById('createModel').style.display='block';


}


function closeEditModel(){
    document.getElementById('editModel').style.display = 'none';
}

function closeCreateModel(){
    document.getElementById('createModel').style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function displayEditOtherInput() {
    if (document.getElementById('editTypeInput').value == "other") {
        document.getElementById('editOtherInput').disabled = false;
        document.getElementById('editOtherInput').value = document.getElementById('editOtherInput').defaultValue;
    } else {
        document.getElementById('editOtherInput').disabled = true;
        document.getElementById('editOtherInput').value = '';
    }
}

function displayCreateOtherInput() {
    if (document.getElementById('createTitleInput').value == "other") {
        document.getElementById('createOtherInput').disabled = false;
    } else {
        document.getElementById('createOtherInput').disabled = true;
    }
}

//Filting by title
function titleFiltering() {
    var input, c, table, tr, td, i, txtValue;
    input = document.getElementById("titleFilterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    console.log(tr)
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        console.log(td)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnTitleFilterInputs();
}

function contentFiltering() {
    var cinput, cfilter, ctable, ctr, ctd, ci, ctxtValue;
    cinput = document.getElementById("contentFilterInput");
    cfilter = cinput.value.toUpperCase();
    ctable = document.getElementById("table");
    ctr = ctable.getElementsByTagName("tr");
    for (ci = 0; ci < ctr.length; ci++) {
        ctd = ctr[ci].getElementsByTagName("td")[1];
        if (ctd) {
            ctxtValue = ctd.textContent || ctd.innerText;
            if (ctxtValue.toUpperCase().indexOf(cfilter) > -1) {
                ctr[ci].style.display = "";
            } else {
                ctr[ci].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnContentFilterInputs();
}

function phoneNoFiltering() {
    var pinput, pfilter, ptable, ptr, ptd, pi, ptxtValue;
    pinput = document.getElementById("phoneNoFilterInput");
    pfilter = pinput.value.toUpperCase();
    ptable = document.getElementById("table");
    ptr = ptable.getElementsByTagName("tr");
    for (pi = 0; pi < ptr.length; pi++) {
        ptd = ptr[pi].getElementsByTagName("td")[2];
            if (ptd) {
            ptxtValue = ptd.textContent || ptd.innerText;
            if (ptxtValue.toUpperCase().indexOf(pfilter) > -1) {
                ptr[pi].style.display = "";
            } else {
                ptr[pi].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnPhoneNoFilterInputs();
}

function nameFiltering() {
    var ninput, nfilter, ntable, ntr, ntd, ni, ntxtValue;
    ninput = document.getElementById("nameFilterInput");
    nfilter = ninput.value.toUpperCase();
    ntable = document.getElementById("table");
    ntr = ntable.getElementsByTagName("tr");
    for (ni = 0; ni < ntr.length; ni++) {
        ntd = ntr[ni].getElementsByTagName("td")[3];
        if (ntd) {
            ntxtValue = ntd.textContent || ntd.innerText;
            if (ntxtValue.toUpperCase().indexOf(nfilter) > -1) {
                ntr[ni].style.display = "";
            } else {
                ntr[ni].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnNameFilterInputs();
}

function statusFiltering() {
    var sinput, sfilter, stable, str, std, si, stxtValue;
    sinput = document.getElementById("statusFilterInput");
    sfilter = sinput.value;
    console.log(sfilter);
    stable = document.getElementById("table");
    str = stable.getElementsByTagName("tr");
    for (si = 0; si < str.length; si++) {
        std = str[si].getElementsByTagName("td")[4];
        if (std) {
            stxtValue = std.textContent || std.innerText;
        if (stxtValue.indexOf(sfilter) > -1) {
            str[si].style.display = "";
        } else {
            str[si].style.display = "none";
        }
        }       
    }
    resizeTableDiv();
    focusOnStatusFilterInputs();
}

function replyFiltering() {
    var ninput, nfilter, ntable, ntr, ntd, ni, ntxtValue;
    ninput = document.getElementById("replyFilterInput");
    nfilter = ninput.value.toUpperCase();
    ntable = document.getElementById("table");
    ntr = ntable.getElementsByTagName("tr");
    for (ni = 0; ni < ntr.length; ni++) {
        ntd = ntr[ni].getElementsByTagName("td")[5];
        if (ntd) {
            ntxtValue = ntd.textContent || ntd.innerText;
            if (ntxtValue.toUpperCase().indexOf(nfilter) > -1) {
                ntr[ni].style.display = "";
            } else {
                ntr[ni].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnReplyFilterInputs();
}

function followedByFiltering() {
    var ninput, nfilter, ntable, ntr, ntd, ni, ntxtValue;
    ninput = document.getElementById("followedByFilterInput");
    nfilter = ninput.value.toUpperCase();
    ntable = document.getElementById("table");
    ntr = ntable.getElementsByTagName("tr");
    for (ni = 0; ni < ntr.length; ni++) {
        ntd = ntr[ni].getElementsByTagName("td")[6];
        if (ntd) {
            ntxtValue = ntd.textContent || ntd.innerText;
            if (ntxtValue.toUpperCase().indexOf(nfilter) > -1) {
                ntr[ni].style.display = "";
            } else {
                ntr[ni].style.display = "none";
            }
        }       
    }
    resizeTableDiv();
    focusOnfollowedByFilterInputs();
}

function resetEditingInputDefaultValues(){
    document.getElementById("editForm").reset();
}

function resetCreatingInputDefaultValues(){
    document.getElementById("createForm").reset();
}



function changeToOverviewPage(){
    document.getElementById('username_page').style.display='none';
    document.getElementById('userDetails_page').style.display='none';
    document.getElementById('overview_page').style.display='block';
    document.getElementById('result_page').style.display='none';
    document.getElementById('navbar_username').classList.remove("active");
    document.getElementById('navbar_userDetails').classList.remove("active");
    document.getElementById('navbar_overview').classList.add("active");
    document.getElementById('navbar_result').classList.remove("active");  
}

function changeToUsernamePage(){
    document.getElementById('username_page').style.display='block';
    document.getElementById('userDetails_page').style.display='none';
    document.getElementById('overview_page').style.display='none';
    document.getElementById('result_page').style.display='none';
    document.getElementById('navbar_username').classList.add("active");
    document.getElementById('navbar_userDetails').classList.remove("active");
    document.getElementById('navbar_overview').classList.remove("active");
    document.getElementById('navbar_result').classList.remove("active");
}

function changeToUserDetailsPage(){
    document.getElementById('username_page').style.display='none';
    document.getElementById('userDetails_page').style.display='block';
    document.getElementById('overview_page').style.display='none';
    document.getElementById('result_page').style.display='none';
    document.getElementById('navbar_username').classList.remove("active");
    document.getElementById('navbar_userDetails').classList.add("active");
    document.getElementById('navbar_overview').classList.remove("active");
    document.getElementById('navbar_result').classList.remove("active");
}



function changeToResultPage(){
    document.getElementById('username_page').style.display='none';
    document.getElementById('userDetails_page').style.display='none';
    document.getElementById('overview_page').style.display='none';
    document.getElementById('result_page').style.display='block';
    document.getElementById('navbar_username').classList.remove("active");
    document.getElementById('navbar_userDetails').classList.remove("active");
    document.getElementById('navbar_overview').classList.remove("active");
    document.getElementById('navbar_result').classList.add("active");
}   



