import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import NavBar from "../components/NavBar";
import styles from "./css/ReferralPage.module.css";

import { Drawer, Box, Typography } from "@mui/material";

function ReferralPage() {
  const [inviteDrawer, setInviteDrawer] = useState({ bottom: false });
  const toggleInviteDrawer = (anchor, open) => () => {
    setInviteDrawer({ [anchor]: open });
  };

  const [shareDrawer, setShareDrawer] = useState({ bottom: false });
  const toggleShareDrawer = (anchor, open) => () => {
    setShareDrawer({ [anchor]: open });
  };

  return (
    <>
      <PhoneTopBar />
      <AppHeader />
      <div className={styles.referralHeaderFrame}>
        <div className={styles.referralHeader}>Refer and Earn</div>
      </div>
      <div className={styles.greyFrame}>
        <div className={styles.referFrame}>
          <div className={styles.referHeaderFrame}>
            <div className={styles.referHeader}>
              Refer a friend, get 500 points
            </div>
          </div>
          <div className={styles.referralCodeFrame}>
            <div className={styles.referralCode}>FT313301N1</div>
            <div className={styles.referralCodeCopyBtn}>Copy</div>
          </div>
          <div className={styles.actionBtnsFrame}>
            <button
              className={styles.share}
              onClick={toggleShareDrawer("bottom", true)}
            >
              Share
            </button>
            <button
              className={styles.invite}
              onClick={toggleInviteDrawer("bottom", true)}
            >
              Invite from Contact
            </button>
          </div>
          <div className={styles.referralHistory}>
            <div className={styles.referralHistoryHeader}>Referral History</div>
            <div className={styles.referralStatsFrame}>
              <div className={styles.referralCodesUsed}>1</div>
              <div className={styles.referralPointsEarned}>500</div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />

      {/* DRAWERS */}

      {/* INVITE */}
      <Drawer
        anchor="bottom"
        open={inviteDrawer["bottom"]}
        onClose={toggleInviteDrawer("bottom", false)}
        BackdropProps={{ invisible: true }}
      >
        <div className={styles.inviteDrawer}>
          <div className={styles.inviteDrawerHeaderFrame}>
            <div className={styles.inviteDrawerHeader}>Invite a Friend!</div>
            <img
              src="/custom_icons/SearchBar.png"
              className={styles.searchBar}
            />
          </div>
        </div>
        <NavBar />
      </Drawer>

      {/* SHARE */}

      <Drawer
        anchor="bottom"
        open={shareDrawer["bottom"]}
        onClose={toggleShareDrawer("bottom", false)}
        BackdropProps={{ invisible: true }}
      >
        <div className={styles.inviteDrawer}>
          <div className={styles.inviteDrawerHeaderFrame}>
            <div className={styles.inviteDrawerHeader}>Refer a friend</div>
            <img
              src="/custom_icons/SearchBar.png"
              className={styles.searchBar}
            />
          </div>
        </div>
        <NavBar />
      </Drawer>
    </>
  );
}

export default ReferralPage;
