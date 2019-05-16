<template>
  <div>
  <main>

    <section class="bg_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="bg_section_text">
              <h1>Talkbox</h1>
              <p>Listen to cool music while at work, home or anywhere.
                <br>
                check out our podcast for the latest tech news, interviews of tech entrepreneurs,
                talks about deep space and lots more. 
              </p>

              <div>
                <router-link to="/radio" class="btn btn-default">Radio</router-link>
                <router-link to="/podcast" class="btn btn-default">Podcast</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section section-lg bg-gradient-default">
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">About Us</h2>
            <p class="lead text-white">
              Our future can only be shaped by our decisions today.. Do you have an idea, event or just simply passionate About
              something and you want to talk to others about it, talk to us lets help you achieve that.
            </p>
          </div>
        </div>
      </div>
      <!-- SVG separator -->
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>

    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <div class="card bg-gradient-secondary shadow">
              <div class="card-body p-lg-5">
                <h4 class="mb-1">Contact Us</h4>
                <p class="mt-0">Do you have something to taslk to us about? Contact us now</p>
                <div class="form-group mt-5">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-user-run"></i></span>
                    </div>
                    <input class="form-control" placeholder="Your name" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" placeholder="Email address" type="email">
                  </div>
                </div>
                <div class="form-group mb-4">
                  <textarea class="form-control form-control-alternative" name="name" rows="4" cols="80" placeholder="Type a message..."></textarea>
                </div>
                <div>
                  <button type="button" class="btn btn-default btn-round btn-block btn-lg">Send Message</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">The amazing Team</h2>
            <p class="lead text-muted"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <!-- <div class="px-4">
              <img src="../assets/img/theme/team-1-800x800.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Ryan Tompson</span>
                  <small class="h6 text-muted">Web Developer</small>
                </h5>
                <div class="mt-3">
                  <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div> -->
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img src="assets/img/theme/team-2-800x800.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Moses</span>
                  <small class="h6 text-muted">...</small>
                </h5>
                <div class="mt-3">
                  <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img src="assets/img/theme/team-3-800x800.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Kindness</span>
                  <small class="h6 text-muted">...</small>
                </h5>
                <div class="mt-3">
                  <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <!-- <div class="px-4">
              <img src="../assets/img/theme/team-4-800x800.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">...</span>
                  <small class="h6 text-muted">Founder and CEO</small>
                </h5>
                <div class="mt-3">
                  <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
