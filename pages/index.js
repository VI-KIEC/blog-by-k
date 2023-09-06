import { client } from "../../libs/client";
import topstyles from "../styles/top.module.css";
import Link from "next/link";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
//SSG

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  console.log(blog);
  return (
    <>
      <Hero />
      <div className={topstyles.mainContainer}>
        <div className={topstyles.listContainer}>
          {blog.map((blog) => (
            <li className={topstyles.list} key={blog.id}>
              <Link
                className={topstyles.titleContainer}
                href={`blog/${blog.id}`}
              >
                <div className={topstyles.titleAndDateContainer}>
                  <div className={topstyles.title}>{blog.title}</div>
                  <div className={topstyles.titleDate}>
                    {blog.publishedAt.substring(0, 10)}
                  </div>
                </div>
                <div className={topstyles.titleImg}>
                  <img src={blog.thumbnail.url} />
                </div>
              </Link>
            </li>
          ))}
        </div>
        <SideBar />
      </div>
    </>
  );
}
