import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/types';

const initialState = {
    availableCourses: ['Desarrollo de Aplicaciones Móviles II', 'Inglés VI', 'Seguridad de TI', 'Baile Fitness', 'Literatura Costarricense'],
    selectedCourses: []
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_COURSE:
            return {
                ...state,
                availableCourses: state.availableCourses.filter(course => course !== action.payload),
                selectedCourses: [...state.selectedCourses, action.payload]
            };
        case UNSELECT_COURSE:
            return {
                ...state,
                availableCourses: [...state.availableCourses, action.payload],
                selectedCourses: state.selectedCourses.filter(course => course !== action.payload)
            };
        default:
            return state;
    }
};

export default courseReducer;
