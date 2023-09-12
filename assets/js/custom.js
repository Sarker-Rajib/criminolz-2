document.getElementById("statOpen").addEventListener('click', () => {
    document.getElementById("statHead").classList.add("show")
})

document.getElementById("statClose").addEventListener('click', () => {
    document.getElementById("statHead").classList.remove("show")
})