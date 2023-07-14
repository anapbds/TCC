<template>
  <div>
    <b-button variant="success" size="sm" id="show-btn" @click="showModal()">
      <i class="far fa-trash-alt"></i>
    </b-button>

    <b-modal ref="modalRef" id="modal-2" title="BootstrapVue">
      <template #modal-title>
        Deletar atividade?
      </template>

      <div class="d-block text-center">
        Descrição: {{ descricao }}
      </div>

      <template #modal-footer>
        <b-button
          class="mt-3"
          variant="danger"
          block
          @click="hideModal()"
        >
          Cancelar
        </b-button>
        <b-button
          class="mt-3"
          variant="success"
          block
          @click="deleteTutorial()"
        >
          Excluir
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import DataController from "../../Controller/Controller";

export default {
  name: "Excluir",
  props: ["idprops", "descricao"],
  methods: {
    showModal() {
      this.$refs.modalRef.show();
    },
    hideModal() {
      this.$refs.modalRef.hide();
    },
    deleteTutorial() {
      const inicio = Date.now();
      DataController.deletarAtividade(this.idprops)
        .then(() => {
          const fim = Date.now();
          const tempoResposta = fim - inicio;
          console.log(`O tempo de resposta foi de ${tempoResposta} milissegundos.`);
          console.log("Deletado com sucesso!");
          this.hideModal(); // Chame a função hideModal() em vez de hideModal()
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
/* Estilos CSS */
</style>
