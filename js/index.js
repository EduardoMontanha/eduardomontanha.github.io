const redirectWhats = (event) => {
    const procedimento = event.target.value;
    const formataProcedimento = procedimento.replaceAll(" ", "%20")

    window.open(`https://api.whatsapp.com/send?phone=5551980443434&text=Ol%C3%A1%20Dra.%20Lisiane%2C%20vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${formataProcedimento}`, "_blank");
}

const carregaProcedimentos = async () => {
    const lista = document.getElementById("lista-procedimentos");
    let procedimentos = '';
    
    for (let i = 0; i < procedimentosData.length; i++) {
        const procedimento = procedimentosData[i];

        procedimentos += `
            <div class="card">
                <div class="card-header">
                    <img alt="Imagem procedimento" src="assets/images/procedimentos/${procedimento.image}">
                </div>
                <div class="card-body">
                    <h3>${procedimento.name}</h3>
                    <button class="full" value="${procedimento.name}" onClick="redirectWhats(event)">Saiba mais</button>
                </div>
            </div>
        `;
    }

    lista.innerHTML = procedimentos;
}

window.onload = () => {
    carregaProcedimentos();
}