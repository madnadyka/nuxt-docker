<template>
    <div class="wrapper row">
        <div class="container content col-12">

            <div class="header_img">
                <div class="header">
                    <div id="header-top" class=" border-bottom-0  col-12">
                        <div class="container-fluid col-xl-10">
                            <nav class="navbar navbar-expand-lg navbar-dark w-100">
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li>
                                        <nuxt-link class="nav-link" to="/user">Account</nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light w-100 justify-content-center">
                        <div class="mt-5 pt-5 text-white" style="height: 17rem">
                            <nuxt-link class="nav-link" to="/"><h1>Main page</h1></nuxt-link>
                        </div>
                    </nav>
                </div>
            </div>
            <div style="min-height: 100vh;"><nuxt/></div>
        </div>

        <footer class="pt-2 border-top bg-dark">
            <div class="row pl-xl-5 ml-xl-5 ml-lg-3 ml-md-4 ml-sm-4">
                <div class="col-10 col-xl-6 col-lg-8 col-md-8 col-sm-8 w-100 text-left">
                    <div class="text-light my-1 py-1 my-md-2 py-md-2">
                        <h6>Example</h6>
                        <a class="text-gray">Make the world a better place.</a>
                    </div>
                </div>
                <div class="col-10 col-xl-2 col-lg-2 col-md-2 col-sm-2 w-100 text-left">
                    <div class="text-light my-1 py-1 my-md-2 py-md-2">
                        <h6>Product</h6>
                        <div><a class="text-gray" href=''>Link</a></div>
                        <div><a class="text-gray" href=''>Link</a></div>
                    </div>
                </div>
                <div class="col-10 col-xl-2 col-lg-2 col-md-2 col-sm-2 w-100 text-left">
                    <div class="text-light my-1 py-1 my-md-2 py-md-2">
                        <h6>Language</h6>
                        <div><a class="text-gray" href=''>English</a></div>
                        <div><a class="text-gray" href=''>Русский</a></div>
                    </div>
                </div>
            </div>
        </footer>


    </div>

</template>


<script>
    export default {
        head: {
            titleTemplate: 'Example page',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
                {'http-equiv': 'Content-Type', content: "text/html; charset=utf-8"},
                {'http-equiv': 'X-UA-Compatible', content: "IE=edge"},
                {'http-equiv': 'Content-Type', content: "text/html; charset=UTF-8"},
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                    crossorigin: "anonymous"
                },
                {rel: "stylesheet", href: "/css/style.css"}
            ],
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
                    integrity: "sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh",
                    crossorigin: "anonymous"
                },
                {
                    src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                    integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
                    crossorigin: "anonymous"
                },
                {
                    src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js',
                    integrity: "sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ",
                    crossorigin: "anonymous"
                }
            ],
        },
    }


</script>

<style scoped>

</style>