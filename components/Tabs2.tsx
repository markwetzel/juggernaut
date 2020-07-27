import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  root: {
    padding: '30px',
    margin: 0,
    backgroundColor: '#000',
    height: '100vh',
  },
  slideContainer: {
    color: '#fff',
  },
  slide: {
    // padding: 15,
    margin: 8,
    borderRadius: 6,
    color: '#fff',

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
  set: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

function DemoWidth() {
  return (
    <SwipeableViews enableMouseEvents style={styles.root}>
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <img
            src='squat.jpg'
            style={{
              maxWidth: '100%',
              borderRadius: 6,

              // maxHeight: 180,
            }}
          />
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
        </div>
      </div>

      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <img src='squat.jpg' style={{ maxWidth: '100%' }} />

          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>

          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
          <div style={styles.set}>
            <span>1</span>
            <span>135</span>
            <span>x</span>
            <span>5</span>
          </div>
        </div>
      </div>

      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <img src='squat.jpg' style={{ maxWidth: '100%' }} />
        </div>
      </div>
      <div style={styles.slideContainer}>
        <header style={styles.header}>
          <span>Barbell Squat</span>
        </header>
        <div style={Object.assign({}, styles.slide, styles.slide4)}>
          <img src='squat.jpg' style={{ maxWidth: '100%' }} />
        </div>
      </div>
    </SwipeableViews>
  );
}

export default DemoWidth;
