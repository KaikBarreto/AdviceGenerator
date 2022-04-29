const apiURL = 'https://api.adviceslip.com/advice'
const adviceArea = document.querySelector('#advice-area')

async function getAdvice() {
    try {
        const api = await axios.get(apiURL)

        const importedAdvice = api.data.slip
        advice.innerText = importedAdvice.advice
        adviceArea.style.display = 'block'
    } catch (error) {
        window.alert(error)
    }
}

adviceGenerator.addEventListener("click", getAdvice)