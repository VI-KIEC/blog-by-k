import styles from "../../styles/Article.module.scss";
import { client } from "../../libs/client.js";
import Link from "next/link";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  console.log(blog);
  return (
    <>
      <div className={styles.titleImage}>
        <img src={blog.titleImage.url}></img>
      </div>
      <main className={styles.main}>
        <Link className={styles.backToTopButton} href="/">
          <span>トップに戻る</span>
        </Link>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>
          {blog.publishedAt.substring(0, 10)}
        </p>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        ></div>
        <Link className={styles.backToTopButton} href="/">
          <span>トップに戻る</span>
        </Link>
      </main>
    </>
  );
}
