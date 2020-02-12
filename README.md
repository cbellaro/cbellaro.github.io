This project makes use of HTML, CSS, and JavaScript to recreate the Pokedex for the original Kanto region featured in Pokemon Red and Blue for the original Gameboy, as well as the original anime series.

The overall goal of my HTML and CSS was to emulate this device complete with its retro aesthetic. This includes a "screen" that is able to be toggled on and off, and can also display the desired Pokemon's information by either form submission or button press. The on/off button's animation is inspired by the original gameboy's LCD screen, as well as CRT television monitors used at the time.

In conjunction with the aforementioned tools and the data provided by https://pokeapi.co/, I was able to use AJAX to pull in the information required to recreate the Pokedex. This includes the Pokemon's name, Pokedex number, classification, and flavor text. I was then able to utilize jQuery to change elements within my HTML and CSS within the DOM to update the information present on the Pokedex's "screen."

The approach I took to designing this project was to start with designing for mobile. I started with attempting to call on my API. Upon successfully calling on the API I moved onto the HTML and worked my way from top to bottom using several reference pictures to recreate the Pokedex. I then worked on the CSS, adjusting it accordingly as the idea changed/expanded when writing my JavaScript. After having a rough draft of my CSS completed I was then able to start building the logic to display the Pokemon's information on the "screen" using JavaScript.

From here I took the buttons featured on the original design and repurposed them to make sense within the context of my app. I retooled the small green screen to be a form that can be submitted with a number value. The directional pad was repurposed to move back and forth through the Pokemon to display, ranging from 1 to 150 per the original Kanto Pokedex (I decides to exclude Mew, number 151, for practical purposes as he had no flavor text in the original game, and therefore the data was missing from that section of the API). The black circular button was retooled as an on/off switch.

After finishing the mobile version of my app I used a media query to adjust to different screen sizes. This required me to readjust the layout of the Pokedex to fit the larger screen, and ultimately proved to be a challenge. I was unable to get my HTML and CSS to work 100% perfectly and to accurately display the black lines on the top of the Pokedex upon stretching/squishing the browser window. I was also unable to get a div that reshaped the "screen's" border to move to the appropriate spot when the browser window was stretched/squished. The left and right buttons on the directional pad also tend to wander when stretching the browser window.

In contrast, some challenges I was able to overcome were: getting the "screen" to stay in middle of the page regardless of the viewport size, getting a button to switch an element's class and hide certain images within the div on click, and writing an If Else statement in JavaScript that referenced my CSS media query and adjusted the location of information on the "screen" when switched to desktop mode.

Overall I'm extremely satisfied with how the app came out, I just wish I was able to tie up some of the loose ends described above. I had a lot of fun working through the JavaScript and creating the logic, but found that I struggled a bit when it came to putting the finishing touches on my CSS, specifically when to use "position: absolute" and such.

Link to live site: https://cbellaro.github.io/pokedex-app/

This project was inspired by Nintendo Co. Ltd., Creature Inc., and Game Freak Inc.'s Pokemon franchise, namely Pokemon Red and Blue for the original Gameboy ass well as the original anime series.

Links to images that inspired the design:
    https://i.imgur.com/2qYWPh5.png
    https://i.imgur.com/7impNY3.jpg
    https://i.imgur.com/ZPTcnTZ.jpg

All Pokemon sprites taken from https://www.serebii.net/pokedex/
