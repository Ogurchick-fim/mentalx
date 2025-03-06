import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ArrowRight } from 'lucide-react-native';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });
  
  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
    
    // Set daily quote
    const quotes = [
      { text: 'Mental health is not a destination, but a process.', author: 'Noam Shpancer' },
      { text: "You don't have to control your thoughts. You just have to stop letting them control you", author: 'Dan Millman' },
      { text: 'Self-care is how you take your power back.', author: 'Lalah Delia' },
      { text: 'The strongest people are those who win battles we know nothing about.', author: 'Unknown' },
      { text: 'You are not alone in this journey.', author: 'Unknown' }
    ];
    
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.name}>Sarah</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#4b5563" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>"{quote.text}"</Text>
          <Text style={styles.quoteAuthor}>— {quote.author}</Text>
        </View>
        
        <Text style={styles.sectionTitle}>How are you feeling today?</Text>
        <View style={styles.moodContainer}>
          {['Great', 'Good', 'Okay', 'Low', 'Bad'].map((mood) => (
            <TouchableOpacity key={mood} style={styles.moodButton}>
              <Text style={styles.moodText}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Quick access</Text>
        <View style={styles.quickAccessContainer}>
          {[
            { title: 'Talk to AI', icon: 'MessageSquare', route: 'ai-assistant' },
            { title: 'Track habits', icon: 'Activity', route: 'habits' },
            { title: 'Take a test', icon: 'Brain', route: 'tests' },
            { title: 'Book session', icon: 'Calendar', route: 'appointments' },
          ].map((item) => (
            <TouchableOpacity key={item.title} style={styles.quickAccessButton}>
              <Text style={styles.quickAccessText}>{item.title}</Text>
              <ArrowRight size={16} color="#6366f1" />
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Featured article</Text>
        <TouchableOpacity style={styles.articleCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
            style={styles.articleImage}
          />
          <View style={styles.articleContent}>
            <Text style={styles.articleTitle}>5 Simple Mindfulness Practices for Daily Life</Text>
            <Text style={styles.articleExcerpt}>Discover easy ways to incorporate mindfulness into your everyday routine...</Text>
            <Text style={styles.articleReadMore}>Read more</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#64748b',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteCard: {
    backgroundColor: '#ede9fe',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4c1d95',
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#6d28d9',
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  moodButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
  },
  moodText: {
    color: '#4338ca',
    fontWeight: '500',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickAccessButton: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  quickAccessText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#334155',
  },
  articleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 180,
  },
  articleContent: {
    padding: 16,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  articleReadMore: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
  },
});