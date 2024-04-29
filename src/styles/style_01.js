import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 22,
        color: '#1E90FF',
        fontWeight: 'bold',
        marginBottom: 10
    },
    courseItem: {
        backgroundColor: '#add8e6', 
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    courseItemSelected: {
        backgroundColor: '#90ee90', 
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    courseText: {
        fontSize: 18,
        color: '#333'
    }
});
