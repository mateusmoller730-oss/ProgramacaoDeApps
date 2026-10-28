

import {
    cadastrarFornecedor,
    listarFornecedores,
    buscarFornecedorPorIndice,
    atualizarFornecedor,
    deletarFornecedor
} from '../controller/fornecedorController.js';

const router = .Router();

router.post('/fornecedor', cadastrarFornecedor);

router.get('/fornecedor', listarFornecedores);

router.get('/fornecedor/:indice', buscarFornecedorPorIndice);

router.patch('/fornecedor/:indice', atualizarFornecedor);

router.delete('/fornecedor/:indice', deletarFornecedor);

export default router;