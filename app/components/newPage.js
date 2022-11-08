import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";

export default function NewPage({ route }) {
  return <WebView source={{ uri: route.params.url }} />;
}
