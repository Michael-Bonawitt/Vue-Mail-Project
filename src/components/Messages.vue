<template>
    <table v-if="messages.length > 0" class="table table-inbox table-hover">
        <tbody>
            <tr :key="message.id" v-for="message in messages" @click="openMessage(message)" :class="{ unread: typeof message.isRead !== 'undefined' && !message.isRead }">
                <td>
                    <input type="checkbox">
                </td>
                <td>
                    <a href="#" v-if="message.isImportant !== undefined" @click="message.isImportant = !message.isImportant">
                        <i :class="['fa', 'fa-star', { important: message.isImportant }]"></i>
                    </a>
                </td>
                <td>{{ message.from.name }}</td>
                <td>{{ message.subject }}</td>
                <td><i v-if="message.attachments.length > 0" class="fa fa-paperclip"></i></td>
                <td class="text-right">{{ message.date.fromNow() }}</td>
            </tr>
        </tbody>
    </table>

    <p v-else>No mesages here yet.</p>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    methods: {
        openMessage(message) {
            eventBus.$emit('changeView', {
                tag: 'app-view-message',
                title: message.subject,
                data: {
                    message: message
                }
            });
        }
    }
}
</script>