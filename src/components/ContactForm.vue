<template>
    <form name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <div class="fields">
            <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="formData.name" />
            </div>
            <div class="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="formData.email" />
            </div>
            <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5" v-model="formData.message" />
            </div>
        </div>
        <ul class="actions">
            <li>
            <button type="submit" class="button submit">Send Message</button>
            </li>
        </ul>
    </form>
</template>

<script>
export default {
    name: "ContactForm",

    data() {
        return {
            formData: {},
        };
    },

    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => {
                this.$toasted.success('Message was succesfully sent', { duration: 3000 })
                this.formData = {}
            })
            .catch(() => this.$toasted.error('Unfortunately message was not sent', { duration: 3000 }))
        }
        }
};
</script>