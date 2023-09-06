import topstyles from "../../styles/top.module.css";

const Hero = () => {
  return (
    <>
      <div className={topstyles.heroContainer}>
        <div className={topstyles.heroTitle}>Kのブログ</div>
        <div className={topstyles.heroSub}>
          日本とベトナムのバイリンガルだからこそわかること
        </div>
      </div>
    </>
  );
};

export default Hero;
