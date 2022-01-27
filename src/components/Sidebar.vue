<template>
    <aside class="sm-side">
        <div class="user-head">
            <img src="../assets/images/profile.jpg" alt="Profile Picture">

            <div class="user-name">
                <h5>Mike Bonawitt</h5>
                <span class="email-address">m412bon@yahoo.com</span>
            </div>
        </div>

        <ul class="inbox-nav">
            <li class="active">
                <a href="#">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger float-end">?</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-envelope-o"></i>Sent <span class="label label-default float-end">?</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning float-end">?</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-trash-o"></i>Trash <span class="label label-default float-end">?</span>
                </a>
            </li>
            
        </ul>
    </aside>
</template>

<script>
export default {
    
}
</script>