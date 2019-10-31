$(document).ready(function () {
    
    var config = {
        apiKey: "AIzaSyBQVqxm-ogWTb6C50vhKkzL1TCgzp1X1cs",
        authDomain: "dave-s-app-99c9e.firebaseapp.com",
        databaseURL: "https://dave-s-app-99c9e.firebaseio.com",
        projectId: "dave-s-app-99c9e",
        storageBucket: "dave-s-app-99c9e.appspot.com",
        messagingSenderId: "198404903865",
        appId: "1:198404903865:web:1904441f472ff2090a9c68"
    };

    firebase.initializeApp(config);
    
    var database = firebase.database();
    let name = "";
    let destination = "";
    let ftTime = "";
    let frequency = "";
    let nextArrival = 0;
    let minTil = 0;
    let difference = 0;
    let now = moment();
  
    $("#submit").on("click", function(e) {
        e.preventDefault();

        $("#firstrow").css("display", "none");
        
        name = $("#name-input").val().trim();
            console.log("name is " + name);

        destination = $("#dest-input").val().trim();
            console.log("dest is " + destination);

        ftTime = $("#ft-input").val().trim();

            console.log("ftTime is " + ftTime);

        ftTime = moment(ftTime, "hh:mm a");
            console.log(ftTime);

        frequency = $("#freq-input").val().trim();

        let newFrequency = parseInt(frequency);
            console.log(newFrequency);

        let now = moment();
        let ft = ftTime;

            console.log(now);
            console.log(ft);

        difference = now.diff(ft, "minutes");

            console.log(difference);
        
        let numNeeded = (difference / newFrequency);

            console.log(numNeeded);

        let nextTrain = Math.ceil(numNeeded);

            console.log(nextTrain);

        minTil = ((nextTrain - numNeeded) * frequency);

            console.log(minTil);

        minTil = Math.ceil(minTil);
        
            console.log(minTil);
            console.log("I was clicked!");

        ftTime = ftTime.format("hh:mm a")
        ftTime = ftTime.toString();

        nextArrival = moment().add(minTil, "minutes");
        nextArrival = nextArrival.format("hh:mm a").toString();
    



// }); // <===== <===== REMOVE THIS WHEN THE ONCLICK WORKS !>!>!>!>!>!>

        database.ref().push({
            name: name,
            destination: destination,
            ftTime: ftTime,
            frequency: frequency,
            nextArrival: nextArrival,
            minTil: minTil
    });
  
  
        console.log(name, frequency, nextArrival, minTil);
});   
    database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().ftTime);
        console.log(snapshot.val().frequency);

        
    
    
        $("#table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().ftTime + "</td><td id='mw'>"+snapshot.val().frequency+"</td><td>" + snapshot.val().nextArrival + "</td><td id='tb'>"+snapshot.val().minTil+"</td></tr>");
        },
    
        function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
        
    });

    $("#ft-input").focus(function(){
        $("#mayday").css("display", "block");
    });

    $("#freq-input").focus(function() {
        $("#calc").css("display", "block");
        window.scrollTo(0,document.body.scrollHeight);
    });

    $("#doMath").on("click", function(){

        let hours = document.getElementById("hours").value;
        let min = document.getElementById("min").value;
        hours = parseInt(hours);
        min = hours * 60;
        document.getElementById("min").value = min;
        console.log(hours);
        console.log("yo");
        console.log(min);
    })
  
  });