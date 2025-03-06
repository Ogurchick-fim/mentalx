import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Brain, Clock, ChevronRight, ChartBar as BarChart } from 'lucide-react-native';

export default function TestsScreen() {
  const [activeTab, setActiveTab] = useState('available');
  
  const availableTests = [
    {
      id: 1,
      title: 'Anxiety Assessment',
      description: 'Evaluate your anxiety levels with this clinically validated questionnaire.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      questions: 7,
      timeMinutes: 5,
    },
    {
      id: 2,
      title: 'Depression Screening',
      description: 'A standard tool to help identify symptoms of depression.',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      questions: 9,
      timeMinutes: 7,
    },
    {
      id: 3,
      title: 'Stress Level Test',
      description: 'Measure your current stress levels and identify potential stressors.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      questions: 10,
      timeMinutes: 8,
    },
    {
      id: 4,
      title: 'Sleep Quality Assessment',
      description: 'Evaluate your sleep patterns and identify potential sleep disorders.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      questions: 8,
      timeMinutes: 6,
    },
  ];
  
  const completedTests = [
    {
      id: 1,
      title: 'Anxiety Assessment',
      completedDate: '2023-10-15',
      score: 'Mild',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Stress Level Test',
      completedDate: '2023-10-10',
      score: 'Moderate',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mental Health Tests</Text>
        <Text style={styles.headerSubtitle}>Assess your mental wellbeing</Text>
      </View>
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'available' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('available')}
        >
          <Text 
            style={[
              styles.tabText, 
              activeTab === 'available' && styles.activeTabText
            ]}
          >
            Available Tests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'completed' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('completed')}
        >
          <Text 
            style={[
              styles.tabText, 
              activeTab === 'completed' && styles.activeTabText
            ]}
          >
            Completed Tests
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.testsContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'available' ? (
          <>
            <Text style={styles.sectionDescription}>
              Take these assessments to better understand your mental health. Results are private and only visible to you.
            </Text>
            
            {availableTests.map((test) => (
              <TouchableOpacity key={test.id} style={styles.testCard}>
                <Image 
                  source={{ uri: test.image }}
                  style={styles.testImage}
                />
                <View style={styles.testContent}>
                  <Text style={styles.testTitle}>{test.title}</Text>
                  <Text style={styles.testDescription}>{test.description}</Text>
                  
                  <View style={styles.testMetaContainer}>
                    <View style={styles.testMeta}>
                      <Brain size={16} color="#6366f1" />
                      <Text style={styles.testMetaText}>{test.questions} questions</Text>
                    </View>
                    <View style={styles.testMeta}>
                      <Clock size={16} color="#6366f1" />
                      <Text style={styles.testMetaText}>{test.timeMinutes} min</Text>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start Test</Text>
                    <ChevronRight size={16} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <>
            <Text style={styles.sectionDescription}>
              Review your past test results and track your progress over time.
            </Text>
            
            {completedTests.map((test) => (
              <TouchableOpacity key={test.id} style={styles.completedTestCard}>
                <View style={styles.completedTestHeader}>
                  <View style={styles.completedTestInfo}>
                    <Text style={styles.completedTestTitle}>{test.title}</Text>
                    <Text style={styles.completedTestDate}>Completed on {new Date(test.completedDate).toLocaleDateString()}</Text>
                  </View>
                  <View style={[
                    styles.scoreContainer,
                    test.score === 'Low' && styles.scoreLow,
                    test.score === 'Mild' && styles.scoreMild,
                    test.score === 'Moderate' && styles.scoreModerate,
                    test.score === 'Severe' && styles.scoreSevere,
                  ]}>
                    <Text style={styles.scoreText}>{test.score}</Text>
                  </View>
                </View>
                
                <View style={styles.completedTestFooter}>
                  <TouchableOpacity style={styles.viewResultsButton}>
                    <BarChart size={16} color="#6366f1" />
                    <Text style={styles.viewResultsText}>View Detailed Results</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.retakeButton}>
                    <Text style={styles.retakeButtonText}>Retake</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
            
            {completedTests.length === 0 && (
              <View style={styles.emptyStateContainer}>
                <Text style={styles.emptyStateText}>You haven't completed any tests yet.</Text>
                <TouchableOpacity 
                  style={styles.emptyStateButton}
                  onPress={() => setActiveTab('available')}
                >
                  <Text style={styles.emptyStateButtonText}>Take Your First Test</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
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
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#6366f1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  activeTabText: {
    color: '#6366f1',
  },
  testsContainer: {
    flex: 1,
    padding: 16,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  testCard: {
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
  testImage: {
    width: '100%',
    height: 120,
  },
  testContent: {
    padding: 16,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  testDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
    lineHeight: 20,
  },
  testMetaContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  testMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  testMetaText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
  startButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    marginRight: 4,
  },
  completedTestCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  completedTestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  completedTestInfo: {
    flex: 1,
  },
  completedTestTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  completedTestDate: {
    fontSize: 12,
    color: '#64748b',
  },
  scoreContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#e0e7ff',
  },
  scoreLow: {
    backgroundColor: '#dcfce7',
  },
  scoreMild: {
    backgroundColor: '#e0e7ff',
  },
  scoreModerate: {
    backgroundColor: '#fef3c7',
  },
  scoreSevere: {
    backgroundColor: '#fee2e2',
  },
  scoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4338ca',
  },
  completedTestFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewResultsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewResultsText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
    marginLeft: 4,
  },
  retakeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#f1f5f9',
  },
  retakeButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#64748b',
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyStateButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  emptyStateButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
});