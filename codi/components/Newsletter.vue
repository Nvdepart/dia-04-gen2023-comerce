<template>
  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <h2 class="text-md-h3">Newsletter</h2>
    <p class="text-md-h6 mt-5">Subscribe to receive discounts & more</p>
    <br>
    <v-sheet color="transparent" class="mx-auto" max-width="400">
        <v-text-field 
            label="Email" 
            type="email" 
            outlined clearable 
            prepend-inner-icon="mdi-email" 
            :rules="[rules.required, rules.email]"
            v-model="email"
        ></v-text-field>
        <v-btn @click="submit()" outlined rounded min-height="50">Subscribe</v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
    export default {
        data(){
            return{
                email: null,
                rules: {
                    required: value => !!value || 'Required.',
                    counter: value => value.length <= 20 || 'Max 20 characters',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    }
                }
            }
        },
        methods:{
            async submit(){
                await this.$swal({
                    title: "thank you for subscribing",
                    icon: "success",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    timer: 4000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    text: "You will notified when we have a deal or items on sale"
                })
                
            }
        }
    }
</script>