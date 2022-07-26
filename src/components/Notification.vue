<template>
  <div class="modal-background">
    <div id="modal" class="modal" :class="color">
      <button class="close-btn" @click="close">✕</button>
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color', 'text'],
  methods:{
    close(){
      document.getElementById('modal').style.display = 'none';
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-background {
    z-index: 1000;
    display: flex;
    position: fixed;

    .modal {
      margin: 32px 75vw;
      height: auto;
      padding: 10px;
      width: 300px;
      background-color: #fafcfa;
      border:1px solid #e0dede;
      border-radius: 4px;
      text-align: left;
      font-family: Source Sans Pro, sans-serif;
      font-style: normal;
      font-size: 14px;

      .close-btn{
        float:right;
        border: none;
        background: transparent;
      }
    }

    .success{
      color:#7BAE73;
    }

    .error{
      color:#FF8484;
    }
  }
</style>