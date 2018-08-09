$(document).ready(function(){
  $("form").submit(function(){
      var abortion = $("input:radio[name=abortion]:checked").val();
      var president = $("input:radio[name=president]:checked").val();
  if (abortion) {
      if(abortion === "prochoice" && president === "obama"){
        alert("You're a democrat!");
      }
        else if(abortion === "prolife" && president === "trump"){
          alert("You're a republican!")
        }
      else if (abortion === "prolife" || president === "trump") {
        alert('You are moderate!')
      }
    }
  });
});
