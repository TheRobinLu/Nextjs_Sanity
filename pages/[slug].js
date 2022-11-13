import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link"
import { useNextSanityImage } from 'next-sanity-image';
import Image from "next/image";
import { sanityClient } from "../sanityClient";

const BlogPost = (props) => {
  let { title, body, image } = props;
  const [imageUrl, setImageUrl] = useState("");
  console.log(image);
  const imageProps = useNextSanityImage(sanityClient, image.asset);
  const imageBuilder = imageUrlBuilder(sanityClient);
  useEffect(() => {
    setImageUrl(imageBuilder.image(image));
  }, [image])

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
      <div className="post-content-wrap">
        <h1>-- {title} --</h1>
        {imageProps && <Image {...imageProps} layout="intrinsic" alt="" />}
        <BlockContent
          blocks={body}
          serializers={
            {
              types: {
                image: (props) => {

                  console.log(props);
                  return <img className="img-fluid my-2" src={imageBuilder.image(props.node)} />
                  //return <div>props</div>
                },
                youtube: (props) => {
                  let url = props.node.URL;
                  url = url.replace('watch?v=', 'embed/');
                  url = url.replace('.com', '-nocookie.com');
                  console.log(url);
                  //https://youtu.be/1IzDhWsu-WE
                  url = url.replace('youtu.be', 'www.youtube-nocookie.com/embed');
                  console.log(url);
                  return <>
                    <iframe width="1200" height="960" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowFullScreen>
                    </iframe>
                    <br></br>
                  </>
                },
                block: (props) => {
                  if (props.node.style === 'normal') {
                    return <h6 children={props.children} />
                  }
                }
              }
            }
          }
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  console.log(pageSlug);
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `${process.env.SANITY_URL}query=${query}`;
  const data = await fetch(url).then((res) => res.json());
  const post = data.result[0];
  //   console.log(post);
  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};
export default BlogPost;
