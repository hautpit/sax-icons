import type { NextPage } from "next";
import { useEffect, useState } from "react";
// import {  } from "../src/components/common/Icon";
import IconPreview from "../src/components/common/IconPreview";
import {
  haudeptrai1,
  haudeptrai2,
  haudeptrai3,
  haudeptrai4,
  haudeptrai5,
  haudeptrai6,
} from "../src/mock/hauicons";
import { IconProps, iconSections, IconSectionProps } from "../src/mock/icons";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [iconSectionsData, setIconSectionsData] =
    useState<IconSectionProps[]>(iconSections);

  useEffect(() => {
    const iconSectionsTmp: IconSectionProps[] = [];
    iconSections.map((iconSection) => {
      const iconSectionTmp = { ...iconSection };
      const iconsTmp = iconSection.icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchText.toLowerCase())
      );
      if (iconsTmp.length > 0) {
        iconSectionTmp.icons = iconsTmp;
        iconSectionsTmp.push(iconSectionTmp);
      }
    });
    setIconSectionsData(iconSectionsTmp);
  }, [searchText]);

  useEffect(() => {
    haudeptrai1();
    haudeptrai2();
    haudeptrai3();
    haudeptrai4();
    haudeptrai5();
    haudeptrai6();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Sax Icons</h2>
      <div>
        <input
          className="search-input"
          placeholder="Search..."
          onChange={(ele) => setSearchText(ele.target.value)}
        />
      </div>
      <div className="icon-section">
        {iconSectionsData.map((iconSection, index) => (
          <div key={index}>
            <h3>{iconSection.title}</h3>
            <div className="icons-wrap">
              {iconSection.icons.map((icon) => (
                <IconPreview
                  key={icon.name}
                  name={icon.name}
                  icon={icon.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
