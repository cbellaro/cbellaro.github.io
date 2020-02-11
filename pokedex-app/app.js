$(() => {
    let userInput = 0
    let incVal = () => {
        userInput++
    };
    let decVal = () => {
        userInput--
    }

    $('#on-off').on('click', (event)=>{
        event.preventDefault();
        $('#screen').toggleClass('on')
        $('#screen').toggleClass('off')
        if($('#screen').attr('class') === "off"){
            $('#screen').css('animation','fadeOut .2s');
            $('#sprite').css('visibility','hidden')
            $('#border-image').css('visibility','hidden')
        } else if ($('#screen').attr('class') === "on"){
            $('#screen').css('animation', 'fadeIn .2s');
            $('#sprite').css('visibility','visible')
            $('#border-image').css('visibility','visible')
        }
    });

    $('form').on('submit', (event)=>{
        event.preventDefault();
        userInput = $('input[type="number"]').val()
        if(userInput > 150){
            userInput = 150;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%');
                let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","10%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
            },
            () => {
                console.log('bad request');
            }
        );
    })

    $('.right').on('click', (event)=>{
        event.preventDefault();
        incVal();
        if(userInput>150){
            userInput = 1;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%');
                let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
            },
            () => {
                console.log('bad request');
            }
        );
    })

    $('.up').on('click', (event)=>{
        event.preventDefault();
        incVal();
        if(userInput>150){
            userInput = 1;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%');
                let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
            },
            () => {
                console.log('bad request');
            }
        );
    })

    $('.left').on('click', (event)=>{
        event.preventDefault();
        decVal();
        if(userInput<1){
            userInput = 150;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%');
                let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
            },
            () => {
                console.log('bad request');
            }
        );
    })

    $('.down').on('click', (event)=>{
        event.preventDefault();
        decVal();
        if(userInput<1){
            userInput = 150;
        }
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                let $sprite = $('#sprite-image').attr('src','sprites/' + userInput + '.png').css('position','absolute').css('margin-left','1%').css('width','35%');
                let $name = $('#pokemon-name').text(data.names[3].name).css("font-size","46px").css('margin-left','40%').css('margin-top','10%');
                let $class = $('#classification').text(data.genera[2].genus).css("font-size","36px").css('margin-left','40%').css('margin-top','-6%');
                let $dexNum = $('#dex-num').text("No. " + userInput).css("font-size","46px").css('position','absolute').css('margin-left','10%').css('margin-top','32%');
                let $borderImage = $('#border-image').attr('src','sprites/border.png').css("width","80%").css('position','relative').css('margin-top','10%').css('margin-left','10%');
                let $flavText = $('#flavor-text').text(data.flavor_text_entries[53].flavor_text).css("font-size","30px").css('position','absolute').css('margin-left','2%').css('margin-top','1%');
            },
            () => {
                console.log('bad request');
            }
        );
    })
})
