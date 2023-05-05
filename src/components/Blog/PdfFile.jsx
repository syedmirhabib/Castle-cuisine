import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'justify',
    margin: 20,
  },
});

const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>In blog page you will find 4 questions and their answers!</Text>
        <Text style={styles.subtitle}>What is a custom hook, and why will you create a custom hook?</Text>
        <Text style={styles.content}>Answer: A custom hook is a reusable function that contains a set of logic and stateful operations for a specific task in a React application. Custom hooks allow us to extract common logic from components and share it across multiple components. We create custom hooks to simplify the code, reduce duplication, and improve the application's performance and readability.</Text>
        <Text style={styles.subtitle}>Differences between nodejs and express js?</Text>
        <Text style={styles.content}>Answer: Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. Express.js is a web framework that is built on top of Node.js. While Node.js provides the basic functionality to run JavaScript code on the server-side, Express.js provides additional features and tools for building web applications, such as routing, middleware, and templates.</Text>
        <Text style={styles.subtitle}>Differences between uncontrolled and controlled components?</Text>
        <Text style={styles.content}>Answer: Controlled components are React components that render form elements whose values are controlled by React state. Uncontrolled components, on the other hand, allow form elements to be controlled by the DOM, and the data is not stored in React state. Controlled components are more flexible, allow for better validation and error handling, but require more code. Uncontrolled components require less code but are less flexible.</Text>
        <Text style={styles.subtitle}>How to validate React props using PropTypes?</Text>
        <Text style={styles.content}>Answer: PropTypes is a library that is built into React and is used to validate the type and shape of props passed to a component. PropTypes allows developers to specify the type and shape of the props a component expects, and if the props do not match the expected type or shape, a warning will be logged to the console. To use PropTypes, import the library and add a propTypes property to the component with the expected type and shape of the props.</Text>
      </Page>
    </Document>
  );
};


export default PdfFile;