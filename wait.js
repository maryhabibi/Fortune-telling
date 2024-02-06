
function load() {
    write_random_char();
    mouse_cell_color();

    setInterval(function () {
        write_random_char();
    }, 1000);

    //////automatic redirect
    setTimeout(function () { window.location.href = 'interpretation.html' }, 150000);

}

function mouse_cell_color() {

    const min_font_size = 15;
    const max_font_size = 100;


    const table = document.getElementById('myTable');
    const cells = table.getElementsByTagName('td');

    for (const cell of cells) {
        cell.addEventListener('mouseover', function () {
            const randomColor = getRandomColor();
            this.style.backgroundColor = randomColor;

            this.style.color = getRandomColor();
            this.style.fontSize = String(Math.floor(Math.random() * max_font_size) + min_font_size) + 'px';

         
        });

        cell.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Reset background color on mouseout
        });
    }
}


function write_random_char() {
    tbl_length = 21;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const min_font_size = 15;
    const max_font_size = 100;

    for (var i = 0; i < tbl_length; i++) {

        var delay = Math.floor(Math.random() * 100) + 100;

        setTimeout(function () {
            let random_index = Math.floor(Math.random() * tbl_length);

            var random_chara = characters.charAt(Math.floor(Math.random() * characters.length));

            cell_name = 'var_' + String(random_index + 1);

            var textElement = document.getElementById(cell_name);
            textElement.innerText = random_chara;


            // textElement.className = "cell_text";
            textElement.style.color = getRandomColor();
            // textElement.style.backgroundColor = getRandomColor();
            textElement.style.fontSize = String(Math.floor(Math.random() * max_font_size) + min_font_size) + 'px';


        }, delay);

    }

}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}