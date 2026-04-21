import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const BlogDetail = ({ route }) => {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
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
    height: 280,
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
  content: {
    fontSize: 18,
    lineHeight: 30,
    color: "#333",
    marginBottom: 25,
  },
});

export default BlogDetail;
