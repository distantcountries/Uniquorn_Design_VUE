<template>
  <div id="app">
    <div class="nav">
      <div class="nav_logo">
        <img src="./assets/logo_nav.png" class="nav_logo_logo" ><br />
        <img src="./assets/logo_text_nav.png" class="nav_logo_text" >
      </div>
      <div class="nav_links">
        <router-link to="/">About </router-link> 
        <router-link to="/covers">Book covers </router-link>
        <a href="#footerSection">Contact</a>
      </div>
    </div>
    <router-view/>
    <div class="footer" id="footerSection">
            <div class="footer_form" v-if="notSentMail">
                <form @submit.prevent="sendMail">
                    <h1>You want book cover?</h1>
                    <input type="text" placeholder="Name*" v-model="newMail.name" class="form-control" required pattern=".{2,}" title="Min 2 characters"/>
                    <input type="email" placeholder="Email*" v-model="newMail.email" class="form-control" required/>
                    <input type="text" placeholder="Subject*" v-model="newMail.subject" class="form-control" required pattern=".{2,}" title="Min 2 characters"/>
                    <textarea placeholder="Message*" v-model="newMail.message" class="form-control" required minlength="10" title="Min 10 characters" ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div class="sentMailMessage" v-if="sentMail">
                <h1>You mail was sent successfully!</h1>
            </div>
            <div class="footer_contact">
                <div class="social_media_icons">
                    <a href="#"><img src="./assets/linkedin.png" ></a>
                    <a href="#"><img src="./assets/facebook.png" ></a>
                    <a href="https://www.instagram.com/uniquorn_design/"><img src="./assets/instagram.png" ></a>
                    <a href="https://twitter.com/Uniquorn_Design"><img src="./assets/tweeter.png" ></a>
                    <a href="https://www.behance.net/uniquornde3f2d"><img src="./assets/behance.png" ></a>
                </div>
                <p>
                    uniquorn.design@gmail.com <br/>
                    Almaska 8, Novi Sad <br/>
                    063/ 00 11 123
                </p>
            </div>
        </div>
  </div>
</template>

