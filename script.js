function sendToWhatsApp() {
    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    const numeroWhatsApp1 = document.getElementById('numeroWhatsApp1').value;

    // Verifique se todos os campos estão preenchidos
    if (!nome || !email || !msg || !numeroWhatsApp1) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Formate a mensagem para enviar
    const mensagem = `*Solicitação de agendamento*:\n\nNome: ${nome}\nEmail: ${email}\nNúmero${numeroWhatsApp1}\nMensagem: ${msg}`;

    // Codifique a mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagem);

    // Número do WhatsApp (use o formato internacional sem espaços ou símbolos, apenas números)
    const numeroWhatsApp = '5547988831423';

      // Formate o número do WhatsApp (remova espaços, traços e parênteses)
      const numeroFormatado = numeroWhatsApp.replace(/\D/g, '');
      

    // Crie a URL do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;

    // Abra a URL em uma nova aba
    window.open(url, '_blank');
}
