export const useProducts = defineStore('products', {
    state: () => {
        return {
            products: [],
            product: [],
            cart: [],
            loading: false,
            notification: false,
        }
    },
    getters: {
        isLoading() {
            return this.loading
        },
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
            this.loading = true
            try {
                this.products = await $fetch('http://localhost:3000/products')
            } catch (e) {
                console.log(this.error.message)
            } finally {
                this.loading = false
            }
        },
        async getProductById(id) {
            this.loading = true
            try {
                this.product = await $fetch(`http://localhost:3000/products/${id}`)
            } catch (e) {
                console.log(this.error.message)
            } finally {
                this.loading = false
            }
        },
        addProductInCart(product) {
            try {
                this.cart.push(product)
                this.notification = true
            } catch (e) {
                console.log(e.message)
            } finally {
                setTimeout(() => this.notification = false, 3000)
            }
        },
        hideNotification() {
            this.notification = false
        },
        resetCart() {
            this.cart = []
        }
    },
    persist: {
        storage: persistedState.sessionStorage,
    },
    paths: ['products', 'product', 'loading', 'notification']
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot))
}