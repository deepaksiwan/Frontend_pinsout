import axios from 'axios';
import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_LIST_SEARCH,
  MENTOR_LIST_DETAILS_REQUEST,
  MENTOR_LIST_DETAILS_SUCCESS,
  MENTOR_LIST_DETAILS_FAIL,
} from '../constants/mentorConstants';

export const listMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL}/api/sso-mentor-list`
    );
    const fil = data.data;

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: fil,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
export const filterMentor = (chec) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    // console.log(chec.toString());
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL}/api/sso-mentor-list`
    );
    const fil = data.data;
    const d = chec
      .map((g) =>
        fil.filter((x) =>
          Object.values(x).join(',').toLowerCase().includes(g.toLowerCase())
        )
      )
      .flat();
    // console.log(d);
    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: d,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listStudentMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('STUDENT');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listProfessionalMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('PROFESSIONAL');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listEntrepreneurMentor = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get(
      'https://mentorkart.org/api/sso-mentor-list'
    );
    const fil = data.data;
    const std = fil.filter((x) => {
      if (x.user_categories) {
        return x.user_categories.split(',').includes('ENTREPRENEUR');
      }
      return x.user_categories;
    });

    dispatch({
      type: MENTOR_LIST_SUCCESS,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const searchMentor = (query) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_REQUEST });
    const { data } = await axios.get('https://mentorkart.org/api/sso-mentor-list');
    const fil = data.data;
    const std = fil.filter((x) => {
      //console.log(std);
      var all;
      if (x.first_name) {
        all= x.first_name.toLowerCase().includes(query.toLowerCase());
        if(all)
        return all;
      }
      if (x.area_of_experties) {
        return x.area_of_experties.toLowerCase().includes(query.toLowerCase());
      }
      if (x.last_name) {
        return x.last_name.toLowerCase().includes(query.toLowerCase());
      }
      
      if (x.user_category) {
        return x.user_category.toLowerCase().includes(query.toLowerCase());
      }
      if (x.organisation) {
        return x.organisation.toLowerCase().includes(query.toLowerCase());
      }
      if (x.industry) {
        return x.industry.toLowerCase().includes(query.toLowerCase());
      }
      if (x.current_position) {
        return x.current_position.toLowerCase().includes(query.toLowerCase());
      }
      if (x.designation) {
        return x.designation.toLowerCase().includes(query.toLowerCase());
      }
      if (x.about) {
        return x.about.toLowerCase().includes(query.toLowerCase());
      }
      return x.user_category;
    });
    //console.log(std);

    dispatch({
      type: MENTOR_LIST_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const listMentorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LIST_DETAILS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL}/api/sso-mentor/${id}`
    );
    const fil = data.data;

    dispatch({
      type: MENTOR_LIST_DETAILS_SUCCESS,
      payload: fil,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_LIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
