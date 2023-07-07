//Nav bar appears

var dropdown = document.querySelector(".dropdown-button");
dropdown.addEventListener("click", () => {
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.toggle("active");
  });
});

//Recent Chat appears

var recentChats = document.querySelector(".rec-chats");
recentChats.addEventListener("click", (event) => {
  event.preventDefault();
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.remove("active");
  });
  var leftDivs = document.querySelectorAll(".left-div");
  leftDivs.forEach((div) => {
    div.classList.remove("active");
  });
  var recChats = document.querySelector(".recent-chats");
  recChats.classList.toggle("active");
});

//New chat appears

var newChat = document.querySelector(".new-chat-btn");
newChat.addEventListener("click", (event) => {
  event.preventDefault();
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.remove("active");
  });
  var leftDivs = document.querySelectorAll(".left-div");
  leftDivs.forEach((div) => {
    div.classList.remove("active");
  });
  var addChat = document.querySelector(".new-chat");
  addChat.classList.toggle("active");
});

//New group appears

var newGrp = document.querySelector(".create-grp");
newGrp.addEventListener("click", (event) => {
  event.preventDefault();
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.remove("active");
  });
  var leftDivs = document.querySelectorAll(".left-div");
  leftDivs.forEach((div) => {
    div.classList.remove("active");
  });
  var newGroup = document.querySelector(".new-grp");
  newGroup.classList.add("active");
});

//Profile appears

var profilebtn = document.querySelector(".profile");
profilebtn.addEventListener("click", (event) => {
  event.preventDefault();
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.remove("active");
  });
  var leftDivs = document.querySelectorAll(".left-div");
  leftDivs.forEach((div) => {
    div.classList.remove("active");
  });
  var userProfile = document.querySelector(".user-profile");
  userProfile.classList.toggle("active");
});

//Contacts appears

var contactsBtn = document.querySelector(".contacts");
contactsBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var sideBarList = document.querySelectorAll("#side-bar");
  sideBarList.forEach((item) => {
    item.classList.remove("active");
  });
  var leftDivs = document.querySelectorAll(".left-div");
  leftDivs.forEach((div) => {
    div.classList.remove("active");
  });
  var contactList = document.querySelector(".contact-list");
  contactList.classList.toggle("active");
});

//Selected chat in recent chats

const chats = document.querySelectorAll(".chat");
chats.forEach((chat) => {
  chat.addEventListener("click", (event) => {
    chats.forEach((otherchat) => {
      if (otherchat !== chat && otherchat.classList.contains("active")) {
        otherchat.classList.remove("active");
      }
    });
    chat.classList.toggle("active");
  });
});

// Select members in group

const friends = document.querySelectorAll(".new-grp .contact");
friends.forEach((friend) => {
  friend.addEventListener("click", (event) => {
    friend.classList.toggle("active");
  });
});

// Nav bar items selected

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    navItems.forEach((otheritem) => {
      if (otheritem !== item && otheritem.classList.contains("active")) {
        otheritem.classList.remove("active");
      }
    });
    item.classList.add("active");
  });
});
