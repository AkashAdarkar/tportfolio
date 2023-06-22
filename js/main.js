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
  const imageSrc = 'img/profile_pic.jpeg';
  const paragraphText =   "Hello world! I am AKASH ADARKAR ,a wannabe programmer. currently an engineering student pursuing computer science . I love to solve problems (its a lie) and  watching motorspots .";
  const bulletListItems = ["-porsche 911", "-4hrs of sleep", "-isolation"];
  const headingText = "Things I Need The Most:";
  const headingText1 = "Akash Adarkar(21)";
  const app = document.createElement('div');

  const image = document.createElement('img');
  image.src = imageSrc;
  image.style.height = '380px';
  image.style.width = '300px';
  image.alt = 'Floating Image';
  image.classList.add('float-left');
  app.appendChild(image);

  const heading1 = document.createElement('h3');
    heading1.textContent = headingText1;
    app.appendChild(heading1);
    heading1.classList.add('my_name');



  const paragraph = document.createElement('p');
  paragraph.textContent = paragraphText;
  paragraph.classList.add('typewriter');
  app.appendChild(paragraph);


  const heading = document.createElement('h3');
    heading.textContent = headingText;
    app.appendChild(heading);
    heading.classList.add('skills');


    const bulletList = document.createElement('ul');
  bulletListItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    listItem.classList.add('hobbies');
    bulletList.appendChild(listItem);
  });
  app.appendChild(bulletList);

  new WinBox({
    title: 'About Me',
    //background: '#000',
    modal:true,
    x: 'center',
    y: 'center',
    height:'600px',
    mount: app,
    onfocus: function () {
      this.setBackground('#00aa00');
      const text = paragraph.textContent;
      paragraph.textContent = '';

      let charIndex = 0;
      const delay = 50;

      function typeWriter() {
        if (charIndex < text.length) {
          paragraph.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, delay);
        }
      }

      typeWriter();
    }
  });
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



