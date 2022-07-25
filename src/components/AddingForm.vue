<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
    <div class="box form">
      <div class="title">Добавление товара</div>
      <form @submit.prevent="onSubmit" @input="validate">
        <div id="title">
          <label class="required">Наименование товара</label>
          <input placeholder="Введите наименование товара" v-model="form.title"/>
          <small>Поле является обязательным</small>
        </div>
        <div >
          <label>Описание товара</label>
          <textarea placeholder="Введите описание товара" v-model="form.content"/>
        </div>
        <div id="image">
          <label class="required">Ссылка на изображение товара</label>
          <input placeholder="Введите ссылку" v-model="form.image"/>
          <small>Поле является обязательным</small>
        </div>
        <div id="price">
          <label class="required">Цена товара</label>
          <input placeholder="Введите цену" id="price-input" v-model="form.price" @blur="maskPrice"/>
          <small>Поле является обязательным</small>
        </div>
        <button :disabled="disabled" type="submit">Добавить товар</button>
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

  computed:{
    disabled(){
      return (this.form.title === undefined) || (this.form.image === undefined) || (this.form.price === undefined);
    },
  },

  methods: {
    onSubmit(){
        this.$emit('add-card', this.form);
        this.form = {};
    },

    validate(){
        let notValid = ['title', 'image', 'price'];
        let valid = 0;

        for(let atr of notValid){
          if(this.form[atr] === undefined || this.form[atr] === ''){
              document.getElementById(atr).classList.add('not-valid');
          }else{
            document.getElementById(atr).classList.remove('not-valid');
            valid++;
          }
        }

        return valid === 3;
    },

    maskPrice(event){
      let price = event.target.value;
      event.target.value = `${price.slice(0, price.length - 3)} ${price.slice(price.length - 3, price.length)}`;
    },
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

      small{
        display: none;
      }

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

      .not-valid {
        input {
          border: 1px solid #FF8484;
          margin-bottom: 4px;
        }

        small{
          color: #FF8484;
          display: block;
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