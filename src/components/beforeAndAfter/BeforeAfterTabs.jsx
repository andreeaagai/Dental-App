import React, { useState } from 'react';
import './BeforeAfterTabs.css';
import beforeImage1 from '../../assets/teeth-before-3.png'
import beforeImage2 from '../../assets/fatete-before.jpg'
import beforeImage3 from '../../assets/teeth-before-1.jpg'
import afterImage1 from '../../assets/teeth-after-3.png'
import afterImage2 from '../../assets/fatete-after.jpg'
import afterImage3 from '../../assets/teeth-after-1.jpg'



const BeforeAfterTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Aparate Dentare",
      beforeImage: beforeImage1,
      afterImage: afterImage1
    },
    {
      title: "Fațete Dentare",
      beforeImage: beforeImage2,
      afterImage: afterImage2
    },
    {
      title: "Implanturi",
      beforeImage: beforeImage3,
      afterImage: afterImage3
    }
  ];

  return (
    <div className="before-after-container">
      <h2>Rezultatele Noastre</h2>
      <div className="tabs-header">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="before-after-content">
        <div className="image-comparison">
    
          <div className="before-image">
            <img src={tabsData[activeTab].beforeImage} alt="Before" />
            <span>BEFORE</span>
          </div>
          <div className="after-image">
            <img src={tabsData[activeTab].afterImage} alt="After" />
            <span>AFTER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterTabs;