import React from "react";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../sanityClient";

const PostCard = (props) => {
  console.log(props.post)
  const post = props.data;
  const slug = post.slug.current;
  console.log(post.mainImage);
  const imageProps = useNextSanityImage(
    sanityClient,
    post.mainImage
  )
  return (
    <div className="col-lg-4">
      <div className="card">
        {post.mainImage && (
          <Image {...imageProps} layout="responsive" alt="" />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.excerpt}
          </p>
          <a href={slug} className="btn btn-primary">
            Content
          </a>
        </div>
      </div>
    </div>
  );
};
export default PostCard;