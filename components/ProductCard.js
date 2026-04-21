import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductCard = ({ title, description, price, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.price}>€ {price}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Bekijk product" color="#A8B1AE" onPress={onPress} />
      </View>
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
    height: 260,
    borderRadius: 6,
    marginBottom: 15,
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: "#1F1F1F",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 15,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default ProductCard;