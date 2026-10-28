
import {
    cadastrarEpi,
    listarEpis,
    buscarEpiPorIndice,
    adicionarQuantidade,
    retirarQuantidade,
    atualizarEpi,
    excluirEpi
} from "./controller/epiController.js";

cadastrarEpi(1, "Capacete de segurança", "12345", 20);
cadastrarEpi(2, "Luva de proteção", "23456", 30);
cadastrarEpi(3, "Óculos de proteção", "34567", 15);

console.log("LISTA INICIAL");
listarEpis();

console.log("BUSCAR EPI");
buscarEpiPorIndice(1);

console.log("ADICIONAR QUANTIDADE");
adicionarQuantidade(0, 10);

console.log("RETIRAR QUANTIDADE");
retirarQuantidade(1, 5);

console.log("TENTAR RETIRAR MAIS DO QUE O ESTOQUE");
retirarQuantidade(2, 100);

console.log("ATUALIZAR EPI");
atualizarEpi(0, 1, "Capacete industrial", "12345", 50);

console.log("EXCLUIR EPI");
excluirEpi(2);

console.log("LISTA FINAL");
listarEpis();
