const button = document.querySelector('#button')

const list = document.querySelector('#list')



const getJoke = async () => {
    try {
        const text = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })

        return text.data.joke
    }
    catch (e) {
        return 'No jokes available at the moment, sorry :('
    }
}



const appendJoke = async () => {
    try {
        const statement = await getJoke();
        const newLi = document.createElement('LI')
        newLi.classList.add('display')
        newLi.append(statement)
        list.append(newLi)
    }
    catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', appendJoke)