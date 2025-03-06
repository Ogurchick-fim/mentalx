import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Bookmark, BookmarkCheck } from 'lucide-react-native';

export default function ArticlesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedArticles, setSavedArticles] = useState([2, 5]);
  
  const categories = ['All', 'Anxiety', 'Depression', 'Mindfulness', 'Sleep', 'Stress'];
  
  const articles = [
    {
      id: 1,
      title: 'Understanding Anxiety: Causes and Coping Strategies',
      excerpt: 'Learn about the root causes of anxiety and discover effective techniques to manage symptoms.',
      image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Anxiety',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'The Science of Meditation: How Mindfulness Changes Your Brain',
      excerpt: 'Discover the neurological benefits of regular meditation practice and how it can improve mental health.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Mindfulness',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'Sleep Hygiene: Building Healthy Sleep Habits',
      excerpt: 'Improve your sleep quality with these evidence-based practices for better sleep hygiene.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Sleep',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Recognizing Depression: Signs, Symptoms, and When to Seek Help',
      excerpt: 'Learn to identify the symptoms of depression and understand treatment options.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Depression',
      readTime: '12 min read'
    },
    {
      id: 5,
      title: 'Stress Management Techniques for Everyday Life',
      excerpt: 'Practical strategies to reduce stress and increase resilience in your daily routine.',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Stress',
      readTime: '9 min read'
    },
  ];
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const toggleSaved = (id) => {
    if (savedArticles.includes(id)) {
      setSavedArticles(savedArticles.filter(articleId => articleId !== id));
    } else {
      setSavedArticles([...savedArticles, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mental Health Articles</Text>
        <Text style={styles.headerSubtitle}>Expert insights and guidance</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Search size={20} color="#64748b" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search articles..."
          placeholderTextColor="#94a3b8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={true}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text 
              style={[
                styles.categoryText,
                activeCategory === category && styles.activeCategoryText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView 
        style={styles.articlesContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredArticles.map((article) => (
          <TouchableOpacity key={article.id} style={styles.articleCard}>
            <Image 
              source={{ uri: article.image }}
              style={styles.articleImage}
            />
            <View style={styles.articleContent}>
              <View style={styles.articleHeader}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleReadTime}>{article.readTime}</Text>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleExcerpt}>{article.excerpt}</Text>
              <View style={styles.articleFooter}>
                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Read Article</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.saveButton}
                  onPress={() => toggleSaved(article.id)}
                >
                  {savedArticles.includes(article.id) ? (
                    <BookmarkCheck size={20} color="#6366f1" />
                  ) : (
                    <Bookmark size={20} color="#64748b" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
  },
  categoriesContainer: {
    
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    
  },
  categoriesContent: {
    paddingHorizontal: 12,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    marginHorizontal: 4,
    height:60,
  },
  activeCategoryButton: {
    backgroundColor: '#6366f1',
      
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  activeCategoryText: {
    color: '#ffffff',
  },
  articlesContainer: {
    flex: 1,
    padding: 16,
  },
  articleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
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
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  articleCategory: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6366f1',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  articleReadTime: {
    fontSize: 12,
    color: '#64748b',
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  readButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});