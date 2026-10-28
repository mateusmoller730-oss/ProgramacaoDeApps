import { Categoria } from '../model/Categoria.js';

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    deletar
} from '../repository/categoriaRepository.js';

export function cadastrarCategoria(nome, descricao) {
    const categoria = new Categoria(nome, descricao);
    cadastrar(categoria);
    return 201;
}

export function listarCategorias() {
    return listar();
}

export function buscarCategoriaPorIndice(indice) {
    const categoria = buscarPorIndice(indice);

    if (!categoria) {
        return 404;
    }

    return categoria;
}

export function atualizarCategoria(indice, nome, descricao) {
    const categoriaExistente = buscarPorIndice(indice);

    if (!categoriaExistente) {
        return 404;
    }

    const categoria = new Categoria(nome, descricao);
    atualizar(indice, categoria);
    return 200;
}

export function deletarCategoria(indice) {
    const categoria = buscarPorIndice(indice);

    if (!categoria) {
        return 404;
    }

    deletar(indice);
    return 200;
}