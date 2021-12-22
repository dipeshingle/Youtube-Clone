import React from "react";
import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/categoriesBar/CategoriesBar";
import Video from "../components/video/Video";
import {
  getPopularVideo,
  getVideosByCategory,
} from "../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonVideo from "../skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideo());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideo());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video, index) => (
              <Col lg={3} md={4} key={index}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((item, index) => (
              <Col lg={3} md={4} key={index}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
