const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const login = document.querySelector('#login')
const loginContent = document.querySelector('#login-content')
const signup =document.querySelector('#signup')
const signContent = document.querySelector('#sign-content')
// const createbtn = document.querySelector('#sign-content')
var contactBox,signupBox,loginBox,aboutBox; 
const closeButton_con = document.getElementById('closebtn-con');
const closeButton_log = document.getElementById('closebtn-log');
const closeButton_sign = document.getElementById('closebtn-sign');
// const closeButton = document.getElementById('closebtn');





signup.addEventListener('click',()=> {
   signupBox = new WinBox({
    title: 'SignUP',
    modal: true,
    width: '600px',
    height: '800px',
    mount: signContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
login.addEventListener('click',()=> {
   loginBox = new WinBox({
    title: 'Login',
    modal: true,
    width: '400px',
    height: '400px',
    mount: loginContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

about.addEventListener('click', () => {
   aboutBox = new WinBox({
    title: 'About Me',
  modal: true,
    width: '800',
    height: '400px',
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
    contactBox = new WinBox({
    title: 'Contact Me',
    modal:true,
    height: '600',
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})




closeButton_con.addEventListener('click', () => {
  contactBox.close();
  
});

closeButton_log.addEventListener('click', () => {
  loginBox.close();
  
});
closeButton_sign.addEventListener('click', () => {
  signupBox.close();
  
});

