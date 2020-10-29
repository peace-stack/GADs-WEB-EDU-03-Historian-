// javascript for Publishers profile Begins 

// Post, Review , Settings Animation

$('.nav ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tabs(index) {
    tab.forEach(function (node) {
        node.style.display = 'none';
    });
    tab[index].style.display = 'block';
};
tabs(0);

// See more/See less 

let bio = document.querySelector('.bio');
function bioText() {
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0, 100) + '...';
    bio.innerHTML += '&nbsp;' + '<span onclick="addLength()" id="see-more-bio"> See More </span>';
    
}
bioText();
function addLength() {
    bio.innerHTML = bio.oldText;
    bio.innerHTML += '&nbsp;' + '<span onclick="bioText()" id="see-less-bio"> See Less </span>';
}


// Javascript for publishers profile Ends 