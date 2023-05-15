import React, { useState, useEffect } from "react";
import TagDropDownFilter from "./TagDropDownFilter";
import CardsDisplayWhite from "./CardsDisplayWhite";
import styles from "./css/SaveExploreDisplay.module.css";
import FilteredDisplay from "./FilteredDisplay";

function SaveExploreDisplay(props) {
  const dbTags = ["wifi", "power", "aircon", "workspace", "lighting"];
  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState(dbTags);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const tagArr = [];
    for (const cafe of props.cafeData) {
      for (const cafeTag of cafe.tags) {
        if (!tagArr.includes(cafeTag)) {
          // Check which tags are contained within reviews
          tagArr.push(cafeTag);
        }
      }
    }
    setAvailableTags(tagArr);
  }, [props.cafeData]);

  function selectReviews(cafeArr) {
    if (selectedTag != "") {
      return cafeArr.filter((item) => {
        return item.tags.includes(selectedTag);
      });
    } else {
      return cafeArr;
    }
  }

  function handleSelect(value) {
    setSelectedTag(value);
    if (value == "") {
      setFiltered(false);
    } else {
      setFiltered(true);
    }
  }

  return (
    <>
      <div className={styles.blocker} />
      <div className={styles.dropdownContainer}>
        <TagDropDownFilter
          selectedTag={selectedTag}
          setSelectedTag={handleSelect}
          availableTags={availableTags}
          dropdownWidth={styles.dropdownWidth}
          filterIconRightPos="12px"
        />
      </div>
      <h6
        className={`${styles.pageHeader} ${
          filtered ? styles.higherHeader : ""
        } `}
      >
        {filtered ? "Results" : props.children}
      </h6>
      {!filtered && <CardsDisplayWhite cafes={props.cafeData} />}
      {filtered && <FilteredDisplay cafes={selectReviews(props.cafeData)} />}
    </>
  );
}

export default SaveExploreDisplay;
