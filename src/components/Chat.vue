<template>
    <div>
        <div>
      
            <button class="open-button btn btn-default" @click="openForm()">
                <!-- <i class="fa fa-comment-dots"></i> -->
                <i class="fa fa-twitter"></i>
            </button>
            <div class="chat-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                <h1>Chat</h1>

                <!-- chart iFrame -->
                <iframe src="https://minnit.chat/mytalkbox?embed&nickname=" style="border:none;width:90%;height:500px;" allowTransparency="true">
                </iframe>
                
                <button type="button" class="btn cancel" @click="closeForm()">Close</button>
                <button type="submit" class="btn">Send</button>
                </form>

                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.closeForm();
    },

    methods:{
        openForm() {
        document.getElementById("myForm").style.display = "block";
        },

        closeForm() {
        document.getElementById("myForm").style.display = "none";
        }
    }
}
</script>

<style scoped>
    /* Button used to open the chat form - fixed at the bottom of the page */
    .open-button {
    /* background-color: #555; */
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    /* opacity: 0.8; */
    position: fixed;
    bottom: 23px;
    right: 28px;
    border-radius: 50%;
    border: .0625rem solid rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, 0.5) !important;
    }

    /* The popup chat - hidden by default */
    .chat-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
    }

    /* Add styles to the form container */
    .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
    }

    /* Full-width textarea */
    .form-container textarea {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
    resize: none;
    min-height: 200px;
    }

    /* When the textarea gets focus, do something */
    .form-container textarea:focus {
    background-color: #ddd;
    outline: none;
    }

    /* Set a style for the submit/send button */
    .form-container .btn {
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:10px;
    opacity: 0.8;
    }

    /* Add a red background color to the cancel button */
    .form-container .cancel {
    background-color: red;
    }

    /* Add some hover effects to buttons */
    .form-container .btn:hover, .open-button:hover {
    opacity: 1;
    }
</style>