<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
    <div class="box form">
      <div class="title">Добавление товара</div>
      <form @submit.prevent="onSubmit">
        <div>
          <label class="required">Наименование товара</label>
          <input required placeholder="Введите наименование товара" v-model="form.title"/>
        </div>
        <div>
          <label>Описание товара</label>
          <textarea placeholder="Введите описание товара" v-model="form.content"/>
        </div>
        <div>
          <label class="required">Ссылка на изображение товара</label>
          <input required placeholder="Введите ссылку" v-model="form.image"/>
        </div>
        <div>
          <label class="required">Цена товара</label>
          <input required placeholder="Введите цену" v-model="form.price"/>
        </div>
        <button type="submit">Добавить товар</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form : {},
    }
  },

  methods: {
    onSubmit(){
      this.$emit('add-card', this.form);
      this.form = {};
    }
  }
}
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

  .form{
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    color: #3F3F3F;
    text-align: left;
    margin-bottom: -50px;

    .title{
      margin:32px 0 16px;
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
    }

    form{
      padding: 24px;
      height:auto;
      background: #FFFEFB;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;

      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      color: #49485E;

      .required:after{
        content: "●";
        margin-top: -4px;
        color:red;
        position: absolute;
      }

      input, textarea{
        width: 100%;
        box-sizing: border-box;
        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
        padding: 10px 0px 10px 16px;
        margin: 4px 0 16px;

        color: #3F3F3F;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        &:focus{
          outline: none;
        }
      }

      textarea{
        height: 110px;
        resize: none;
        overflow: auto;
        font-family: inherit;
      }

      button{
        border-radius: 10px;
        width:100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        padding: 10px 0;
        border:none;
        background: #7BAE73;
        color:#FFFFFF;
        margin-top:8px;

        font-weight: 600;
        font-size: 12px;
        line-height: 15px;

        &:disabled {
          color: #B4B4B4;
          background: #EEEEEE;
        }

      }
    }


  }
</style>