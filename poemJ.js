function set_interval() {
    change_idea();

    setInterval(change_idea, 1000);
}


function change_idea() {
    // JavaScript code
    let ideas = ['Relationships', 'Love', 'Family Matters', 'Financial Guidance', 'Travel and Adventures', 'Friendship', 'Future Planning', 'Inspiration', 'Occasions', 'Personal Growth'];
    var myVariable = [ideas[Math.floor(Math.random() * ideas.length)]];

    // Update the paragraph content with the value of myVariable
    document.getElementById("think_variable").innerText = myVariable;
}

function load_poetry() {
    // JavaScript code
    let poems = ["Ghazal 17 You have experienced a life full of sorrow and hardship, enduring considerable difficulties, to the extent that you have pained the hearts of both friends and strangers. However, remember that in any circumstance, decisions should be made with reason rather than emotion. Avoid reaching for unattainable heights, as the only result is the loss of opportunities. Soon, the tale of sorrows will come to an end, and you will achieve success.", "Ghazal 358, Sorrow and grief have no end in this world, and the only solution is to take them lightly. Regarding the intention in your heart, you should know that your well-being is not served by pursuing this intention, as the opportune time for such action has not yet arrived. Therefore, your insistence on this matter is in vain. Do not torment yourself and wait for the right time.", "Ghazal 235, You have been waiting for someone for a long time, and you have not given up on any effort to reach the appointed moment of meeting. Despite your pure intentions and all the efforts you could make, your wish has never been fulfilled. However, know that the hand of destiny has inscribed your fate with a golden pen, and soon you will attain the desire of your heart.", "Ghazal 88, For a while, you have been afflicted with the pain of separation and deeply concerned about the journey of that beloved. Your worry is unwarranted; they will return. Do not rely on the uncertain supports of the world, and if life grants you another opportunity, make the most of it. Avoid misusing the resources at your disposal. Speak the truth to someone you love sooner rather than later, before it becomes a source of trouble.", "Ghazal 43, Soon, you will receive great help from your friends, and your current problems will be resolved. The time of sorrow has passed, and the time of joy and happiness has arrived. Now that this opportunity has presented itself to you, choose your life path with greater care. Remember, the less attachment, the easier life becomes.", "Ghazal 67, You have placed your heart in the hands of someone who has many admirers, creating doubt in your mind. You are unsure whether they have feelings for someone else. This uncertainty has led to hesitation in expressing your affection towards them. It is advisable to share your feelings with them so that they may prioritize you over others",
        "Ghazal 235, You have firmly resolved to undertake a task and stood by it with unwavering determination, but amid this journey, despair and fear of the outcome torment you. Put your trust in God and be patient in carrying out your endeavors, for with certainty, you will achieve the desired results from your efforts ",];



    // let voice_poem = ['17.mp3', '358.mp3', '235.mp3', '88.mp3', '43.mp3', '67.mp3', '233.mp3'];
    let voice_poem = ['media/17.mp3', 'media/358.mp3', 'media/235.mp3', 'media/88.mp3', 'media/43.mp3', 'media/67.mp3', 'media/235.mp3'];
    index = Math.floor(Math.random() * poems.length);
    var myVariable = poems[index];
    document.getElementById("poem_variable").innerText = myVariable;

    var audio = document.getElementById('audioPlayer');
    audio.src = voice_poem[index];
    audio.play();

    ///random text

    setInterval(function () {
        var left_text = create_random_text(poems);
        write_random_text(left_text, "left_random_txt_variable");
        // document.getElementById("left_random_txt_variable").innerText = left_text;

        var right_text = create_random_text(poems);
        write_random_text(right_text, "right_random_txt_variable");
        // document.getElementById("right_random_txt_variable").innerText = right_text;
    }, 1000);



}


function redirect() {
    var internalPagePath = 'wait.html';
    window.location.href = internalPagePath;
}

function back_to_main() {
    var internalPagePath = 'index.html';
    window.location.href = internalPagePath;
}


function writeText() {

    document.getElementById(graf.toString()).innerHTML = typing[graf][j].innerHTML;
    wait = (typing[graf][j + 1].timestamp - typing[graf][j].timestamp) / 2;
    j++;

    if (j == 10) {
        console.log('pause');
        clearTimeout(timeout);
    }

    if (j > typing[graf].length - 2) {

        j = 0; graf++; wait = 100;
        if (graf > 2) {
            graf--; j = typing[graf].length - 1;
            direction = 'backward';
            var wait = 1000;
            document.getElementById("spiral").classList.remove("spiral-out");
            document.getElementById("spiral").classList.add("spiral-in");
        }
    }

    timeout = setTimeout(writeText, wait);
}



function create_random_text(poems) {
    var text = "";

    var random_poem = "";


    random_ind = Math.floor(Math.random() * poems.length);
    selected_poem = poems[random_ind];
    sliced_poem = selected_poem.slice(20, 50);

    random_poem = sliced_poem;
    text += random_poem;



    return text;
}


function write_random_text(text, div_name) {
    var randomX = Math.floor(Math.random() * 150); // Adjust the maximum X position as needed
    var randomY = Math.floor(Math.random() * 500); // Adjust the maximum Y position as needed

    var textElement = document.createElement("div");
    textElement.className = "randomText";
    textElement.style.left = randomX + "px";
    textElement.style.top = randomY + "px";
    textElement.innerText = text;

    document.getElementById(div_name).appendChild(textElement);
}