<script>
import { mailsService } from './services/MailsService'
export default {
    data() {
        return {
            newMail: {
                name:'', 
                email:'', 
                subject:'', 
                message:''
            }, 
            sentMail:false, 
            notSentMail:true
        }
    },

    methods: {
        getDefaults() {
            this.newMail = {
                name:'', 
                email:'', 
                subject:'', 
                message:''
            }
        },
        sendMail(newMail) {
            mailsService.add(this.newMail)
            .then(response => {
                this.mailsService = this.getDefaults();
                this.sentMail = true;
                this.notSentMail = false;
            })
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}

/* --------------navigation-------------- */
.nav {
  background-color :rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.nav_logo {
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.nav_logo img {
    pointer-events: none;
}

.nav_logo_logo {
    width:30%;
}

.nav_logo_text {
    width: 80%;
}

.nav_links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

}

@media (min-width: 2240px) {
    .nav {
        padding: 1.5rem 0;
    }
    .nav_links {
        margin-right: 10rem;
        width:33%;
        font-size: 2.5rem;
    }

    .nav_logo {
        margin-left: 10rem;
    }
}

@media (max-width: 2240px) {
    .nav {
        padding: 1rem 0;
    }

    .nav_links {
        margin-right: 7rem;
        width:40%;
        font-size: 2rem;
    }

    .nav_logo {
        margin-left: 7rem;
    }
}

@media (max-width: 1900px) {
    .nav {
        padding: 1rem 0;
    }
    .nav_links {
        margin-right: 6rem;
        width:40%;
        font-size: 1.7rem;
    }

    .nav_logo {
        margin-left: 6rem;
    }
}

@media (max-width: 1500px) {
    .nav {
        padding: 1rem 0;
    }
    .nav_links {
        margin-right: 5rem;
        width:40%;
        font-size: 1.3rem;
    }

    .nav_logo {
        margin-left: 5rem;
    }
}

@media (max-width: 1220px) {
    .nav {
        padding: 1rem 0;
    }
    .nav_links {
        margin-right: 4rem;
        width:40%;
        font-size: 1.1rem;
    }

    .nav_logo {
        margin-left: 4rem;
    }
}

@media (max-width: 1030px) {
    .nav {
        padding: 0.7rem 0;
    }
    .nav_links {
        margin-right: 3rem;
        width:40%;
        font-size: 1rem;
    }

    .nav_logo {
        margin-left: 3rem;
        width: 17%;
    }
}

@media (max-width: 710px) {
    .nav {
        padding: 0.5rem 0;
    }
    .nav_links {
        margin-right: 0.7rem;
        width:60%;
    }

    .nav_logo {
        margin-left: 0.7rem;
        width: 25%;
    }
}

@media (max-width: 480px) {
    .nav {
        padding: 0.3rem 0;
        flex-direction: column;
    }
    .nav_links {
        margin-right: 1rem;
        margin-top:1rem;
        width:100%;
    }

    .nav_logo {
        margin-left: 0;
        width:40%;
    }
}

@media (max-width: 300px) and (min-width:250px) {
    .nav {
        padding: 0.2rem 0;
        flex-direction: column;
    }
    .nav_links {
        margin-right: 0.5rem;
        margin-top:0.5rem;
        width:100%;
        font-size: 0.8rem;
    }

    .nav_logo {
        margin-left: 0.5rem;
        width:40%;
    }
}

.nav_links a {
        font-family: 'Proza Libre', sans-serif;
        color: #ed1c24;
        font-weight: 300;
        width: 33%;
        text-align: center;
    }

.nav_links a:hover {
  font-family: 'Proza Libre', sans-serif;
  color:rgba(237, 28, 36, 0.5);
  font-weight: 300;
  text-decoration: none;
}



/* --------------footer-------------- */

.footer {
    padding: 5rem 25rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
}


@media (max-width: 2240px) {
    .footer {
        padding: 4rem 20rem;
    }
}

@media (max-width: 1500px) {
    .footer {
        padding: 4rem 10rem;
    }
}

@media (max-width: 1200px) {
    .footer {
        padding: 2rem;
    }
}

@media (max-width: 992px) {
    .footer {
        padding: 2rem 5rem;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .footer {
        padding: 0 0 1rem 0;
        flex-direction: column;
    }

    .footer h1 {
        font-size: 1rem;
    }
}

.footer_form, .sentMailMessage  {
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
}

 .footer_form form {
    margin-left: 3rem;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
} 

@media (max-width: 2240px) {
    .footer_form form {
        margin:0;
        width:100%;
        padding: 0 1rem 0 5rem;
        justify-content: flex-start;
    }

} 

@media (max-width: 1200px) {
    .footer_form, .sentMailMessage {
        width: 55%;
    }

    .footer_form form {
        margin:0;
        width:100%;
        padding: 0 2rem 0 5rem;
    }
} 

 @media (max-width: 992px) {
    .footer {
        padding: 1rem 3rem;
    }

    .footer_form, .sentMailMessage {
        width: 90%;
        justify-content: center;
    }

    .footer_form form {
        margin-left: 0;
        padding: 1rem;
        width:100%; 
    }
} 

@media (max-width: 480px) and (min-width: 300px) {
    .footer_form, .sentMailMessage {
        width: 100%;
        padding: 0;
        justify-content: center;
    }

    .footer_form form {
        width:100%;
        padding: 0;
        flex-direction: column;
        justify-content: center;
    }
} 

.footer input, .footer textarea {
    background-color:transparent;
    margin-bottom: 0.5rem;
    color:#aa9ac2;
}


.footer form button {
    padding: 0.4rem;
    width: 15%;
    border-radius: 0.2rem;
    border: none;
    background-color: #aa9ac2;
    color:#130924;
    font-weight: bold;
}

@media (max-width: 992px) {
    .footer form button {
        width: 100%;
    }

    .sentMailMessage h1 {
        padding-top: 1rem;
        text-align: center;
        margin-bottom: -1rem;
    }
} 

@media (max-width: 480px) and (min-width: 300px) {
    .footer input, .footer textarea {
        font-size: 0.7rem;
    }

    .footer form button {
        font-size: 0.7rem;
    }

    .sentMailMessage h1 {
        padding-top: 1rem;
        text-align: center;
        margin-bottom: -1rem;
    }
}

.footer form button:hover {
    opacity:0.5;
}

input:focus {
    background-color:none;
}

.footer_contact {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
}

.footer_contact p {
    width: 100%;
    flex-direction: column;
    text-align: right;
}


@media (max-width: 992px) {
    .footer_contact {
        width: 100%;
        flex-direction: column;
        text-align: center;
        padding-top: 2rem;
    } 

    .footer_contact p {
        text-align: center;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .footer {
        padding: 0 2rem;
    }

    .footer_contact {
        width: 100%;
        flex-direction: column;
        padding-top: 2rem;
    } 

    .footer_contact p {
        width: 100%;
        flex-direction: column;
        text-align: center;
        font-size: 0.8rem;
    }
}

.social_media_icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
}

.social_media_icons a {
    padding: 0.1rem;
}

.social_media_icons img:hover {
    opacity: 0.5;
    cursor: pointer;
}

@media (min-width: 2240px) {
    .social_media_icons {
        justify-content: flex-end;
    }

    .social_media_icons a {
        padding: 0.5rem;
    }

}

@media (max-width: 2240px) {
    .social_media_icons {
        justify-content: flex-end;
    }

    .social_media_icons a {
        padding: 0.5rem;
    }
}

@media (max-width: 1200px) {
}

@media (max-width: 992px) {
    .social_media_icons {
        justify-content: center;
    }
}

@media (max-width: 480px) and (min-width: 300px) {
    .footer_contact {
        width: 100%;
        padding: 0;
    }

    .social_media_icons {
        padding: 0 3rem;
        margin: 0.7rem 0 0.3rem;
    }
}
</style>
