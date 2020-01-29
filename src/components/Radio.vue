<template>
    <div>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <!-- <img :src="radioIcon" class="img-fluid floating"> -->
                        <img src="../assets/img/theme/radio.png" class="img-fluid floating">
                    </div>

                    
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
            
                            <h1 style="font-size: 5em;font-weight: bold;">TalkBox</h1>
                            <h3>Internet Radio</h3>
                            <p>We bring you the best genre of music at the best times</p>
                            
                            <a href="#" class="btn btn-block btn-white btn-icon mb-3 mb-sm-0">
                                Jazz
                                <!-- <audio src="http://localhost:8000/stream.ogg" autoplay="true" controls="true" volume="1.0"></audio> -->
                                <!-- <audio src="http://cast2.servcast.net:2199/system/streaminfo.js" autoplay="true" controls="true" volume="1.0"></audio> -->
                                <!-- <audio controls autoplay="autoplay"><source src="http://162.244.80.118:9488/stream" type="audio/mp3"></audio> -->
                                <!-- <audio controls autoplay="autoplay"><source src="http://66.85.88.174:80/hot108" type="audio/mp3"></audio> -->
                            </a>
                            <a href="#" class="btn btn-block btn-white btn-icon mb-3 mb-sm-0">
                                Hiphop
                            </a>
                            <a href="#" class="btn btn-block btn-white btn-icon mb-3 mb-sm-0">
                                Blues
                            </a>
                        </div>
                        <br>
                        <div>
                            <router-link to="/podcast" class="btn btn-default">Podcast</router-link>
                            <router-link to="/" class="btn btn-default">Home</router-link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
