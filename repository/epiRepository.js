
export const epis = [];

export function cadastrarEpi(epi) {
    epis.push(epi);
    return true;
}

export function listarEpis() {
    return epis;
}

export function buscarEpiPorIndice(indice) {
    return epis[indice];
}

export function atualizarEpi(indice, epi) {
    if (indice < 0 || indice >= epis.length) {
        return false;
    }

    epis[indice] = epi;
    return true;
}

export function excluirEpi(indice) {
    if (indice < 0 || indice >= epis.length) {
        return false;
    }

    epis.splice(indice, 1);
    return true;
}