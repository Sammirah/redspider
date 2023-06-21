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
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
         name = messageData['name'];
         message = messageData['messa;ge'];
         like = messageData['like'];
         messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firebaseMessageId+ " value="+like+"onclick='updateLike(this.id)'>"
         spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row = nameWithTag + messageWithTag + spanWithTag;
         document.getElementById("output").innerHTML += row;
function enviar(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
      } });  }); }
getData();
function updateLike(messageId) {
      console.log("botão like pressionado - " + messageId);
      button_id = messageId;
      likes = document.getElementById(button_id).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);
      
      firebase.database().ref(roomName).child(messageId).update({
            like : updatedLikes
      })
}
function logout() {
      localStorage.removeItem("userName")
      localStorage.removeItem("userName")
      window.location.replace("index.html")
}