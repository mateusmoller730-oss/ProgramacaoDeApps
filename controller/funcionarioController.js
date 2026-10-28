
import { Funcionario } from "../model/Funcionario.js";

import {
    cadastrarFuncionario as salvarFuncionario,
    listarFuncionarios as obterFuncionarios,
    buscarFuncionarioPorIndice as encontrarFuncionario,
    atualizarFuncionario as substituirFuncionario,
    excluirFuncionario as removerFuncionario
} from "../repository/funcionarioRepository.js";

export function cadastrarFuncionario(matricula, nome, setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor, cargo);
    salvarFuncionario(funcionario);
}

export function listarFuncionarios() {
    const funcionarios = obterFuncionarios();

    for (let i = 0; i < funcionarios.length; i++) {
        console.log("Índice:", i);
        console.log("Matrícula:", funcionarios[i].matricula);
        console.log("Nome:", funcionarios[i].nome);
        console.log("Setor:", funcionarios[i].setor);
        console.log("Cargo:", funcionarios[i].cargo);
        console.log("Status:", funcionarios[i].status);
        console.log("--------------------");
    }
}

export function buscarFuncionarioPorIndice(indice) {
    const funcionario = encontrarFuncionario(indice);

    if (funcionario) {
        console.log(funcionario);
        return funcionario;
    }

    console.log("Funcionário não encontrado.");
    return false;
}

export function atualizarFuncionario(indice, matricula, nome, setor, cargo) {
    if (encontrarFuncionario(indice)) {
        const funcionario = new Funcionario(matricula, nome, setor, cargo);
        substituirFuncionario(indice, funcionario);
        console.log("Funcionário atualizado.");
        return true;
    }

    console.log("Funcionário não encontrado.");
    return false;
}

export function excluirFuncionario(indice) {
    if (encontrarFuncionario(indice)) {
        removerFuncionario(indice);
        console.log("Funcionário excluído.");
        return true;
    }

    console.log("Funcionário não encontrado.");
    return false;
}

export function ativarFuncionario(indice) {
    const funcionario = encontrarFuncionario(indice);

    if (funcionario) {
        funcionario.ativar();
        console.log("Funcionário ativado.");
        return true;
    }

    console.log("Funcionário não encontrado.");
    return false;
}

export function desativarFuncionario(indice) {
    const funcionario = encontrarFuncionario(indice);

    if (funcionario) {
        funcionario.desativar();
        console.log("Funcionário desativado.");
        return true;
    }

    console.log("Funcionário não encontrado.");
    return false;
}
