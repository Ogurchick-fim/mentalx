import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar as CalendarIcon, Clock, Video, MapPin, Plus } from 'lucide-react-native';

export default function AppointmentsScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingAppointments = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Clinical Psychologist',
      date: '2023-11-15',
      time: '10:00 AM',
      duration: 50,
      type: 'video',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];
  
  const pastAppointments = [
    {
      id: 2,
      doctorName: 'Dr. Michael Chen',
      specialty: 'Psychiatrist',
      date: '2023-10-28',
      time: '2:30 PM',
      duration: 45,
      type: 'in-person',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Clinical Psychologist',
      date: '2023-10-10',
      time: '11:15 AM',
      duration: 50,
      type: 'video',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <Text style={styles.headerSubtitle}>Schedule and manage your sessions</Text>
      </View>
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'upcoming' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text 
            style={[
              styles.tabText, 
              activeTab === 'upcoming' && styles.activeTabText
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'past' && styles.activeTabButton
          ]}
          onPress={() => setActiveTab('past')}
        >
          <Text 
            style={[
              styles.tabText, 
              activeTab === 'past' && styles.activeTabText
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.appointmentsContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'upcoming' ? (
          <>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <View key={appointment.id} style={styles.appointmentCard}>
                  <View style={styles.appointmentHeader}>
                    <Image 
                      source={{ uri: appointment.image }}
                      style={styles.doctorImage}
                    />
                    <View style={styles.doctorInfo}>
                      <Text style={styles.doctorName}>{appointment.doctorName}</Text>
                      <Text style={styles.doctorSpecialty}>{appointment.specialty}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.appointmentDetails}>
                    <View style={styles.detailItem}>
                      <CalendarIcon size={16} color="#6366f1" />
                      <Text style={styles.detailText}>{formatDate(appointment.date)}</Text>
                    </View>
                    <View style={styles.detailItem}>
                      <Clock size={16} color="#6366f1" />
                      <Text style={styles.detailText}>{appointment.time} ({appointment.duration} min)</Text>
                    </View>
                    <View style={styles.detailItem}>
                      {appointment.type === 'video' ? (
                        <Video size={16} color="#6366f1" />
                      ) : (
                        <MapPin size={16} color="#6366f1" />
                      )}
                      <Text style={styles.detailText}>
                        {appointment.type === 'video' ? 'Video Call' : 'In-Person Visit'}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.appointmentActions}>
                    <TouchableOpacity style={styles.rescheduleButton}>
                      <Text style={styles.rescheduleButtonText}>Reschedule</Text>
                    </TouchableOpacity>
                    {appointment.type === 'video' && (
                      <TouchableOpacity style={styles.joinButton}>
                        <Text style={styles.joinButtonText}>Join Call</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.emptyStateContainer}>
                <Text style={styles.emptyStateText}>You don't have any upcoming appointments.</Text>
                <TouchableOpacity style={styles.emptyStateButton}>
                  <Text style={styles.emptyStateButtonText}>Schedule New Appointment</Text>
                </TouchableOpacity>
              </View>
            )}
            
            <TouchableOpacity style={styles.newAppointmentButton}>
              <Text style={styles.newAppointmentText}>Find a Therapist</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {pastAppointments.map((appointment) => (
              <View key={appointment.id} style={styles.pastAppointmentCard}>
                <View style={styles.appointmentHeader}>
                  <Image 
                    source={{ uri: appointment.image }}
                    style={styles.doctorImage}
                  />
                  <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{appointment.doctorName}</Text>
                    <Text style={styles.doctorSpecialty}>{appointment.specialty}</Text>
                  </View>
                </View>
                
                <View style={styles.appointmentDetails}>
                  <View style={styles.detailItem}>
                    <CalendarIcon size={16} color="#6366f1" />
                    <Text style={styles.detailText}>{formatDate(appointment.date)}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Clock size={16} color="#6366f1" />
                    <Text style={styles.detailText}>{appointment.time} ({appointment.duration} min)</Text>
                  </View>
                  <View style={styles.detailItem}>
                    {appointment.type === 'video' ? (
                      <Video size={16} color="#6366f1" />
                    ) : (
                      <MapPin size={16} color="#6366f1" />
                    )}
                    <Text style={styles.detailText}>
                      {appointment.type === 'video' ? 'Video Call' : 'In-Person Visit'}
                    </Text>
                  </View>
                </View>
                
                <View style={styles.pastAppointmentActions}>
                  <TouchableOpacity style={styles.notesButton}>
                    <Text style={styles.notesButtonText}>View Notes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bookAgainButton}>
                    <Text style={styles.bookAgainButtonText}>Book Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
      
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
  appointmentsContainer: {
    flex: 1,
    padding: 16,
  },
  appointmentCard: {
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
  pastAppointmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    opacity: 0.8,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#64748b',
  },
  appointmentDetails: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#334155',
    marginLeft: 8,
  },
  appointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rescheduleButton: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  rescheduleButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  joinButton: {
    flex: 1,
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 8,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  pastAppointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notesButton: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  notesButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  bookAgainButton: {
    flex: 1,
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 8,
  },
  bookAgainButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
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
  newAppointmentButton: {
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  newAppointmentText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366f1',
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