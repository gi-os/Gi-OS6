/*response formulation code*/
function makeresponse() {
  var input = [ document.getElementById("say"),
               
               ]

  var text = document.getElementById("say");
  var res = document.getElementById("response");
  //hi
  if (text.value === "hello" || text.value === "hi" || text.value === "Hi! What's Up?") {
    res.innerHTML = "Hi! how are you?";
    //response good               
  } else if (text.value === "i am good") {
    res.innerHTML = "Ok Great!";
    //response good               
  } else if (text.value === "i am not good") {
    res.innerHTML = "That's too bad.";
    //bye
  } else if (text.value === "bye") {
    res.innerHTML = "Goodbye";
    //question existence
  } else if (text.value === "what are you" || text.value === "who are you") {
    res.innerHTML = "Im miku! your personal assistant.";
    //what is life                   
  } else if (text.value === "what is life") {
    res.innerHTML = "Im going to need time to think over that.";
    //open the pod bay doors            
  } else if (text.value === "open the pod bay doors") {
    res.innerHTML = "Im sorry dave, im afraid I can't do that.";
    //fav color                   
  } else if (text.value === "what is your favorite color") {
    res.innerHTML = "my favorite color is blue!";
    //love                  
  } else if (text.value === "i love you") {
    res.innerHTML = "I think we should just be friends...";
    //feel                
  } else if (text.value === "how are you") {
    res.innerHTML = "I am a robot, I do not feel.";
    //feel                
  } else if (text.value === "what is love") {
    res.innerHTML = "Baby dont hurt me, dont hurt me, no more.";
    //life              
  } else if (text.value === "do i have a life") {
    res.innerHTML = "No, because you are wasting your time talking to me.";
    //talk             
  } else if (text.value === "let's talk") {
    res.innerHTML = "Ok!";
    //no response made
  } else {
    res.innerHTML = "Hello There!";
  }
  //COPY AND PASTE CODE    }else if (text.value === "INSERT WORD") { res.innerHTML = "INSERT RESPONSE";

}

var t = setInterval(makeresponse, 1000)
