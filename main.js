let count = 0
let counting = setInterval(() => {
    count++
    document.querySelector('.count').innerHTML = count + '%'
    if(count == 100) {
        clearInterval(counting)
    }
}, 40)