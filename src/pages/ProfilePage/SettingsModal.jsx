import React from "react";
import { Link } from "react-router-dom";
import styles from "./SettingsModal.module.css";

const SettingsModal = ({ isSettingsOpen, toggleSettings, userImage, username }) => {
  return (
    <>
      {isSettingsOpen && (
        <div className={styles.settingsModal}>
          <div className={styles.settingsWindow}>
            <button onClick={toggleSettings} className={styles.closeBtn}>
              X
            </button>
            <img
              src={userImage || "ProfilePage/userimg.jfif"} 
              className={styles.userImg}
              alt="User"
            />
            <p className={styles.username}>{username || "USERNAME"}</p>
            <Link to="/reset_password" className={styles.toggleText}>
              change password
            </Link>
            <p className={styles.placeholderText}>lorem ipsum</p>
            <p className={styles.placeholderText}>lorem ipsum</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;