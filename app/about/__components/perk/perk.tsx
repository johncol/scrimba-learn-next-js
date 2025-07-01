import styles from "./perk.module.css";

interface PerkProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const Perk: React.FC<PerkProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.perk}>
      <h3>
        {icon} {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};
