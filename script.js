document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
});


 async function getCEP () {
    const CEP = document.getElementById("CEPinput").value
    try{
    const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    if (!response.ok) {
        throw new Error("Erro ao buscar o CEP. Por favor, tente novamente.");
    }
    const data = await response.json();
    if (data.erro) {
        alert("CEP não encontrado. Por favor, verifique e tente novamente.");
        return;
    }
        document.getElementById("Logradouro").textContent=data.logradouro;
        document.getElementById("Bairro").textContent=data.bairro;
        document.getElementById("Localidade").textContent=data.localidade;}
    catch(error){
        alert(`Erro: ${error.message}`);
    }}

 async function getWeather () {
    const Long = document.getElementById("Longinput").value
    const Lat = document.getElementById("Latinput").value
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Lat}&longitude=${Long}&hourly=temperature_2m`)
        if (!response.ok) {
            throw new Error("Erro ao buscar a previsão. Por favor, tente novamente.");
        }
        const data = await response.json();
        if (data.erro) {
        alert("Previsão não encontrada. Por favor, verifique e tente novamente.");
        return;
    }}
    catch(error){
        alert(`Erro: ${error.message}`);
    }}