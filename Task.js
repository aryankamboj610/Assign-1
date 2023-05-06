import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, text]);
      setText('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        {todos.map((todo, index) => (
          <TouchableOpacity
            key={index}
            style={styles.todoContainer}
            onPress={() => handleDeleteTodo(index)}
          >
            <Text style={styles.todoText}>{todo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:-450,
    position:'absolute'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -450,
    position:'absolute'
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
  },
});