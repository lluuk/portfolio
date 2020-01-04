<template>
  <Layout>
    <BaseSidebar />

    <div id="wrapper" v-scroll-spy>
      <section id="intro" class="wrapper style1 fullscreen fade-up">
        <div class="inner">
          <h1>Hello, I'm Łukasz Zapolski.</h1>
          <p>I'm a frontend developer.</p>
          <ul class="actions">
            <li>
              <a v-scroll-to="'#one'" class="button">Check more</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" class="wrapper style2 spotlights">
        <section>
          <a href="/#" class="image" alt="image">
            <g-image src="~/assets/img/pic01.jpg" alt data-position="center center" />
          </a>
          <div class="content">
            <div class="inner">
              <h2>Sed ipsum dolor</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" class="image" alt="image">
            <g-image src="~/assets/img/pic02.jpg" alt data-position="center center" />
          </a>
          <div class="content">
            <div class="inner">
              <h2>Feugiat consequat</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" class="image" alt="image">
            <g-image src="~/assets/img/pic03.jpg" alt data-position="center center" />
          </a>
          <div class="content">
            <div class="inner">
              <h2>Ultricies aliquam</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" class="wrapper style3 fade-up">
        <div class="inner">
          <h2>What we do</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div class="features">
            <section>
              <span class="icon major fa-code" />
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span class="icon major fa-lock" />
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span class="icon major fa-cog" />
              <h3>Sed erat ullam corper</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span class="icon major fa-desktop" />
              <h3>Veroeros quis lorem</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span class="icon major fa-chain" />
              <h3>Urna quis bibendum</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span class="icon major fa-diamond" />
              <h3>Aliquam urna dapibus</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
          <h2>Get in touch</h2>
          <p>Have a question or want to work together?</p>
          <div class="split style1">
            <section>
              <form method="post" action="#">
                <div class="fields">
                  <div class="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div class="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div class="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul class="actions">
                  <li>
                    <a href="/#" class="button submit">Send Message</a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul class="contact">
                <li>
                  <h3>Email</h3>
                  <a href="mailto:luk.zapolski@gmail.com">luk.zapolski@gmail.com</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul class="icons">
                    <li>
                      <a href="https://twitter.com/luuuk_17" target="_blank" class="fa-twitter">
                        <span class="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/lluuk" target="_blank" class="fa-github">
                        <span class="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/%C5%82ukasz-zapolski-16115b107"
                        target="_blank"
                        class="fa-linkedin"
                      >
                        <span class="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import BaseSidebar from "~/components/BaseSidebar";
export default {
  components: {
    BaseSidebar
  }
};
</script>
