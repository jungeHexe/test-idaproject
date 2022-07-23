<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
    <div class="box card">
        <img :src="card.image" alt="photo.svg">

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
  props: {card: Object},
  methods: {
    formatPrice(price) {
      price = price.toString();
      let right = price.slice(price.length-3, price.length);
      let left = price.slice(0, price.length-3);

      return `${left} ${right} руб.`
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

    &:hover{
      transform: scale(1.05);
      transition: transform 0.5s ease 0s;
      cursor: pointer;
    }

    img{
      width:100%;
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