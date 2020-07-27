import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  root: {
    padding: '30px',
    backgroundColor: '#000',
  },
  slideContainer: {
    color: '#fff',
  },
  slide: {
    padding: 15,
    margin: 8,
    borderRadius: 6,
    color: '#fff',
    // height: '50vh',
    backgroundColor: '#333',
  },
  slide1: {
    // backgroundColor: '#FEA900',
  },
  slide2: {
    // backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
  slide4: {
    // backgroundColor: 'purple',
  },
  header: {
    fontSize: '1.6rem',
  },
};

function DemoWidth() {
  return (
    <SwipeableViews
      // animateTransitions={false}
      threshold={0}
      enableMouseEvents
      style={styles.root}
    >
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
      </div>
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
      </div>
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
      </div>
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
      </div>
    </SwipeableViews>
  );
}

export default DemoWidth;
