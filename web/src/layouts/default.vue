<template>
    <div class="wrapper row">
        <div class="container content col-12">
            <div style="min-height: 100vh;"><nuxt/></div>
        </div>


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