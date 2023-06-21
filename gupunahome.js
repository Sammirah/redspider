const firebaseConfig = {
    apiKey: "AIzaSyC48i_u-ES5CeQrlvnQMBga4T2ATPKdf2s",
    authDomain: "voltathiagovolta.firebaseapp.com",
    databaseURL: "https://voltathiagovolta-default-rtdb.firebaseio.com",
    projectId: "voltathiagovolta",
    storageBucket: "voltathiagovolta.appspot.com",
    messagingSenderId: "1018465337209",
    appId: "1:1018465337209:web:987491c8265a737d2c79a8",
    measurementId: "G-K8815RP474"
  };
  firebase.initializeApp(firebaseConfig)
  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
document.getElementById("username").innerHTML="bem-vindo(a)" + username + "!"
function addRoom() {
    room_name = document.getElementById("room_name").ariaValueMax;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "gupunahome.html"
}
function getData() { firebase.database().ref("/").on('value', function(snapshot)
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childeSNapshot)
{childKey = childSnapshot.Key;
roomNames = childeKey
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row;
})})}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.seItem("room_name", name);
    window.location = "kwitterPage.html";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("home_name");
    window.location = "index.html"; 
}