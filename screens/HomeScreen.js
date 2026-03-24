import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const products = [
    {
      id: 1,
      title: "Vintage 80s/90s FILA Track Jacket",
      description:
        "Retro Fila track jacket met opvallende kleuren en een sportieve jaren 90 uitstraling.",
      price: 70,
      image: require("../images/placeholder.webp"),
    },
    {
      id: 2,
      title: "Vintage Sport Jacket",
      description:
        "Een unieke vintage sportjas met blauwe en groene details voor een echte retro look.",
      price: 65,
      image: require("../images/placeholder.webp"),
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Vintage Kleuren Combineren",
      description:
        "Ontdek hoe je zachte tinten en klassieke kleuren stijlvol combineert in een vintage outfit.",
      image: require("../images/placeholder.webp"),
      date: "14 maart 2026",
      content:
        "Kleuren spelen een belangrijke rol in vintage mode. Veel vintage kledingstukken hebben unieke kleuren en patronen die je niet altijd terugziet in moderne kleding. Door deze kleuren op de juiste manier te combineren kun je een outfit creëren die zowel stijlvol als tijdloos is. Zachte tinten zoals beige, crème en pasteltinten passen perfect bij een vintage uitstraling. Ook aardetinten zoals bruin, terracotta en olijfgroen zorgen voor een warme en authentieke look.",
    },
    {
      id: 2,
      title: "Duurzaam Shoppen Met Vintage",
      description:
        "Lees waarom tweedehands en vintage kleding niet alleen mooi, maar ook duurzaam is.",
      image: require("../images/placeholder.webp"),
      date: "20 maart 2026",
      content:
        "Vintage shoppen is een slimme keuze als je duurzamer wilt leven. Door kleding een tweede leven te geven, verminder je afval en help je de mode-industrie minder belastend te maken voor het milieu. Bovendien vind je vaak unieke stukken die niemand anders heeft.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Maison Vintage</Text>
        <Text style={styles.subTitle}>Onze Producten</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Zoek een product of blog:</Text>
        <TextInput
          style={styles.input}
          placeholder="Typ hier iets..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Text style={styles.sectionTitle}>Producten</Text>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          onPress={() => navigation.navigate("ProductDetail", product)}
        />
      ))}

      <Text style={styles.blogTitle}>Blogs</Text>

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          onPress={() => navigation.navigate("BlogDetail", blog)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EEE7",
    padding: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  brand: {
    fontSize: 32,
    color: "#1F1F1F",
    marginBottom: 25,
  },
  subTitle: {
    fontSize: 40,
    fontStyle: "italic",
    color: "#A8B1AE",
    marginBottom: 20,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#222",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#A8B1AE",
    padding: 16,
    borderRadius: 4,
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 32,
    fontStyle: "italic",
    color: "#A8B1AE",
    marginBottom: 20,
  },
  blogTitle: {
    fontSize: 32,
    fontStyle: "italic",
    color: "#A8B1AE",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;