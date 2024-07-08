import './MobileSideMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { MENU_ITEMS } from '@/app/lib/constants/app';
import styles from './MobileSideMenu.module.scss'


interface MobileSideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  currentPath: string;
}

const MobileSideMenu: React.FC<MobileSideMenuProps> = ({
  isOpen,
  toggleMenu,
  currentPath,
}) => {
  return (
    <div className={`${styles.mobile_side_menu} ${isOpen && styles.show_menu}`}>
      <Image
        src="/assets/icon-close.svg"
        alt=""
        onClick={toggleMenu}
        className={styles.btn_close}
        width={24}
        height={24}
      />
      <nav className={styles.menu}>
        {MENU_ITEMS.map((item, index: number) => {
          return (
            <Link
              key={index}
              href={item.path}
              className={`${styles.menu_link} ${
                item.path === currentPath && styles.current_path
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};


export default MobileSideMenu;
