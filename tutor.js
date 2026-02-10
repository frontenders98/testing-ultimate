// Enhanced Tutor Logic with Conversational AI Behavior
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const welcomeScreen = document.getElementById('welcomeScreen');

// Progressive conversation state
let currentTopic = null;
let currentLevel = 'simple';
let conversationHistory = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleUserMessage();
        }
    });
    
    sendBtn.addEventListener('click', handleUserMessage);
});

// Handle user messages
function handleUserMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Hide welcome screen
    if (welcomeScreen) {
        welcomeScreen.style.display = 'none';
    }
    
    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Store in history
    conversationHistory.push({ role: 'user', message: message });
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process and respond
    setTimeout(() => {
        hideTypingIndicator();
        const response = processConversationalQuery(message);
        addMessage(response, 'tutor');
        conversationHistory.push({ role: 'tutor', message: response });
    }, 500);
}

// Smart conversational query processing
function processConversationalQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // Check for follow-up requests
    if (isFollowUpRequest(lowerQuery)) {
        return handleFollowUp(lowerQuery);
    }
    
    // Check for level change requests
    if (isDetailRequest(lowerQuery)) {
        return handleDetailRequest(lowerQuery);
    }
    
    // Check for example requests
    if (isExampleRequest(lowerQuery)) {
        return handleExampleRequest(lowerQuery);
    }
    
    // New topic - find best match
    let bestMatch = null;
    let highestScore = 0;
    
    for (const [topic, data] of Object.entries(businessKnowledge)) {
        let score = 0;
        
        // Check keyword matches
        data.keywords.forEach(keyword => {
            if (lowerQuery.includes(keyword)) {
                score += keyword.length;
            }
        });
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = topic;
        }
    }
    
    // Found a match
    if (bestMatch && highestScore > 0) {
        currentTopic = bestMatch;
        currentLevel = 'simple';
        
        const topicData = businessKnowledge[bestMatch];
        return formatConversationalResponse(topicData.simple);
    }
    
    // No match - helpful fallback
    return generateHelpfulFallback(lowerQuery);
}

// Check if user wants more detail
function isDetailRequest(query) {
    const detailPhrases = [
        'more detail', 'explain more', 'tell me more', 'dive deeper',
        'elaborate', 'in depth', 'detailed', 'break it down',
        'explain better', 'more info', 'keep going'
    ];
    
    return detailPhrases.some(phrase => query.includes(phrase));
}

// Check if user wants an example
function isExampleRequest(query) {
    const examplePhrases = [
        'example', 'real world', 'show me', 'case study',
        'real company', 'practical', 'actual', 'instance'
    ];
    
    return examplePhrases.some(phrase => query.includes(phrase));
}

// Check if it's a follow-up question
function isFollowUpRequest(query) {
    const followUpPhrases = [
        'what about', 'how about', 'what if', 'can you',
        'yes', 'sure', 'ok', 'continue', 'go on', 'yeah', 'yep'
    ];
    
    return followUpPhrases.some(phrase => query.includes(phrase)) && currentTopic;
}

// Handle request for more detail
function handleDetailRequest(query) {
    if (!currentTopic) {
        return "I'd love to explain more, but what topic are you interested in? Ask me about marketing, cash flow, motivation, leadership, or any business concept!";
    }
    
    const topicData = businessKnowledge[currentTopic];
    
    if (currentLevel === 'simple') {
        currentLevel = 'detailed';
        return formatConversationalResponse(topicData.detailed);
    } else if (currentLevel === 'detailed') {
        currentLevel = 'example';
        return formatConversationalResponse(topicData.example);
    } else {
        return `I've covered ${currentTopic} pretty thoroughly! Want to explore a related topic, or ask something specific about ${currentTopic}? Or we can move to a completely new business concept - your choice! 😊`;
    }
}

// Handle request for examples
function handleExampleRequest(query) {
    if (!currentTopic) {
        return "I can give you examples! But examples of what? Pick a topic like marketing, leadership, cash flow, or any business concept you're curious about!";
    }
    
    const topicData = businessKnowledge[currentTopic];
    currentLevel = 'example';
    return formatConversationalResponse(topicData.example);
}

// Handle follow-up questions
function handleFollowUp(query) {
    if (!currentTopic) {
        return "Hey! I'm ready to help, but I need to know what you're interested in first. Try asking about marketing, leadership, motivation, cash flow, or any business topic!";
    }
    
    const topicData = businessKnowledge[currentTopic];
    
    // If they say yes/sure/ok, progress to next level
    const affirmativePhrases = ['yes', 'yeah', 'yep', 'sure', 'ok', 'please', 'continue'];
    if (affirmativePhrases.some(phrase => query === phrase || query.startsWith(phrase))) {
        if (currentLevel === 'simple') {
            currentLevel = 'detailed';
            return formatConversationalResponse(topicData.detailed);
        } else if (currentLevel === 'detailed') {
            currentLevel = 'example';
            return formatConversationalResponse(topicData.example);
        }
    }
    
    // Generic follow-up
    return formatConversationalResponse(topicData[currentLevel]);
}

// Format response conversationally
function formatConversationalResponse(levelData) {
    let html = `<div class="tutor-response">`;
    html += `<div class="response-text">${formatTextWithBreaks(levelData.response)}</div>`;
    
    if (levelData.followUp) {
        html += `<div class="follow-up">
            <span class="follow-up-icon">💡</span>
            ${levelData.followUp}
        </div>`;
    }
    
    html += `</div>`;
    return html;
}

// Format text with proper line breaks
function formatTextWithBreaks(text) {
    return text
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Helpful fallback when no match found
function generateHelpfulFallback(query) {
    const topics = Object.keys(businessKnowledge).join(', ');
    
    // Check if they're asking a general question
    if (query.includes('?')) {
        return `<div class="tutor-response">
            <div class="response-text">
                Hmm, I'm not quite sure what you're asking about! I'm your business tutor and I can help with topics like:<br><br>
                • <strong>Marketing</strong> - how businesses attract customers<br>
                • <strong>Market Segmentation</strong> - dividing customers into groups<br>
                • <strong>Break-even Analysis</strong> - when businesses stop losing money<br>
                • <strong>Cash Flow</strong> - money moving in and out<br>
                • <strong>Motivation</strong> - keeping employees happy<br>
                • <strong>Leadership</strong> - different management styles<br><br>
                Just ask me something like "What is marketing?" or "Explain cash flow" and I'll help you out! 😊
            </div>
        </div>`;
    }
    
    return `<div class="tutor-response">
        <div class="response-text">
            I'm not sure I caught that! Could you rephrase? I can help with business topics like ${topics}. Just ask me about any of these! 😊
        </div>
    </div>`;
}

// Add message to chat
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = sender === 'user' ? 
        '<div class="avatar-icon">You</div>' : 
        '<div class="avatar-icon">📚</div>';
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = content;
    
    if (sender === 'user') {
        messageDiv.appendChild(bubble);
        messageDiv.appendChild(avatar);
    } else {
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
    }
    
    chatMessages.appendChild(messageDiv);
    
    // Animate
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Typing indicator
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <div class="avatar">
            <div class="avatar-icon">📚</div>
        </div>
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Suggestion chip handler
function askQuestion(question) {
    userInput.value = question;
    handleUserMessage();
}
