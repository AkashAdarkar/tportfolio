const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const login = document.querySelector('#login')
const loginContent = document.querySelector('#login-content')
const signup =document.querySelector('#signup')
const signContent = document.querySelector('#sign-content')
// const createbtn = document.querySelector('#sign-content')






signup.addEventListener('click',()=> {
  const signupBox = new WinBox({
    title: 'SignUP',
    modal: true,
    width: '600px',
    height: '800px',
    // top: 75,
    // right: 100,
    // bottom: 75  ,
    // left:100,
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
  const loginBox = new WinBox({
    title: 'Login',
    modal: true,
    width: '400px',
    height: '400px',
    // top: 75,
    // right: 100,
    // bottom: 75  ,
    // left:100,
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
  const aboutBox = new WinBox({
    title: 'About Me',
  modal: true,
    width: '800',
    height: '400px',
    // top: 50,
    // right: 50,
    // bottom: 50,
    // left: 50,
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
  const contactBox = new WinBox({
    title: 'Contact Me',
    modal:true,
    width: '660',
    height: '444',
    // top: 150,
    // right: 50,
    // bottom: 50,
    // left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
