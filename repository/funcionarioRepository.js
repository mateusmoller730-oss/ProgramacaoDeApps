
export const funcionarios = [];

export function cadastrarFuncionario(funcionario) {
    funcionarios.push(funcionario);
}

export function listarFuncionarios() {
    return funcionarios;
}

export function buscarFuncionarioPorIndice(indice) {
    return funcionarios[indice];
}

export function atualizarFuncionario(indice, funcionario) {
    funcionarios[indice] = funcionario;
}

export function excluirFuncionario(indice) {
    funcionarios.splice(indice, 1);
}
