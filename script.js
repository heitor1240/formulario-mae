function sendToWhatsApp() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem').value;
    

    // Verifique se todos os campos estão preenchidos
    if (!nome || !email || !msg) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Formate a mensagem para enviar
    const mensagem = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${msg}`;

    // Codifique a mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagem);

    // Número do WhatsApp (use o formato internacional sem espaços ou símbolos, apenas números)
    const numeroWhatsApp = '5547988831423';

    // Crie a URL do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;

    // Abra a URL em uma nova aba
    window.open(url, '_blank');
}
