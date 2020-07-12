<template>
	<Layout>
		<div id="wrapper">
			<section id="intro" class="wrapper style1 fullscreen fade-up">
				<div class="inner">
					<h1>Blog</h1>
					<div class="posts">
						<PostCard
							v-for="edge in $page.posts.edges"
							:key="edge.node.id"
							:post="edge.node"
						/>
					</div>
				</div>
			</section>
		</div>
	</Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
}
</script>
