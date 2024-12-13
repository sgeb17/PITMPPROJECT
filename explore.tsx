import React from "react";
import { Image, StyleSheet, Platform, View, Text, TextInput, FlatList } from "react-native";

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const categories = ["All", "Hot Dog", "Burger", "Pizza"];
const restaurants = [
  {
    id: 1,
    name: "Rose Garden Restaurant",
    description: "Burger - Chicken - Pizza - Wings",
    rating: 4.7,
    deliveryFee: "Free",
    deliveryTime: "20 min",
  },
  {
    id: 2,
    name: "Golden Spoon",
    description: "Pasta - Salad - Vegan",
    rating: 4.9,
    deliveryFee: "$2",
    deliveryTime: "15 min",
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#ffae42' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Header */}
      <ThemedView style={styles.headerContainer}>
        <Text style={styles.deliveryText}>DELIVER TO</Text>
        <Text style={styles.username}>Username</Text>
      </ThemedView>
      <ThemedText style={styles.greeting}>Hey User, Good Afternoon!</ThemedText>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search dishes, restaurants"
        placeholderTextColor="#888"
      />

      {/* Categories */}
      <ThemedView style={styles.categoriesContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>All Categories</ThemedText>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ThemedView>

      {/* Restaurants */}
      <ThemedView style={styles.restaurantsContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Open Restaurants</ThemedText>
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.restaurantCard}>
              <View style={styles.imagePlaceholder} />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.restaurantDescription}>{item.description}</Text>
                <View style={styles.restaurantDetails}>
                  <Text style={styles.rating}>⭐ {item.rating}</Text>
                  <Text style={styles.deliveryFee}>{item.deliveryFee}</Text>
                  <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                </View>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ThemedView>

      {/* Additional Info */}
      <ThemedView style={styles.additionalContainer}>
        <ThemedText type="subtitle">Explore Features</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to make changes or explore additional features using the tabs.
        </ThemedText>
        <HelloWave />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  deliveryText: {
    color: "#FF6F00",
    fontWeight: "bold",
  },
  username: {
    color: "#000",
    fontWeight: "600",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  category: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: "#FFD700",
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
  },
  restaurantsContainer: {
    marginTop: 16,
  },
  restaurantCard: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    elevation: 2,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  restaurantDescription: {
    color: "#555",
    marginVertical: 4,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    color: "#FFA500",
  },
  deliveryFee: {
    color: "#000",
  },
  deliveryTime: {
    color: "#000",
  },
  additionalContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
