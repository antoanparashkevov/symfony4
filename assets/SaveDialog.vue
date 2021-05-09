<template>
  <b-modal v-model="showModal" hide-footer hide-backdrop>
   <b-form-input type="text" placeholder="Name" v-model.trim="data.name"></b-form-input>
   <b-form-input type="text"  placeholder="Description" v-model.trim="data.description"></b-form-input>
    <b-button class="mt-3" variant="outline-danger" block @click="confirm">Add</b-button>
    <b-button class="mt-2" variant="outline-warning" block @click="cancel">Cancel</b-button>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      data: {},
      resolve: null,
      reject: null
    }

  },
  methods: {
    open(data) {
      this.showModal = true;
      this.data = data
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    confirm() {
      this.showModal = false;
      this.resolve(this.data)
    },
    cancel() {
      this.showModal = false;
      this.resolve(false)

    }
  }
}
</script>

<style>
.modal-active {
  display: block;
}
</style>