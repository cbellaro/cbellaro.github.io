$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();
        let userInput = $('input[type="number"]').val()
        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon-species/' + userInput +'/'
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            () => {
                console.log('bad request');
            }
        );
    })
})
