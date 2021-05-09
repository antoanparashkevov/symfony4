<template>
  <b-modal v-model="showModal" hide-footer hide-backdrop>
    <b-form-group label="Choose category:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selectedCategories"
          :options="categories"
          value-field="id"
          text-field="name"
          name="flavour-1"
          stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-button class="mt-3" variant="outline-success" block @click="confirm">Add</b-button>
    <b-button class="mt-2" variant="outline-danger" block @click="cancel">Cancel</b-button>
  </b-modal>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
      categories: [],
      selectedCategories:[],
      dselectedCategories:[],
      name: "",
      resolve: null,
      reject: null
    }

  },
  methods: {
    fetchCategories(){
      let self = this;
      this.categories = [];
      axios.get('/api/categories.json').then(r=>{
        r.data.forEach(element => {
          console.log(element);
          element.one_cat_price = element.price / element.quantity;
          self.categories.push(element)
        });
      })
    },
    open() {
      this.showModal = true;
      this.fetchCategories()
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    confirm() {
      this.showModal = false;
      this.resolve(this.dselectedCategories)
    },
    cancel() {
      this.showModal = false;
      this.resolve(false)

    }
  },
 watch:{
    selectedCategories(val){
      this.dselectedCategories = [];
      this.selectedCategories.forEach(elem=>{
        let e = this.categories.find(el=>el.id === elem)
        this.dselectedCategories.push(e);
      })
    }
 }
}
</script>

<style>
.modal-active {
  display: block;
}
</style>