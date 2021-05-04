import * as actions from "../actions/type";

const initSate = {
  categories : []
};

const CategorieReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.ALL_CATEGORIES: {

        return { ...state, categories: action.payload };
    }

    case actions.GET_CATEGORIES: {

      return { ...state, categories: action.payload };
    }

    case actions.CREATE_CATEGORIE: {
      return { ...state, categories: [{...action.payload},...state.categories] };
    }

    case actions.EDIT_CATEGORIE: {
      let categorie = action.payload;
      let categories = state.categories.map( u => {
        if(u.id === categorie.id){
          return {...categorie}
        }
        return {...u}
      });
      return { ...state, categories: categories};
    }
    case actions.CATEGORIE_DETAIL: {
      let categories = state.categories.filter( v => v.id !== action.payload);
      return { ...state, categories: categories };
    }

    case actions.DELETE_CATEGORIE: {
      let categories = state.categories.filter( v => v.id !== action.payload);
      return { ...state, categories };
    }
    default:{
      return state;
    }
  }
};

export default CategorieReducer;
