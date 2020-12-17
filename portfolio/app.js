$(() => {
  $('form').on('submit', (event)=>{
    event.preventDefault();
    userInput = $('input[type="text"]').val()
    if (userInput === "run functional_pokedex.exe" || userInput === "run functional pokedex.exe" || userInput === "run functional-pokedex.exe" ){
      window.open("https://cbellaro.github.io/pokedex-app/");
    } else if (userInput === "run sneakfreaks.exe"){
      window.open("https://sneakfreaks-frontend.herokuapp.com/")
    } else if (userInput === "run movie_critiq.exe" || userInput === "run movie critiq.exe" || userInput === "run movie-critiq.exe"){
      window.open("https://movie-critique.herokuapp.com/")
    } else if (userInput === "run doodle_duel.exe" || userInput === "run doodle duel.exe" || userInput === "run doodle-duel.exe"){
      window.open("https://doodle-duel-frontend.herokuapp.com/")
    } else if (userInput === "run resume.exe"){
      window.open("https://docs.google.com/document/d/15Tu8xUn_TIs4eEX32bRWLBkKd1ooUREcxWQtuXdD-nY/edit?usp=sharing")
    } else if (userInput === "run blog.exe"){
      window.open("https://medium.com/@cbellaro")
    } else if (userInput === "run github.exe"){
      window.open("https://github.com/cbellaro/")
    } else if (userInput === "run linkedin.exe"){
      window.open("https://www.linkedin.com/in/chris-bellaro/")
    } else (alert("Error. Please input a listed command."))
  })

  $('form').on('click', (event)=>{
    event.stopPropagation()
    $('#user-input').toggleClass('off')
    $('.input').css('border-right', 'transparent')
  })

  $('.screen').on('click', (event)=>{
    $('#user-input').toggleClass('on ')
    $('.input').css('border-right', '1px solid rgb(92, 217, 30)').css('animation', 'animated-caret .75s step-end infinite')
  })
})
