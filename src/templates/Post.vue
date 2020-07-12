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
            <div class="post__header">
              <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            </div>

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
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  text-align: center;

  &__text {
    margin-bottom: 10px;
  }
}

.post-meta {
  margin-bottom: 20px;
}

.post {

  &__header {

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
