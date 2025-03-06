import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send, User, Bot } from 'lucide-react-native';

export default function AIAssistantScreen() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm your mental health assistant. How can I help you today?", 
      sender: 'assistant' 
    }
  ]);
  
  const scrollViewRef = useRef(null);
  
  const handleSend = () => {
    if (message.trim() === '') return;
    
    // Add user message to conversation
    const userMessage = {
      id: conversation.length + 1,
      text: message,
      sender: 'user'
    };
    
    setConversation([...conversation, userMessage]);
    setMessage('');
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "I understand how you're feeling. Would you like to talk more about that?",
        "That sounds challenging. Remember that it's okay to feel this way, and there are strategies that might help.",
        "Thank you for sharing that with me. What do you think might help you feel better right now?",
        "I'm here to listen. Would you like some suggestions for coping with these feelings?",
        "It's brave of you to express your feelings. Would you like to explore some mindfulness techniques that might help?"
      ];
      
      const aiMessage = {
        id: conversation.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'assistant'
      };
      
      setConversation(prevConversation => [...prevConversation, aiMessage]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Assistant</Text>
        <Text style={styles.headerSubtitle}>Your supportive companion</Text>
      </View>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {conversation.map((msg) => (
            <View 
              key={msg.id} 
              style={[
                styles.messageBubble, 
                msg.sender === 'user' ? styles.userBubble : styles.assistantBubble
              ]}
            >
              <View style={styles.avatarContainer}>
                {msg.sender === 'user' ? (
                  <User size={16} color="#ffffff" />
                ) : (
                  <Bot size={16} color="#ffffff" />
                )}
              </View>
              <View style={styles.messageTextContainer}>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="#94a3b8"
            multiline
          />
          <TouchableOpacity 
            style={styles.sendButton} 
            onPress={handleSend}
            disabled={message.trim() === ''}
          >
            <Send size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messagesContent: {
    paddingBottom: 8,
  },
  messageBubble: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  assistantBubble: {
    alignSelf: 'flex-start',
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  messageTextContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  messageText: {
    fontSize: 15,
    color: '#334155',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 15,
    color: '#334155',
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});