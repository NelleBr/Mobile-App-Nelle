import React, { useEffect, useState } from "react";
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
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "Alle categorieën",
  "699efb7ad137545e576a811e": "Shirts",
  "699f217d13a4e4ca82f4ec48": "Jassen",
  "69b01c41fdd5994b3ae0a7f9": "Truien",
  "69b01c62d57fec0046a3c0fb": "Sport",
  "69b01c99d0fbb0f345da563a": "Classic",
};

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [sortOption, setSortOption] = useState("price-asc");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/698c7fd1ddf949491802590b/products",
      {
        headers: {
          Authorization:
            "Bearer 3eee4cb5ec1e5a5a12ac22f965e7dbca444bf5cbcd9495408a119506e9545b7e",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = (data.items || []).map((item) => ({
          id: item.product?.id,
          title: item.product?.fieldData?.name,
          description: item.product?.fieldData?.description,
          price: (item.skus[0]?.fieldData?.price?.value || 0) / 100,
          image: {
            uri: item.skus[0]?.fieldData?.["main-image"]?.url,
          },
          category: item.product?.fieldData?.category
            ? categoryNames[item.product.fieldData.category[0]] ||
              "Onbekende categorie"
            : "Onbekende categorie",
        }));

        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/699ef94b72b40bd629e2bd8b/items",
      {
        headers: {
          Authorization:
            "Bearer 3eee4cb5ec1e5a5a12ac22f965e7dbca444bf5cbcd9495408a119506e9545b7e",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedBlogs = (data.items || []).map((item) => ({
          id: item.id,
          title: item.fieldData?.name,
          description: item.fieldData?.["post-summary"],
          image: {
            uri: item.fieldData?.["main-image"]?.url,
          },
          content: item.fieldData?.["post-body"],
        }));

        setBlogs(formattedBlogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Zoek een product of blog:</Text>
        <TextInput
          style={styles.input}
          placeholder="Zoeken..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Kies een categorie:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label="Alle categorieën" value="" />
            <Picker.Item label="Shirts" value="Shirts" />
            <Picker.Item label="Jassen" value="Jassen" />
            <Picker.Item label="Truien" value="Truien" />
            <Picker.Item label="Sport" value="Sport" />
            <Picker.Item label="Classic" value="Classic" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Sorteer producten:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sortOption}
            onValueChange={(itemValue) => setSortOption(itemValue)}
          >
            <Picker.Item label="Prijs oplopend" value="price-asc" />
            <Picker.Item label="Prijs aflopend" value="price-desc" />
            <Picker.Item label="Naam A-Z" value="name-asc" />
            <Picker.Item label="Naam Z-A" value="name-desc" />
          </Picker>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => console.log("Zoek knop gedrukt")}
      >
        <Text style={styles.buttonText}>Zoeken</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Producten</Text>

      {sortedProducts.map((product) => (
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
  picker: {
    backgroundColor: "#fff",
    marginBottom: 10,
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
  pickerContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default HomeScreen;
