const newsBlock = document.querySelector('.block')
const blocks = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp => resp.json())
        .then(data => {
            data.slice(0, 4).map(i => {
                const div = document.createElement('div')
                div.setAttribute('class', 'cards')
                div.innerHTML = `
                <div class="news__item">
                <img src="img/new_1.jpg" alt="elite">
                <h3 class="news__item-subtitle">TITLE: ${i.title}</h3>
                <div class="news__item-descr">BODY: ${i.body}</div>
                </div>
                `
                newsBlock.append(div)
            })
        })
}
blocks()