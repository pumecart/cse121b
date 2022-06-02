
const today = new Date();

let hoursInDay;

hoursInDay = today.getHours();

let message1;

if (hoursInDay >= 0 && hoursInDay <= 7) {
  message1 = "Sleep time!";
} else {
  message1 = "It's a brand new day!";
}

let message2;

switch (hoursInDay) {
  case 0:
    message2 = "Get some rest!  Baby will be up at any momemt so take advantage of every minute you have to sleep!";
    break;
  case 1:
    message2 = "Get some rest!  Baby will be up at any momemt so take advantage of every minute you have to sleep!";
    break;
  case 2:
    message2 = "Get some rest!  Baby will be up at any momemt so take advantage of every minute you have to sleep!";
    break;
  case 3:
    message2 = "Get some rest!  Baby will be up at any momemt so take advantage of every minute you have to sleep!";
    break;
  case 4:
    message2 = "Get some rest!  Baby will be up at any momemt so take advantage of every minute you have to sleep!";
    break;
  case 5:
    message2 = "The Lord has blessed you with another day.  Start this day with a prayer and a list of goals for the day!";
    break;
  case 6:
    message2 = "Cherish the moments you have helping your little ones get ready for their day.  Shower them with love!";
    break;
  case 7:
    message2 = "Work has started!  Remember to breathe, especially through the tough calls.";
    break;
  case 8:
    message2 = "What are 3 things that you are grateful for today?  Write them down!";
    break;
  case 9:
    message2 = "Breakfast time!!!  Make the decision now to fuel your body with clean and healthy foods right now!";
    break;
  case 10:
    message2 = "Don't forget to drink water!";
    break;
  case 11:
    message2 = "Lunch time!!!  Take this time to unwind and forget about the events this morning.  Spend time with baby and enjoy!";
    break;
  case 12:
    message2 = "You've made it to the 2nd half of the work day!";
    break;
  case 13:
    message2 = "Break time!  Check on baby and give him some love!";
    break;
  case 14:
    message2 = "Winnie will be getting off the bus soon!  Be ready to great her at the stop!";
    break;
  case 15:
    message2 = "Work is FINISHED!!!  You did it, but it's not quite time to rest!  Time to make Winnie's snack!";
    break;
  case 16:
    message2 = "Time to play with the kiddos!  LOVE this time!";
    break;
  case 17:
    message2 = "Dinner time!  What yummy meal are you going to make?";
    break;
  case 18:
    message2 = "Your husband is so amazing!  Go spend some time with him.  He needs attention too!";
    break;
  case 19:
    message2 = "Go take a nice relaxing bath AFTER you've helped the kiddos get ready for bed.  You deserve it!";
    break;
  case 20:
    message2 = "Finally, time to study!  How amazing it is to learn new things!";
    break;
  case 21:
    message2 = "Finally, time to study!  How amazing it is to learn new things!";
    break;
  case 22:
    message2 = "Finally, time to study!  How amazing it is to learn new things!";
    break;
  case 23:
    message2 = "Finally, time to study!  How amazing it is to learn new things!";
    break;
  default:
    message2 = "Unknown - " + hoursInDay;
    break;
}

document.querySelector("#time").textContent = today.toLocaleTimeString();
document.querySelector("#message1").textContent = message1;
document.querySelector("#message2").textContent = message2;

