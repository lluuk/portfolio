<template>
  <Layout>
    <div id="wrapper">
			<section id="intro" class="wrapper style1 fullscreen fade-up">
				<div class="inner">
          <div class="post-title">
            <h1 class="post-title__text">
              {{ $page.post.title }}
            </h1>

            <div class="post-meta">Posted {{ $page.post.date }}.</div>

          </div>

          <div class="post content-box">
            <div class="post__content" v-html="$page.post.content" />

            <div>
              <PostTags :post="$page.post" />
            </div>
          </div>
				</div>
			</section>
    </div>
  </Layout>
</template>

<script>
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<style lang="scss">
.post-title {
  text-align: center;
  margin-bottom: 75px;

  &__text {
    margin-bottom: 10px;
  }
}

.post-meta {
  margin-bottom: 20px;
}

.post {

  &__content {
    img {
      display: block;
      max-width: 100%;
    }

    h2 {
      margin-top: 75px;
    }
  }
}
</style>
