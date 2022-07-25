<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div
        @mouseenter="showDelete = true"
        @mouseleave="showDelete = false"
        class="box card">
        <img :src="card.image" alt="photo.svg">
        <button
            v-if="showDelete"
            @click="$emit('delete-card', card.id)"
            class="delete-btn"></button>

        <div class="text-block">
          <div class="title">{{card.title}}</div>
          <div class="content">{{card.content}}</div>
          <div class="price">{{formatPrice(card.price)}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showDelete: false,
    }
  },
  props: {card: Object},
  methods: {
    formatPrice(price) {
      if(price > 999) {
        price = price.toString();
        let right = price.slice(price.length - 3, price.length);
        let left = price.slice(0, price.length - 3);

        return `${left} ${right} руб.`
      }else{
        return `${price} руб.`
      }
    },

    deleteCard(id){
      this.$emit('deleteCard', id)
    }
  }
}
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

  .card{
    height: auto;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-bottom: 16px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;

    .delete-btn {
      background-color: #FF8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background-image: url("../assets/delete.svg");
      background-position: center;
      background-repeat: no-repeat;
      border:none;
      height:32px;
      width:32px;
      cursor: pointer;
      margin:-8px -24px;
      position: absolute;

      &:hover{
        background-color: #fd5e5e;
      }

      &:active{
        background-color: #FF8484;
      }
    }

    &:hover{
      transform: scale(1.03);
      transition: transform 0.5s ease 0s;
    }

    img{
      width:100%;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    .text-block{
      padding: 0 16px 24px;
      font-family: Source Sans Pro, sans-serif;
      font-style: normal;
      color: #3F3F3F;
      text-align: left;

      .title{
        margin: 16px 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
      }

      .content{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 32px;
      }

      .price{
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
</style>