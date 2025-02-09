document.addEventListener("DOMContentLoaded", function () {
  //Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  //Chatbot Toggle
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbot = document.getElementById("chatbot");
  const chatbotClose = document.getElementById("chatbot-close");
  chatbotToggle.addEventListener("click", function () {
    chatbot.style.display = "flex";
    chatbotToggle.style.display = "none";
  });
  chatbotClose.addEventListener("click", function () {
    chatbot.style.display = "none";
    chatbotToggle.style.display = "block";
  });

  // Chatbot Functionality
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotMessages = document.getElementById("chatbot-messages");

  // Function to append a chat message to the chat window
  function addMessage(message, sender = "bot") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", sender);
    msgDiv.textContent = message;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Sample scripted responses based on simple keywords
  function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (message.includes("about")) {
      return "We are a leading IT company dedicated to providing innovative and high-performance solutions. Our team of experts is committed to helping your business succeed in the digital world.";
    } else if (message.includes("services")) {
      return "We offer custom software development, cloud computing, and cybersecurity solutions.";
    } else if (message.includes("team")) {
      return "Our team consists of experienced professionals who are experts in their respective fields, dedicated to delivering high-quality IT solutions.";
    } else if (message.includes("hours")) {
      return "Our business hours are Monday to Friday, 9 AM to 6 PM. We are closed on weekends and public holidays.";
    } else if (message.includes("contact")) {
      return "You can contact us via our contact form or call us at (123) 456-7890. or Email: support@nexgensolutions.com";
    } else {
      return "I'm not sure I understand. Could you please provide more details? If needed, we will contact you shortly";
    }
  }

  // Event listener for sending a message
  chatbotSend.addEventListener("click", function () {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== "") {
      addMessage(userMessage, "user");
      setTimeout(function () {
        const response = getBotResponse(userMessage);
        addMessage(response, "bot");
      }, 500);
      chatbotInput.value = "";
    }
  });

  // Send message on Enter key press
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      chatbotSend.click();
    }
  });
});
