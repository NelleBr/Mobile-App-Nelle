import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const ProductDetail = ({ route }) => {
  const { title, description, image, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€ {price.toFixed(2)}</Text>

      <Text style={styles.label}>Aantal</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decreaseQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity
          onPress={increaseQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>
        Totale prijs: € {(price * quantity).toFixed(2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EEE7",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 340,
    borderRadius: 6,
    marginBottom: 25,
    resizeMode: "cover",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: "#333",
    marginBottom: 20,
  },
  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1F1F1F",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  quantityButton: {
    backgroundColor: "#A8B1AE",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: "#1F1F1F",
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
});

export default ProductDetail;
