export const GET_QUESTIONS = "GET_QUESTIONS";



export const fetchQuestions = () => {
    return async dispatch => {
    
        const response = await fetch('http://localhost:8082/');
    
        const resData = await response.json();
    }
} 