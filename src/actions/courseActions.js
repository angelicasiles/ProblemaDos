import { SELECT_COURSE, UNSELECT_COURSE } from './types';

export const selectCourse = course => ({
    type: SELECT_COURSE,
    payload: course
});

export const unselectCourse = course => ({
    type: UNSELECT_COURSE,
    payload: course
});
