import axios from 'axios';
import { FETCH_COURSES_REQUEST, fetchCoursesFailure, fetchCoursesSuccess } from '../../actions/LearnerAction/LearnerGetCourseAction';
 
 
const API_URL = 'http://localhost:5199/lxp/view/course';
 
const LearnerGetCourse = ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type === FETCH_COURSES_REQUEST) {
    try {
      const response = await axios.get(API_URL);
 
      console.log('API  mycourse Response:', response.data); // Log the response data
 
      if (response.status=== 200 && response.data && response.data.data.length > 0)
       {
        console.log(response.data.data);
        dispatch(fetchCoursesSuccess(response.data.data));
      } else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchCoursesFailure(error.message));
    }
  }
};
 
export default LearnerGetCourse;
 
// import {
//   FETCH_COURSES_REQUEST,
//   fetchCoursesSuccess,
//   fetchCoursesFailure,
// } from '../actions/MyCourseAction';

//  function LearnerGetCourse ({ dispatch }) {
//     const backendEndpoint = "http://localhost:5199/lxp/view/course";
//     const controller = new AbortController();
//     const signal = controller.signal;

//     dispatch({ type: FETCH_COURSES_REQUEST });

//     return fetch(backendEndpoint, { signal })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("Failed to fetch course data.");
//             }
//         })
//         .then((data) => {
//             console.log(data)
//             if (Array.isArray(data.data)) {
//                 dispatch(fetchCoursesSuccess(data.data));
//                 console.log("mycourseapi",data.data)
//                 return data.data;
//             } else {
//                 throw new Error("Fetched data is not an array.");
//             }
//         })
//         .catch((error) => {
//             if (error.name === 'AbortError') {
//                 console.log('Fetch aborted');
//             } else {
//                 console.error("Error fetching course data:", error);
//                 dispatch(fetchCoursesFailure(error.message));
//             }
//         });
// }
// export default LearnerGetCourse;