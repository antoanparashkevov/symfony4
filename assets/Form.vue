<template>
  <section>

    <app-add-category-modal ref="categoryDialog">

    </app-add-category-modal>

    <section v-if="isError">
      <p class="text-bold text-danger">We are sorry, we are not able to retrieve this information right now!</p>
    </section>

    <section v-else-if="isLoading">

      <div><h3 class="text-primary">No categories selected</h3></div>

    </section>
    <div v-else>

      <!-- <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 navbar-light bg-light border-bottom shadow-sm mb-3">
         <h3 class="text-dark my-0 mr-md-auto font-weight-normal">Create your offer, {{firstName}}</h3>
         </div> -->

      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <header>
          <h3 class="text-body">Offers</h3>
        </header>
        <div class="container p-4">
          <div class="row">

            <div class="d-flex flex-column flex-md-column mt-2 ml-5 ml-md-2">
              <ul
                  class="list-group-item"
              >
                <li v-for="(cat,i) in categories"
                    :key="i"
                    class="list-group list-group-flush"
                >
                  <strong>
                    {{ cat.name }}


                    <input type="number" v-model="cat.quantity"> кв.м

                    <input type="number" :disabled="isDisabled" :value="cat.quantity * cat.one_cat_price"> лв.

                  </strong>


                </li>
              </ul>
              <h3>Обща сума: {{endPrice}} лв.</h3>
            </div>
          </div>

        </div>

        <button class="btn btn-success">Save Offer</button>
      </div>

    </div>

    <b-button class="mb-1" @click="handleClick()">Add category</b-button>
  </section>

</template>

<script>

import axios from 'axios';

export default {
  name: "Form",
  components: {
    appAddCategoryModal: () => import('./AddCategory')
  },
  computed: {
    isDisabled() {
      return true;
    },
    endPrice(){
      let price = 0;
      this.categories.forEach(category=>{
        price += category.quantity * category.one_cat_price
      })
      return price;
    }
  },

  data() {
    return {
      categories: [],
      firstName: "Antoan",
      isLoading: true,
      isError: false,

    };
  },
  mounted() {

    // this.loadOffers();
    let self = this;


  },
  methods: {
    handleClick() {
      this.$refs.categoryDialog.open().then(r => {
        if (r) {
          console.log(r);
          this.categories = r;
          this.isLoading  = false
        }
      });
    }
  }
}
</script>

<style>

</style>