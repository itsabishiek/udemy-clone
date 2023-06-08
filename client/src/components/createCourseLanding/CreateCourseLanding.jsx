import React from "react";
import CreateCourseInputs from "../createCourseInputs/CreateCourseInputs";

const CreateCourseLanding = () => {
  return (
    <div className="createCourseContent">
      <span>
        Your course landing page is crucial to your success on Udemy. If
        it&apos;s done right, it can also help you gain visibility in search
        engines like Google. As you complete this section, think about creating
        a compelling Course Landing Page that demonstrates why someone would
        want to enroll in your course.{" "}
        <a href="#">Learn more about creating your course landing page</a> and{" "}
        <a href="#">course title standards</a>.
      </span>

      <CreateCourseInputs />
    </div>
  );
};

export default CreateCourseLanding;
