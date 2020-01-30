<template>
    <div>
        <main>
            <section class="section section-lg">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-2">
                            <img src="../assets/img/theme/podcast.png" class="img-fluid floating">
                        </div>

                        
                        <div class="col-md-6 order-md-1">
                            <div class="pr-md-5">
                
                                <h1 style="font-size: 5em;font-weight: bold;">TalkBox</h1>
                                <h3>Podcast</h3>
                                <p>We podcast about a whole lot ranging from the latest tech news,
                                    interviews of tech entrepreneurs,
                                    talks about deep space and lots more.
                                </p>
                            
                            </div>
                            <br>
                            <div>
                                <!-- <router-link to="/radio" class="btn btn-default">Radio</router-link> -->
                                <button class="btn btn-default" @click="openForm">Radio</button>
                                <router-link to="/" class="btn btn-default">Home</router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section section-lg bg-gradient-default">
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                <div class="col-lg-10">
                    <h2 class="display-3 text-white">All Podcasts</h2>
                </div>
                </div>
            </div>
            <!-- SVG separator -->
            </section>
        </main>
    </div>
</template>


<script>
import axios from "axios"
export default {

    methods:{
        openForm() {
        document.getElementById("myForm2").style.display = "block";
        },

        closeForm() {
        document.getElementById("myForm2").style.display = "none";
        }
    },

    data(){
        return{
            iclient_id:"8bfef43117f8effacc4d8",
            client_secret:"9bb7225229f60b6f305fc",
            url_redirect:"/",
            scope:"_"
        }
    },

    mounted () {
        
        axios
        .get('https://api.podbean.com/v1/dialog/oauth', {
            params: {
                client_id: this.client_id,
                redirect_uri:this.url_redirect,
                scope:this.scope
            }
        }).then(response => {
            return response,
            // exchanging token for access
            axios
            .post('https://api.podbean.com/v1/oauth/token', {
                // auth: {
                //     username: this.client_id,
                //     password:  this.client_secret,
                // }
                params: {
                    code: {
                        username: this.client_id,
                        password:  this.client_secret,
                    },
                    grant_type:"authorization_code",
                    redirect_uri:this.url_redirect
                }
                })
                .then(function(response) {
                    return response
                })
                .catch(function(error) {
                    return error
                });
            })
        .catch(error => {
            this.errored = error
            this.errored = true
        })
    }
}

</script>

<style>
    .bg_section{
        padding-top: 1.5rem;
        padding-bottom: 19.5rem;
        text-align: center;
    }
    .bg_section_text{
        position: relative;
        top: 30%;
    }
    .bg_section_text>h1{
        font-size: 5em;
        font-weight: bold;
    }
</style>
