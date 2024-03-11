var chatButton = document.getElementById("chat-button");
    var chatContainer = document.getElementById("chatContainer");
    var minimizeButton = document.getElementById("minimize-button");
    var chatInput = document.getElementById("chat-input");
    var chatMessages = document.getElementById("conversation-group");
    var sendButton = document.getElementById("send-button");

    var chatbotResponses = [
        "Hello!",
        "How can I assist you?",
        "Let me know if you have any further questions",
        "I'd love to hear more about your projects.",
        "What's your favorite project in my portfolio?",
        "Tell me about your skills and expertise.",
        "Do you have any specific questions about my work?",
        "I'm here to help with any information you need.",
        "Feel free to ask anything about my portfolio.",
        "Sure, I'd love to chat about your interests. Tell me more!",
        "What's on your mind? Feel free to start the conversation.",
        "I'm all ears! Tell me about your background and interests."
    ];

    if (chatButton) {
        chatButton.addEventListener("click", function () {
            if (chatContainer) {
                chatContainer.classList.add("open");
            }
        });
    }

    if (minimizeButton) {
        minimizeButton.addEventListener("click", function () {
            if (chatContainer) {
                chatContainer.classList.remove("open");
            }
        });
    }

    function createMessage(message, isUser = true) {
        const newMessage = document.createElement('div');
        newMessage.classList.add(isUser ? 'sentText' : 'botText');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        return newMessage;
    }

    function chatbotResponse() {
        var randomIndex = Math.floor(Math.random() * chatbotResponses.length);
        var message = chatbotResponses[randomIndex];
        var botMessage = createMessage(message, false);
        botMessage.scrollIntoView();
    }

    chatInput.addEventListener("input", function (event) {
        if (event.target.value) {
            sendButton.classList.add("svgsent");
        } else {
            sendButton.classList.remove("svgsent");
        }
    });

    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var message = chatInput.value;
            chatInput.value = "";
            var userMessage = createMessage(message);
            userMessage.scrollIntoView();
            setTimeout(chatbotResponse, 1000);
            sendButton.classList.add("svgsent");
        }
    });

    if (sendButton) {
        sendButton.addEventListener("click", function () {
            var message = chatInput.value;
            chatInput.value = "";
            var userMessage = createMessage(message);
            userMessage.scrollIntoView();
            setTimeout(chatbotResponse, 1000);
            sendButton.classList.add("svgsent");
        });
    }