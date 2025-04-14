function enviarMensagem() {
    console.log("Botão clicado!");
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554499907886&text=${encodeURIComponent(texto)}`;
    window.open(whatsappUrl, '_blank');

    //const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    //const url = `https:/wa.me/${telefone}?text=${msgFormatada}`;

}