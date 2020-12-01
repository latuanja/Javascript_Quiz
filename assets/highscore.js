function highScores() {
    stopTime();
    clearDetails();
  
    timerTab.setAttribute("style", "visibility: hidden;");
  
    //get scores from storage
    let storedScores = JSON.parse(localStorage.getItem("highScores")); 
  
    // draw heading
    let heading = document.createElement("h2");
    heading.setAttribute("id", "main-heading");
    heading.textContent = "Top 5 High Score Hall of Fame";
  
    mainEl.appendChild(heading);
  
    // Render a new li for each score
    // TODO check for this error 
    if ( storedScores !== null ) {
      // sort scores
      storedScores.sort((a,b) => (a.score < b.score) ? 1: -1);
  
      // sets the number of scores to display to 5 or the number of games played. Which ever is less
      let numScores2Display = 5;
      if ( storedScores.length < 5 ) { 
        numScores2Display = storedScores.length; 
      }
  
      for (var i = 0; i < numScores2Display; i++) {
        var s = storedScores[i];
  
        var p = document.createElement("p");
        p.textContent = s.name + " " + s.score + " ( " + s.type + " )";
        mainEl.appendChild(p);
      }
    } else {
      var p = document.createElement("p");
      p.textContent =  "Your Initials Here!"
      mainEl.appendChild(p);
    }
  
  
    // creates button to start the game
    let playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.setAttribute("class", "btn btn-secondary");
    playAgain.textContent = "Play!";
  
    mainEl.appendChild(playAgain);
  
    playAgain.addEventListener("click", init);
  }
  
  highscoreDiv.addEventListener("click", highScores);