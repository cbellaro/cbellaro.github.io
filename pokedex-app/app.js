$(() => {
    // default value used if the form isn't used, allows pokedex to start at 1 or 150
    let userInput = 0
    // function to increment user input value
    let incVal = () => {
        userInput++
    };
    // function to reduce user input value
    let decVal = () => {
        userInput--
    }

    // monitor if screen width is larger than 1024px and store as value
    let mq = window.matchMedia("(min-width: 1024px)");

    // create an on/off button that will toggle between classes "on" and "off" on the appropraite button div
    $('#on-off').on('click', (event)=>{
        event.preventDefault();
        $('#screen').toggleClass('on')
        $('#screen').toggleClass('off')
        // if the screen's class is toggled to "off" then trigger fadeout animation and the hide images
        if($('#screen').attr('class') === "off"){
            $('#screen').css('animation','fadeOut .2s');
            $('#sprite').css('visibility','hidden')
            $('#border-image').css('visibility','hidden')
        // if the screen's class is toggled to "on" then trigger fadein animation and show images
        } else if ($('#screen').attr('class') === "on"){
            $('#screen').css('animation', 'fadeIn .2s');
            $('#sprite').css('visibility','visible')
            $('#border-image').css('visibility','visible')
        }
    });

    // take the form from the html and pull in the relevant pokemon's info from the API, store them on the screen div
    $('form').on('submit', (event)=>{
        event.preventDefault();
        // user input must be a number, can't exceed 150 (original number of Pokemon on the Kanto Pokedex. Exclude Mew because he doesn't have flavor text in the original game so it's missing from API as well)
        userInput = $('input[type="number"]').val()
        if(userInput > 150){
            userInput = 150;
        }
        // take the user input and apply it to the API url to get the relevantinfo for that pokemon
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                // watch to see if the screen exceeds 1024px, if so then format appropriately
                if (mq.matches){
                    // insert sprite image based on user input from sprite image folder onto screen from API
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','5%').css('width','35%').css('max-width','175px');
                    // insert pokemon's name based on user input onto screen
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","64px").css('margin-left','30%').css('margin-top','3%');
                    // insert pokemon's class based on user input onto screen from API
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","42px").css('margin-left','30%').css('margin-top','-6%');
                    // insert pokemon's pokedex number based on user input from original Kanto region onto screen from API
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','8%').css('margin-top','20%');
                    // insert a border image onto screen
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('max-width','700px').css('position','relative').css('margin-top','1%').css('margin-left','10%');
                    // insert pokemon's bio based on user input from original Kanto region onto screen from API
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","36px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                } else {
                    // all same as the above but instead watch to see if the screen is smaller than 1024px, if so then format appropriately
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                }
            },
            () => {
                // if the API doesn't connect properly log "bad request"
                console.log('bad request');
            }
        );
    })

    // takes entire code block from above but is applied to the "right button" div from the html and is activated upon a click
    $('.right').on('click', (event)=>{
        event.preventDefault();
        // on click increase the value
        incVal();
        // if the pokedex hits 150 then cycle back to 1
        if(userInput>150){
            userInput = 1;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                if (mq.matches){
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','5%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","64px").css('margin-left','30%').css('margin-top','3%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","42px").css('margin-left','30%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','8%').css('margin-top','20%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('max-width','700px').css('position','relative').css('margin-top','1%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","36px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                } else {
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                }
            },
            () => {
                console.log('bad request');
            }
        );
    })

    // takes entire code block from above but is applied to the "up button" div from the html and is activated upon a click
    $('.up').on('click', (event)=>{
        event.preventDefault();
        // on click increase the value
        incVal();
        if(userInput>150){
            userInput = 1;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                // if the pokedex hits 150 then cycle back to 1
                if (mq.matches){
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','5%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","64px").css('margin-left','30%').css('margin-top','3%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","42px").css('margin-left','30%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','8%').css('margin-top','20%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('max-width','700px').css('position','relative').css('margin-top','1%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","36px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                } else {
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                }
            },
            () => {
                console.log('bad request');
            }
        );
    })

    // takes entire code block from above but is applied to the "left button" div from the html and is activated upon a click. unlike previous code will cycle through the list backwards
    $('.left').on('click', (event)=>{
        event.preventDefault();
        // on click decrease the value
        decVal();
        // if the pokedex hits 1 then cycle back to 150
        if(userInput<1){
            userInput = 150;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                if (mq.matches){
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','5%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","64px").css('margin-left','30%').css('margin-top','3%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","42px").css('margin-left','30%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','8%').css('margin-top','20%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('max-width','700px').css('position','relative').css('margin-top','1%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","36px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                } else {
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                }
            },
            () => {
                console.log('bad request');
            }
        );
    })

    // takes entire code block from above but is applied to the "down button" div from the html and is activated upon a click. like the left button code will cycle through the list backwards
    $('.down').on('click', (event)=>{
        event.preventDefault();
        // on click decrease the value
        decVal();
        // if the pokedex hits 1 then cycle back to 150
        if(userInput<1){
            userInput = 150;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                if (mq.matches){
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','5%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","64px").css('margin-left','30%').css('margin-top','3%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","42px").css('margin-left','30%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','8%').css('margin-top','20%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('max-width','700px').css('position','relative').css('margin-top','1%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","36px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                } else {
                    let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%').css('max-width','175px');
                    let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                    let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                    let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                    let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                    let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
                }
            },
            () => {
                console.log('bad request');
            }
        );
    })
})

// inspired by Nintendo Co. Ltd., Creature Inc., and Game Freak Inc.'s Pokemon franchise, namely Pokemon Red and Blue for the original Gameboy ass well as the original anime series.
// Links to images that inspired the design:
    // https://i.imgur.com/2qYWPh5.png
    // https://i.imgur.com/7impNY3.jpg
    // https://i.imgur.com/ZPTcnTZ.jpg
// All Pokemon sprites taken from https://www.serebii.net/pokedex/
