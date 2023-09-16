import topstyles from "../../styles/top.module.css";

const Hero = () => {
  return (
    <>
      <div className={topstyles.heroContainer}>
        <div className={topstyles.heroTitle}>キエクのブログ</div>
        <div className={topstyles.heroSub}>ベトナム＆日本育ちの経験談</div>
      </div>
    </>
  );
};

export default Hero;
