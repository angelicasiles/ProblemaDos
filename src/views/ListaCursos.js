import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse, unenrollCourse } from '../acciones/AccionCurso';
import { styles } from '../styles/style_01';

const CursoLista = () => {
    const { availableCourses, enrolledCourses } = useSelector(state => state.courseReducer);
    const dispatch = useDispatch();

    return (
        <View>
            {availableCourses.map((course, index) => (
                <TouchableOpacity key={index} style={[styles.courseItem, styles.available]}
                                  onPress={() => dispatch(enrollCourse(course))}>
                    <Text>{course}</Text>
                </TouchableOpacity>
            ))}
            {enrolledCourses.map((course, index) => (
                <TouchableOpacity key={index} style={[styles.courseItem, styles.enrolled]}
                                  onPress={() => dispatch(unenrollCourse(course))}>
                    <Text>{course}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CursoLista;
