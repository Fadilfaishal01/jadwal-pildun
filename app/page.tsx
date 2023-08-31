import styles from "./page.module.css";
import SectionHeader from "./section/sectionHeader";
import SectionList from "./section/sectionList";

export default function Home() {
  return (
    <div>
      <SectionHeader />
      <SectionList />
    </div>
  );
}
