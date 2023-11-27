import React, { useState } from 'react';

import Card from './Card';

function Cards({ data, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  // let allCourses = [];
  function getcourses() {
    if (category == 'All') {
      let allCourses = [];
      Object.values(data).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // main sirf specific category ka array pass karunga
      return data[category];
    }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {/* {console.log('inside cards')}
      {console.log(data)}
      {console.log(getcourses())} */}

      {getcourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
