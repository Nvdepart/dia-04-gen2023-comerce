<template>
    <div>
        <NavBar />
        <br>
        <div v-if="$store.state.cart.cart.length == 0" class="text-center">
            <p>No item just yet. Keep shopping</p>

        </div>
        <v-container>
            <v-row>
                <template v-for="(c, i) in $store.state.cart.cart">
                    <v-col :key="`cartItem${i}`">
                        <v-card color="surface" >
                            <v-btn
                                @click="$store.commit('cart/RemoveCartItem', i)"
                                absolute
                                top
                                right
                                icon
                            >
                            <v-icon size="18">mdi-delete</v-icon>
                        </v-btn>
                        <v-row dense>
                            <v-col md="3">
                                <v-img 
                                    class="rounded-lg"
                                    height="220"
                                    :src="c.product.image"
                                ></v-img>
                            </v-col>
                            <v-col class="pl-5 pt-2" md="9">
                                <h2 class="text-md-h6 font-height-bold">
                                    {{ c.product.name }}
                                </h2>
                                <p class="primary--text mt-2">
                                    {{ $formatMoney(c.product.price * c.quantity) }}
                                </p>
                                <v-btn 
                                    @click="$store.commit('cart/IncreaseItemCount', i)"
                                    icon
                                >
                                    <v-icon size="20">
                                        mdi-plus-circle
                                    </v-icon>
                                </v-btn>
                                <span class="mx-2">{{ c.quantity }}</span>
                                <v-btn
                                  @click="$store.commit('cart/DecreaseItemCount', i)"
                                  icon
                                >
                                  <v-icon size="20">mdi-minus-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        </v-card>
                    </v-col>
                </template>
            </v-row>
        </v-container>
        <br><br>
        <Footer />
        <scrollTop />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>