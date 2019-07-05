
var firebaseConfig = {
    apiKey: "AIzaSyDZPRYZ_BjlxUkumZCJ1PKfQup-hVpde0w",
    authDomain: "project-1-1920f.firebaseapp.com",
    databaseURL: "https://project-1-1920f.firebaseio.com",
    projectId: "project-1-1920f",
    storageBucket: "project-1-1920f.appspot.com",
    messagingSenderId: "602046626251",
    appId: "1:602046626251:web:181c48435faca396"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    let train_name = $("#train-name").val().trim();
    let destination = $("#destination").val().trim();
    let train_time = $("#first-train-time").val().trim();
    let frequency = $("#frequency").val().trim();

    const train = {
        name: train_name,
        destination: destination,
        time: train_time,
        frequency: frequency
    };
    alert("Train Added!");
    database.ref().push(train);
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");
  });

  database.ref().on('child_added', function(snapshot){
    const train_name = snapshot.val().name;
    const destination = snapshot.val().destination;
    const train_time = snapshot.val().time;
    const frequency = snapshot.val().frequency;

    let first_train = moment(train_time, 'HH:mm');
    let time_difference = moment().diff(first_train, 'minutes');
    let time_remain = time_difference % frequency;
    let next_arrival = frequency - time_remain;
    let next_time_train = moment().add(next_arrival, 'minutes');

    let newRow = $("<tr>").append(
        $("<td>").text(train_name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(moment(next_time_train).format('HH:mm')),
        $("<td>").text(next_arrival)
    );
    $('tbody').append(newRow);
  });
