<template>
    <div class="inbox-body">
        <important-messages :messages="importantMessages"></important-messages>
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
        importantMessages() {
            return this.data.messages.filter(function(message) {
                return (message.type == 'incoming' && message.isImportant == true && !message.isDeleted)
            })
        }
    },
    components: {
        importantMessages: Messages
    }    
}
</script>