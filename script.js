// Função chamada ao clicar no botão
function curtirPost(postId) {
    // Busca a quantidade atual de curtidas salvas no navegador
    let curtidas = parseInt(localStorage.getItem('curtidas_' + postId)) || 0;
    let jaCurtiu = localStorage.getItem('usuario_curtiu_' + postId) === 'true';

    if (!jaCurtiu) {
        curtidas++;
        localStorage.setItem('usuario_curtiu_' + postId, 'true');
    } else {
        curtidas--;
        localStorage.setItem('usuario_curtiu_' + postId, 'false');
    }

    // Salva o novo total de curtidas
    localStorage.setItem('curtidas_' + postId, curtidas);

    // Atualiza a tela
    atualizarTela(postId);
}

// Função para atualizar o número no HTML e o visual do botão
function atualizarTela(postId) {
    let curtidas = parseInt(localStorage.getItem('curtidas_' + postId)) || 0;
    let jaCurtiu = localStorage.getItem('usuario_curtiu_' + postId) === 'true';

    const elementoContador = document.getElementById('contador-' + postId);
    const botao = elementoContador ? elementoContador.parentElement.querySelector('.btn-curtir') : null;

    if (elementoContador) {
        elementoContador.innerText = `${curtidas} ${curtidas === 1 ? 'curtida' : 'curtidas'}`;
    }

    if (botao) {
        if (jaCurtiu) {
            botao.classList.add('curtido');
            botao.querySelector('.texto-btn').innerText = 'Curtido';
        } else {
            botao.classList.remove('curtido');
            botao.querySelector('.texto-btn').innerText = 'Curtir';
        }
    }
}

// Carrega os números de curtidas ao abrir/recarregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizarTela('post1');
    atualizarTela('post2');
});