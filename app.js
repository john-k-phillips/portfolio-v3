$(document).ready(() => {
    const getData = (dateType) => {
        const data = $.getJSON("./projects.json", (data) => {
            data.data.forEach(item => {
                generateCard(item.projectURL, item.projectName, item['project-desc'], item['image-name'])
            });
        })
    }

    getData();

    const generateCard = (url, title, desc, image) => {
        const cardList = document.querySelector('.card-list');

        const card = document.createElement('div');
        card.tabIndex = '0';
        card.classList.add('card');

        card.addEventListener('click', () => {
            window.open(url);
        })

        const cover = document.createElement('div');
        cover.classList.add('cover');

        const description = document.createElement('p');
        description.innerText = desc;

        const imageCover = document.createElement('img');
        imageCover.src = image;
        imageCover.alt = title;

        cover.appendChild(description);
        card.appendChild(cover);
        card.appendChild(imageCover);
        cardList.appendChild(card);
    }

})
