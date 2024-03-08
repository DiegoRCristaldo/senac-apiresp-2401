export function validarFilme(filme){
    if(filme.nome == undefined || filme.nome == '')
        throw new Error('Nome do filme é obrigatório!');
    
    if(filme.sinopse == undefined || filme.sinopse == '')
        throw new Error('Sinopse do filme é obrigatório!');

    
    if(filme.avaliacao == undefined || filme.avaliacao == '')
        throw new Error('Avaliação do filme é obrigatória!');

        
    if(filme.lancamento == undefined || filme.lancamento == '')
        throw new Error('Data de lançamento do filme é obrigatório!');
    
    if(filme.disponivel == undefined || filme.disponivel == '')
        throw new Error('Disponibilidade do filme é obrigatória!');
}