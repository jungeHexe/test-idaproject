<template>
    <div class="row col-lg-9 container">
      <card
          v-for="card in cards"
          @delete-card="deleteCard"
          :card = "card"
      ></card>
      <div v-if="cards.length == 0" class="empty-list">Список пуст</div>
    </div>
</template>

<script>
import Card from "@/components/Card";
import cardService from "@/services/card.service";

export default {
  data() {
    return {
      cards: []
    }
  },
  components: {Card},
  mounted() {
      this.cards.push(...cardService.getCards());
  },
  methods: {
    deleteCard(id){
      this.cards = cardService.deleteCard(id);
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