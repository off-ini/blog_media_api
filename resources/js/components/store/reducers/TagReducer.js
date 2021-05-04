import * as actions from "../actions/type";

const initSate = {
  tags : []
};

const TagReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.ALL_TAGS: {

        return { ...state, tags: action.payload };
    }

    case actions.GET_TAGS: {

      return { ...state, tags: action.payload };
    }

    case actions.CREATE_TAG: {
      return { ...state, tags: [{...action.payload},...state.tags] };
    }

    case actions.EDIT_TAG: {
      let tag = action.payload;
      let tags = state.tags.map( u => {
        if(u.id === tag.id){
          return {...tag}
        }
        return {...u}
      });
      return { ...state, tags: tags};
    }
    case actions.TAG_DETAIL: {
      let tags = state.tags.filter( v => v.id !== action.payload);
      return { ...state, tags: tags };
    }

    case actions.DELETE_TAG: {
      let tags = state.tags.filter( v => v.id !== action.payload);
      return { ...state, tags };
    }
    default:{
      return state;
    }
  }
};

export default TagReducer;
