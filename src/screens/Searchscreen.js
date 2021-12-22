import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../redux/actions/video.action";
import VideoHorizontle from "../components/videohorizontle/VideoHorizontle";
import { Col, Container } from "react-bootstrap";
import SkeletonVideo from "../skeletons/SkeletonVideo";

const Searchscreen = () => {
  const { query } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  return (
    <Container>
      {!loading
        ? videos?.map((video, index) => (
            <VideoHorizontle video={video} key={index} searchScreen />
          ))
        : [...Array(20)].map((item, index) => (
            <Col lg={3} md={4} key={index}>
              <SkeletonVideo />
            </Col>
          ))}
    </Container>
  );
};

export default Searchscreen;
