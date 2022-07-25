<template>
  <div class="row">
    <adding-form
      @add-card="addCard"
    />
    <div class="row col-lg-9 container">
      <card
          v-for="card in cards"
          @delete-card="deleteCard"
          :card = "card"
      ></card>
      <div v-if="cards.length === 0" class="empty-list">Список пуст</div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import cardService from "@/services/card.service";
import AddingForm from "@/components/AddingForm";

export default {
  data() {
    return {
      cards: [],
    }
  },
  components: {Card, AddingForm},
  mounted() {
      this.cards = cardService.getCards();
  },
  methods: {
    deleteCard(id){
      this.cards = cardService.deleteCard(id);
    },
    addCard(form){
      this.cards = cardService.addCard(form);
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    margin-top: 83px;
  }

  .empty-list{
    margin:20px auto;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-size: 20px;
  }
</style>