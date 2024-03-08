import con from './conection.js'

export async function inserir(filme){
    const comando = `
        INSERT INTO tb_filmes(nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
            VALUES(?, ?, ?, ?, ?)    
    `
    const resp = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    const info = resp[0];

    filme.id = info.insertId;
    return filme;
}

export async function consultar(nome){
    const comando = `
        SELECT id_filme        id,
               nm_filme        nome,
               ds_sinopse      sinopse,
               vl_avaliacao    avaliacao,
               dt_lancamento   lancamento,
               bt_disponivel   disponivel,
               img_filme       filme
        FROM tb_filmes
        WHERE nm_filme like ?;
    `
    const resp = await con.query(comando, ['%'+nome+'%']);
    const info = resp[0];
    return info;
}