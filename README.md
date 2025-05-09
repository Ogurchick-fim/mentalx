# 🧠 MentalX - Articles Screen

This is the **Articles Screen** for the MentalX mobile app — a mental health platform built with **React Native**. The screen displays categorized mental health articles, allowing users to explore topics like anxiety, depression, mindfulness, and stress.

---

## 📱 Features

- 🔍 Search through article titles and excerpts
- 🧩 Filter by categories (All, Anxiety, Depression, etc.)
- 📚 View article previews with read time
- 🔖 Save and unsave articles
- 🎯 Optimized layout for mobile

---

## 🛠 Tech Stack

- React Native
- Expo
- TypeScript / JavaScript
- Lucide React Native Icons
- SafeAreaView for iOS/Android compatibility

---

## 🧪 Screenshots

<img width="1470" alt="Screenshot 2025-05-09 at 6 10 48 PM" src="https://github.com/user-attachments/assets/d613f961-309f-49b9-b754-21e37b8e5bec" />
<img width="1469" alt="Screenshot 2025-05-09 at 6 10 41 PM" src="https://github.com/user-attachments/assets/e3567c0d-636a-48f9-846c-94051b31422f" />
<img width="1470" alt="Screenshot 2025-05-09 at 5 53 26 PM" src="https://github.com/user-attachments/assets/c77f2cd6-2d3a-4d67-ba4b-ede1acddae0d" />
<img width="1470" alt="Screenshot 2025-05-09 at 5 53 15 PM" src="https://github.com/user-attachments/assets/c88b295b-064f-48b7-8dff-038a77f018ef" />

---
📘 Project Report — MentalX: Articles Screen

1. Overview

The ArticlesScreen component is part of the MentalX mobile app — a mental health-focused platform built using React Native and Expo. This screen provides users with categorized mental health content, including insights on anxiety, mindfulness, stress management, sleep hygiene, and more.

⸻

2. Purpose

The main objective of this screen is to:
	•	Deliver educational and supportive articles to users.
	•	Help users easily search, filter, and save relevant content.
	•	Serve as a mental wellness resource that feels clean, modern, and accessible on mobile devices.

⸻

3. Key Features
	•	🔍 Search bar: Filters articles in real-time by title or description.
	•	🧠 Category filter: Allows quick filtering between article types (All, Anxiety, Depression, etc.).
	•	📰 Article cards: Show image, category, read time, title, and description.
	•	💾 Save button: Bookmark articles with visual feedback.
	•	🧭 Responsive layout: Works on Android and iOS, with scrollable lists and adaptive padding.

⸻

4. Technical Stack
	•	Framework: React Native (via Expo)
	•	Icons: Lucide-react-native
	•	State management: useState for local state (e.g. selected category, bookmarks)
	•	SafeAreaView: Ensures platform-safe UI rendering
	•	ScrollView: Horizontal scrolling for categories, vertical for article list

⸻

5. UI Design Adjustments
	•	Reduced category button size and padding for mobile usability.
	•	Merged multiple ScrollViews into one for layout consistency.
	•	Explicit height constraints applied to avoid category overlap with articles.
	•	Made styling consistent with MentalX brand (rounded corners, soft color palette, readable font sizes).

⸻

6. Possible Enhancements
	•	🔄 Replace ScrollView with FlatList for better performance on long article lists.
	•	📥 Load articles from an API instead of hardcoded data.
	•	✅ Add bookmarking persistence using AsyncStorage or Supabase.
	•	🌍 Multi-language support using i18next.

⸻

7. Conclusion

The ArticlesScreen is a key content hub within the MentalX app. It enables users to engage with valuable psychological content in a streamlined and user-friendly interface. The modular, readable codebase and visually accessible layout make it ideal for further development and scaling.
## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mentalx.git
cd mentalx
