<template>
        <div class="">
            <div class="row p-sm-4 p-0 justify-content-between">
                <div class="col-xl-12 h-100 px-0 px-sm-4">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-2 px-0">
                            <general_data/>
                        </div>

                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-2 px-0">
                            <additional_data/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import general_data from "~/components/general_data.vue";
    import additional_data from "~/components/additional_data.vue";


    export default {
        layout:'default',
        components: {
            general_data,
            additional_data,
        },
        data() {
            return {
                posts:[],
                error_msg:'',
                timer: ''
            }
        },
        async asyncData ({ $axios }) {
              let async_data={posts:[]};
              await $axios.$get('/server/main/dashboard').then(response => {
                    async_data.posts=response.posts;
        })
                .catch(e => {
                    console.log('error response')
                    let response=e.response.data
                    async_data={
                        error_msg:'internal_server error'}
                });
            return async_data

        },
        async mounted() {
            await this.getData();
            this.timer = setInterval(this.getData, 30000)

          },
        beforeDestroy () {
      clearInterval(this.timer)
    },


    methods: {
        async getData() {
         await this.$axios.$get('/server/main/dashboard').then(response => {

                         this.posts=response.posts;

                    })
                    .catch(e => {
                        console.log('error response')
                        this.error_msg='internal_server error'
                    })


        }
    }
    }
</script>

<style scoped>

</style>