<template>
  <Layout>
    <BaseSidebar />

    <div id="wrapper" v-scroll-spy>
      <section id="intro" class="wrapper style1 fullscreen fade-up">
        <div class="inner" v-scroll-spy-active v-scroll-spy-link>
          <h1>Hello, I'm Łukasz Zapolski.</h1>
          <p>I'm ambitious Frontend Developer with over 3 years of experience. <br/>
          I have experience building many web and mobile applications.<br/><br/>
          <a v-scroll-to="'#three'">Let's make something special</a></p>
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
              <h2>Everyday journal</h2>
              <p>
                Mobile App for IOS and Android. Work in progress.
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
              <h2>Dasboard panel</h2>
              <p>
                Web application. Work in progress.
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
              <h2>Social app</h2>
              <p>
                Work in progress.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" class="wrapper style3 fade-up">
        <div class="inner">
          <h2>My skills</h2>
          <div class="features">
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'html5']"/></span>
              <p>HTML</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'css3-alt']"/></span>
              <p>CSS</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'js-square']"/></span>
              <p>Javascript</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'react']"/></span>
              <p>React</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'vuejs']"/></span>
              <p>Vue</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>PWA</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'react']"/></span>
              <p>React Native</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'node']"/></span>
              <p>Node.js</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Redux</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Vuex</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'react']"/></span>
              <p>Next.js</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'vuejs']"/></span>
              <p>Nuxt.js</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'bootstrap']"/></span>
              <p>Bootstrap</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Material UI</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>GraphQL</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Appolo</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'git']"/></span>
              <p>Git</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'sass']"/></span>
              <p>Sass</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Jest</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Webpack</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'gulp']"/></span>
              <p>Gulp</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>css-in-js</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Gridsome</p>
            </section>
            <section>
              <span class="icon major"><font-awesome :icon="['fab', 'codepen']"/></span>
              <p>Netlify</p>
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
              <contact-form />
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
                      <a href="https://twitter.com/luuuk_17" target="_blank">
                        <font-awesome :icon="['fab', 'twitter']"/>
                        <span class="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/lluuk" target="_blank">
                        <font-awesome :icon="['fab', 'github']"/>
                        <span class="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/%C5%82ukasz-zapolski-16115b107"
                        target="_blank"
                      >
                        <font-awesome :icon="['fab', 'linkedin']"/>
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
import ContactForm from "~/components/ContactForm";
export default {
  components: {
    BaseSidebar,
    ContactForm,
  },
};
</script>
