// Predefined chatbot responses
const responses = {
    "What services do you offer?": "We offer product sales, customer support, and expert consultations.",
    "How can I contact support?": "You can contact support at support@example.com or call 123-456-7890.",
    "What are your operating hours?": "Our support is available 24/7 to assist you.",
    "Can I return a product?": "Yes! We have a 30-day return policy with simple steps.",
    "Do you offer international shipping?": "Yes, we offer worldwide shipping to most countries."
};

// Function to handle sending a message
function sendMessage(question) {
    const chatBody = document.getElementById('chatBody');

    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = question;
    chatBody.appendChild(userMsg);

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.textContent = responses[question] || "Sorry, I don't know that yet.";

        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }, 1000);
}
