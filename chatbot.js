document.getElementById("chatbot-toggle").addEventListener("click", () => {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.style.display = chatbotWindow.style.display === "block" ? "none" : "block";
});

document.getElementById("chatbot-send").addEventListener("click", () => {
    const input = document.getElementById("chatbot-input");
    const messages = document.getElementById("chatbot-messages");
    const userMessage = input.value.trim();

    if (userMessage) {
        const userBubble = document.createElement("div");
        userBubble.textContent = You: ${userMessage};
        messages.appendChild(userBubble);
        input.value = "";

        // Simulate bot response
        const botBubble = document.createElement("div");
        botBubble.textContent = "Bot: Thank you for your question. I’ll help you with crypto advice!";
        messages.appendChild(botBubble);
    }
});
