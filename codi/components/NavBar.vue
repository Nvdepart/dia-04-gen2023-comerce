<template>
    <div>
        <v-app-bar
            color="surface"
            height="80"
            class="el"
            app
            :style="{padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '' }">
            <v-toolbar-title
                @click="$router.push('/')" 
                class="text-md-h5 font-weight-bold pointer">
                <v-icon size="30" color="blue">
                    mdi-atlassian
                </v-icon>
                tlas-Expo
            </v-toolbar-title>
            <v-spacer />
            <v-btn nuxt to="/products" class="mr-md-2" icon>
                <v-icon size="20" color="yellow">mdi-store-outline</v-icon>
            </v-btn>
            <v-badge 
                overlap 
                v-if="$store.state.cart.cart.length > 0"
                :content="`${$store.state.cart.cart.length}`" >
                <v-btn nuxt to="/cart" icon>
                    <v-icon size="20" color="green">mdi-cart-outline</v-icon>
                </v-btn>
            </v-badge>
            <v-btn nuxt to="/cart" v-else icon>
                <v-icon size="20" color="green">mdi-cart-outline</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn  @click="toggleTheme"  icon>
                <v-icon size="20" color="blue">mdi-brightness-4</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        methods:{
            toggleTheme(){
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            }
        }
    }
</script>

<style scoped>

</style>