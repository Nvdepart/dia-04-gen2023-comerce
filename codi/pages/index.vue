<template>
  <div>

    <NavBar />
    <HomeCarousel :sale_items="sale_items" />
    <br>

    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out 🔥</h1>
      <br />
      <ProductSlider :products="products" />
      <br /><br /><br />
      <newsletter />
    </v-container>
    <Footer />
  </div>
  
</template>

<script>
import Newsletter from '../components/Newsletter.vue';
export default {
  components: { Newsletter },
  name: 'IndexPage',
  async created(){
    this.sale_items= await this.$content("products").where({onSale: true}).fetch();
    this.products= await this.$content("products").fetch();
  },
  data(){
    return{
      products: null,
      sale_items: null,
    }
  }
}
</script>
