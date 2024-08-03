// Obtém o elemento de vídeo
const video = document.getElementById('video');

// Função para iniciar a câmera
async function startCamera() {
    try {
        // Solicita permissão e obtém o stream da câmera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Atribui o stream ao elemento de vídeo
        video.srcObject = stream;
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
    }
}

// Inicia a câmera quando o script é carregado
startCamera();
