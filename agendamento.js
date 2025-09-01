/**
 * Arquivo: js/agendamento.js
 * Descrição: Controla a lógica específica da página de agendamento.
 */

document.addEventListener('DOMContentLoaded', function () {
    
    // Lógica para pré-selecionar o serviço no formulário com base na URL
    const params = new URLSearchParams(window.location.search);
    const service = params.get('servico');
    
    if (service) {
        const selectElement = document.getElementById('service-type');
        
        // Garante que o script não quebre em páginas sem o seletor de serviço
        if (selectElement) { 
            const serviceMap = {
                'manutencao': 'manutencao_corretiva',
                'upgrade': 'upgrade_componentes',
                'montagem': 'montagem_pc'
            };

            if (serviceMap[service]) {
                selectElement.value = serviceMap[service];
            }
        }
    }
});
