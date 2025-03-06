import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Moon, Sun, Utensils, Heart, Plus, Check } from 'lucide-react-native';

export default function HabitsScreen() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay();
  
  const [habits, setHabits] = useState([
    { id: 1, name: 'Sleep 8 hours', icon: 'Moon', completed: false, streak: 5 },
    { id: 2, name: 'Meditate', icon: 'Sun', completed: true, streak: 12 },
    { id: 3, name: 'Healthy meal', icon: 'Utensils', completed: false, streak: 3 },
    { id: 4, name: 'Exercise', icon: 'Heart', completed: false, streak: 7 },
  ]);
  
  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };
  
  const renderIcon = (iconName, color) => {
    switch(iconName) {
      case 'Moon': return <Moon size={24} color={color} />;
      case 'Sun': return <Sun size={24} color={color} />;
      case 'Utensils': return <Utensils size={24} color={color} />;
      case 'Heart': return <Heart size={24} color={color} />;
      default: return <Sun size={24} color={color} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Healthy Habits</Text>
        <Text style={styles.headerSubtitle}>Track your daily wellness activities</Text>
      </View>
      
      <View style={styles.weekContainer}>
        {days.map((day, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.dayButton, 
              selectedDay === index && styles.selectedDay,
              today === index && styles.todayButton
            ]}
            onPress={() => setSelectedDay(index)}
          >
            <Text 
              style={[
                styles.dayText, 
                selectedDay === index && styles.selectedDayText,
                today === index && styles.todayText
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <ScrollView style={styles.habitsContainer}>
        {habits.map((habit) => (
          <TouchableOpacity 
            key={habit.id} 
            style={styles.habitCard}
            onPress={() => toggleHabit(habit.id)}
          >
            <View style={styles.habitIconContainer}>
              {renderIcon(habit.icon, habit.completed ? '#ffffff' : '#6366f1')}
            </View>
            <View style={styles.habitInfo}>
              <Text style={styles.habitName}>{habit.name}</Text>
              <Text style={styles.habitStreak}>{habit.streak} day streak</Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.checkButton,
                habit.completed && styles.checkedButton
              ]}
              onPress={() => toggleHabit(habit.id)}
            >
              {habit.completed ? (
                <Check size={20} color="#ffffff" />
              ) : null}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{habits.filter(h => h.completed).length}/{habits.length}</Text>
          <Text style={styles.statLabel}>Today's Progress</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Week Streak</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>85%</Text>
          <Text style={styles.statLabel}>Completion Rate</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.addButton}>
        <Plus size={24} color="#ffffff" />
      </TouchableOpacity>
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
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  selectedDay: {
    backgroundColor: '#6366f1',
  },
  todayButton: {
    borderWidth: 2,
    borderColor: '#6366f1',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  selectedDayText: {
    color: '#ffffff',
  },
  todayText: {
    fontWeight: '700',
  },
  habitsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  habitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  habitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  habitInfo: {
    flex: 1,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  habitStreak: {
    fontSize: 14,
    color: '#64748b',
  },
  checkButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedButton: {
    backgroundColor: '#6366f1',
    borderWidth: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  statCard: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 3 - 20,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6366f1',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});