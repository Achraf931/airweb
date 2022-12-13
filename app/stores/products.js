export const useProducts = defineStore('products', {
    state: () => {
        return {
            products: [],
            product: [],
            cart: [],
        }
    },
    getters: {
        showProducts() {
            return this.products
        },
        showProduct() {
            return this.product
        },
        getProductsFromCart() {
            return this.cart
        },
        getSum() {
            return this.cart.reduce((sum,item) => sum + item.price, 0)
        }
    },
    actions: {
        async getProducts() {
            this.products = await $fetch('http://localhost:3000/products')
        },
        async getProductById(id) {
            this.product = await $fetch(`http://localhost:3000/products/${id}`)
        },
        addProductInCart(product) {
            this.cart.push(product)
        },
    },
    persist: {
        storage: persistedState.sessionStorage,
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot))
}