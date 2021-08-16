<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    box-shadow: 0 3px 3px grey;
    margin-bottom: 40px;
  }
  h1 {
    margin: 0;
  }
</style>
