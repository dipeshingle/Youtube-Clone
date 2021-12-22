import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import {
  HomevideosReducer,
  relatedVideoReducer,
  selectedVideosReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
} from "./reducers/video.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";

const rootreducer = combineReducers({
  auth: authReducer,
  homeVideos: HomevideosReducer,
  selectedVideo: selectedVideosReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});
const store = createStore(
  rootreducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
