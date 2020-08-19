<template>
     <div class="row px-sm-4 px-0 justify-content-between">
         <div class="col-xl-12 h-100 px-0 px-sm-4">
             <div class="row d-flex align-items-center justify-content-center">
                 <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-2 px-0">Account</div>
                 <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-2 px-0">
                     <additional_data/>
                 </div>
                 <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 pb-2 px-0">
                     <general_data/>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
    import general_data from "../../components/general_data.vue";
    import additional_data from "../../components/additional_data.vue";


    export default {
        layout:'default',
        components: {
            general_data,
            additional_data,
        }
    }
</script>

<style scoped>

</style>