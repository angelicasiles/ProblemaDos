import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './src/store';
import { selectCourse, unselectCourse } from './src/actions/courseActions';
import styles from './src/styles/style_01'; // Asegúrate de que la ruta al archivo de estilos sea correcta

const CourseList = () => {
    const { availableCourses, selectedCourses } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Cursos Disponibles:</Text>
            {availableCourses.map((course, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.courseItem}
                    onPress={() => dispatch(selectCourse(course))}>
                    <Text style={styles.courseText}>{course}</Text>
                </TouchableOpacity>
            ))}
            <Text style={styles.header}>Cursos Seleccionados:</Text>
            {selectedCourses.map((course, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.courseItemSelected}
                    onPress={() => dispatch(unselectCourse(course))}>
                    <Text style={styles.courseText}>{course}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <CourseList />
        </Provider>
    );
};

export default App;
