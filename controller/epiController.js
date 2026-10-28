import { Epi } from "../model/Epi.js"

import {
    cadastrarEpi,
    salvarEpi,
    listarEpis,
    buscarEpiPorIndice,
    atualizarEpi,
    substituirEpi,
    excluirEpi,
    removerEpi,
} from "../repository/epiRepository.js"

export function cadastrar(codigo, nome, ca, quantidade) {
    const epi = new Epi(codigo, nome, ca, quantidade)

    salvarEpi(epi)

    console.log("EPI cadastrado com sucesso!")
}

export function listar() {
    const epis = listarEpis()

    if (epis.length === 0) {
        console.log("Nenhum EPI cadastrado.")
        return
    }

    for (let i = 0; i < epis.length; i++) {
        console.log("-------------------------")
        console.log("Índice:", i)
        console.log("Código:", epis[i].codigo)
        console.log("Nome:", epis[i].nome)
        console.log("Número do CA:", epis[i].ca)
        console.log("Quantidade:", epis[i].quantidade)
    }

    console.log("-------------------------")
}

export function buscar(indice) {
    const epi = buscarEpiPorIndice(indice)

    if (!epi) {
        console.log("EPI não encontrado no índice informado.")
        return
    }

    console.log("EPI encontrado:")
    console.log("Código:", epi.codigo)
    console.log("Nome:", epi.nome)
    console.log("Número do CA:", epi.ca)
    console.log("Quantidade:", epi.quantidade)

    return epi
}

export function atualizar(indice, codigo, nome, ca, quantidade) {
    const epiExistente = buscarEpiPorIndice(indice)

    if (!epiExistente) {
        console.log("Não foi possível atualizar: EPI não encontrado.")
        return
    }

    const epiAtualizado = new Epi(codigo, nome, ca, quantidade)

    substituirEpi(indice, epiAtualizado)

    console.log("EPI atualizado com sucesso!")
}

export function excluir(indice) {
    const epi = buscarEpiPorIndice(indice)

    if (!epi) {
        console.log("Não foi possível excluir: EPI não encontrado.")
        return
    }

    removerEpi(indice)

    console.log("EPI excluído com sucesso!")
}

export function adicionarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice)

    if (!epi) {
        console.log("Não foi possível adicionar: EPI não encontrado.")
        return
    }

    if (epi.adicionarQuantidade(valor)) {
        console.log("Quantidade adicionada com sucesso!")
    } else {
        console.log("Valor inválido para adicionar ao estoque.")
    }
}

export function retirarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice)

    if (!epi) {
        console.log("Não foi possível retirar: EPI não encontrado.")
        return
    }

    if (epi.retirarQuantidade(valor)) {
        console.log("Quantidade retirada com sucesso!")
    } else {
        console.log("Não foi possível retirar. Verifique o valor e o estoque disponível.")
    }
}