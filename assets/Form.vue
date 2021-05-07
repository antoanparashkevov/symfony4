<template>
     <section v-if="isError">
        <p class="text-bold text-danger">We are sorry, we are not able to retrieve this information right now!</p>
    </section>
 
    <section v-else>
        
        <div v-if="isLoading"><h3 class="text-primary">Loading...</h3></div> 

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
                    <h1>new text</h1>
                            <div class="d-flex flex-column flex-md-column mt-2 ml-5 ml-md-2">
                                    <ul   
                                  class="list-group-item"
                                    >
                                <li  v-for="(cat,i) in categories"
                                    :key="i"
                                    class="list-group list-group-flush"
                                    >
                                    <strong>
                                    {{cat.name}}
                                    
                                    
                                    <input type="number" v-model="cat.quantity"> кв.м
                                
                                    <input type="number" :disabled="true" :value="cat.quantity * cat.one_cat_price"> лв.
                                    
                                    </strong>

                                    
                                </li>
                            </ul>
                        </div>
            </div>
            
        </div>
    
    </div>
    </div>
    
 </section> 

 

</template>

<script>

import axios from 'axios';
export default {
    name:"Form",
    computed:{
        isDisabled(){
            return true;
        }
    },
    data(){
    return{
        categories:[],
        firstName:"Antoan",
        isLoading:true,
        isError:false,
    
};
},
    mounted(){
    
        // this.loadOffers();
        let self = this;
        axios
        .get("/api/categories.json")
        .then(response => {
            response.data.forEach(element => {
                console.log(element);
                element.one_cat_price = element.price / element.quantity;
                self.categories.push(element)
            });
        })
        .catch(error => {
            console.log(error)
            this.isError = true
        })
        .finally(() =>this.isLoading = false)
       
        
},
methods:{

}
}
</script>

<style>

</style>