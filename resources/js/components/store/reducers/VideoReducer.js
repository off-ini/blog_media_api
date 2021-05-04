import * as actions from "../actions/type";

const initSate = {
  videos : []
};

const VideosReducer = (state = initSate, action) => {
  switch (action.type) {

    case actions.ALL_VIDEOS: {

        return { ...state, videos: action.payload };
    }

    case actions.GET_VIDEOS: {

      return { ...state, videos: action.payload };
    }

    case actions.CREATE_VIDEO: {
      return { ...state, videos: [{...action.payload},...state.videos] };
    }

    case actions.EDIT_VIDEO: {
      let video = action.payload;
      let videos = state.videos.map( u => {
        if(u.id === video.id){
          return {...video}
        }
        return {...u}
      });
      return { ...state, videos: videos};
    }
    case actions.VIDEO_DETAIL: {
      let videos = state.videos.filter( v => v.id !== action.payload);
      return { ...state, videos: videos };
    }

    case actions.DELETE_VIDEO: {
      let videos = state.videos.filter( v => v.id !== action.payload);
      return { ...state, videos };
    }
    default:{
      return state;
    }
  }
};

export default VideosReducer;
