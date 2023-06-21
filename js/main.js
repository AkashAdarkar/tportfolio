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

// const openLink = document.getElementById('open-link');




  // Create a new Winbox instance for the internal element
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
    loginBox.close();

 })




// signup.addEventListener('click',()=> {
//    signupBox = new WinBox({
//     title: 'SignUP',
//     modal: true,
//     width: '600px',
//     height: '800px',
//     mount: signContent,
//     onfocus: function () {
//       this.setBackground('#00aa00')
//     },
//     onblur: function () {
//       this.setBackground('#777')
//     },
//   })
  
// })





login.addEventListener('click',()=> {
   loginBox = new WinBox({
    title: 'Login',
    modal: true,
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
  const typewriterText = "I am an introvert!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut beatae odit asperiores nemo nobis repellat provident deserunt eius deleniti distinctio ut blanditiis repellendus veniam eaque pariatur, hic ea fugit accusamus.";
  const typewriterDelay = 50;
  let typewriterIndex = 0;
  let isTyping = true;
  
  function typeText() {
    const typewriterElement = document.createElement('p');
    typewriterElement.classList.add('typewriter');
  
    function type() {
      if (typewriterIndex === typewriterText.length) {
        isTyping = false;
        return;
      }
  
      typewriterElement.textContent += typewriterText.charAt(typewriterIndex);
      typewriterIndex++;
      setTimeout(type, typewriterDelay);
    }
  
    type();
  
    new WinBox({
      title: 'About',
     
      onblur: function () {
        this.setBackground('#777')
      },
     modal:true,
      x: 'center',
      y: 'center',
      mount: typewriterElement,
      onfocus: function () {
        this.setBackground('#00aa00')
        if (!isTyping) {
          typewriterElement.focus();
        }
      }
    });
  }
  
  typeText();
  
  
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

// Define the text to be typed
const text = ">akash@adarkar$";


// Set the typing speed (typeSpeed) in milliseconds
const typeSpeed = 100; // Adjust the value as per your desired speed

// Get the text element
const textElement = document.getElementById('name');

// Function to simulate typing effect
function typeWriter(text, index) {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(text, index);
    }, typeSpeed);
  } else {
    // Wait for a delay before starting the loop again
    setTimeout(() => {
      textElement.textContent = '';
      typeWriter(text, 0);
    }, 2000); // Adjust the delay time (in milliseconds) as desired
  }
}

// Call the typeWriter function to start the typing effect
typeWriter(text, 0);



