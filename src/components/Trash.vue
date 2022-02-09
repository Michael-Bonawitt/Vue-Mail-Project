<template>
    <div class="inbox-body">
        <trashed-messages :messages="trashedMessages"></trashed-messages>
    </div>
</template>

<script>
import Messages from './Messages.vue'

export default {
    props: {
        data: {
            type: Array, 
            required: true
        }
    },
    computed: {
        trashedMessages() {
            return this.data.messages.filter(function(message) {
                return message.isDeleted == true
            })
        }
    },
    components: {
        trashedMessages: Messages
    }    
}
</script>