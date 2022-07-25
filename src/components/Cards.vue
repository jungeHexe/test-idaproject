<template>
  <div class="row">
    <adding-form
      @add-card="addCard"
    />
    <div class="col-lg-9">
      <select class="sorting-select" v-model="sortBy">
        <option selected value="default">По умолчанию</option>
        <option value="name">По наименованию</option>
        <option value="maxPrice">По убыванию цены</option>
        <option value="minPrice">По возрастанию цены</option>
      </select>
      <div class="row container">
        <loader class="loader" v-if="loading"></loader>
        <card
            v-else-if="!loading"
            v-for="card in sortingCard"
            @delete-card="deleteCard"
            :card = "card"
        ></card>
      </div>
      <div v-if=" !loading && cards.length === 0" class="empty-list">Список пуст</div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import cardService from "@/services/card.service";
import AddingForm from "@/components/AddingForm";
import Loader from "@/components/Loader";

export default {
  data() {
    return {
      cards: [],
      sortBy: 'default',
      loading: true,
    }
  },
  components: {Loader, Card, AddingForm},
  mounted() {
      setTimeout(() => {
        this.cards = cardService.sortDefault();
        this.loading = false;
      }, 2000);
  },
  computed:{
    sortingCard(){
      if(this.sortBy === 'name'){
        cardService.sortByName();
      }else if(this.sortBy === 'default'){
        cardService.sortDefault()
      }else if(this.sortBy === 'minPrice'){
        cardService.sortByMinPrice()
      }else{
        cardService.sortByMaxPrice()
      }
      return this.cards;
    }
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

  .sorting-select{
    margin:32px 0 0;
    height: 36px;
    float:right;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
    padding: 10px 16px;

    &:focus{
      outline: none;
    }
  }
</style>