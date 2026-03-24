import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlogCard = ({ title, description, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk blog →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3EEE7",
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 6,
    marginBottom: 15,
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 15,
  },
  button: {
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
});

export default BlogCard;