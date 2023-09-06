import topstyles from "../../styles/top.module.css";
import blogIcon from "../../public/blogIcon.jpeg";
import Image from "next/image";
const SideBar = () => {
  return (
    <div className={topstyles.sideBarArea}>
      <div className={topstyles.sideBarContainer}>
        <div className={topstyles.sideBarTitleContainer}>プロフィール</div>
        <div className={topstyles.logoArea}>
          <div className={topstyles.logoContainer}>
            <Image src={blogIcon} />
          </div>
        </div>
        <div className={topstyles.profileName}>Kです</div>
        <p>
          生まれ: 1999年 (日本)
          <br /> 経歴: 日本(6年) → ベトナム(14年) → 日本(3年) <br />
          現在: 大阪の私立大学の3年生 (24歳)
          <br />
          <br />
          幼い頃から日本とベトナム、両方ともたくさん関わってきた人間です。
        </p>
      </div>
    </div>
  );
};

export default SideBar;
