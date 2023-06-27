var dropdown = document.querySelector(".dropdown-button");
dropdown.addEventListener("click",()=>{
  dropdown.classList.toggle('active');
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item)=>{
    item.classList.toggle('active');
  })
});

const chats = document.querySelectorAll('.chat');
chats.forEach((chat)=>{
  chat.addEventListener('click', (event)=>{
    chats.forEach((otherchat)=>{
      if(otherchat !== chat && otherchat.classList.contains('active')){
        otherchat.classList.remove('active');
      }
    })
    chat.classList.toggle('active');
  })
})


const navItems = document.querySelectorAll('.nav-link');
navItems.forEach((item)=>{
  item.addEventListener('click', (event)=>{
    navItems.forEach((otheritem)=>{
      if(otheritem !== item && otheritem.classList.contains('active')){
        otheritem.classList.remove('active');
      }
    })
    item.classList.toggle('active');
  })
})