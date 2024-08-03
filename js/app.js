var chatButton = document.querySelector('.chatbox__button');
var chatContent = document.querySelector('.chatbox__support');
var icons = {
    isClicked: 'Clicked',
    isNotClicked: 'Not Clicked" />'
}
var chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);