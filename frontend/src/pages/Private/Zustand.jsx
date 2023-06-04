import React, { useState } from 'react';

// zustand
import useCourseStore from '../../app/courseStore';

// icons
import { FiTrash2 } from 'react-icons/fi';

const Zustand = () => {
  const { courses, addCourse, removeCourse, toggleCourseStatus } =
    useCourseStore((state) => ({
      courses: state.courses,
      addCourse: state.addCourse,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    }));

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: title,
      completed: false,
    });

    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg mb-3">
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div>
        {courses.map((c) => {
          return (
            <div
              className={`card ${
                c.completed && 'text-white bg-success'
              } user-select-none cursor-pointer`}
              onDoubleClick={() => toggleCourseStatus(c.id)}
              key={c.id}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{c.title}</h4>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeCourse(c.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Zustand;
