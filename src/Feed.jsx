import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import { doc, getDoc, query, orderBy, startAt } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    const citiesRef = collection(db, "posts");
    const docSnap =  getDoc(doc(citiesRef, "SF"));
    console.log(docSnap);
    const biggerThanSf = query(
      citiesRef,
      orderBy("population"),
      startAt(docSnap)
    );
  });

  
  

  // Get all cities with a population bigger than San Francisco

  // ...

  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={"sam"}
          username={"yes"}
          verified={"hmm"}
          text={"shite"}
          image
          avatar
        />
      ))}

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
