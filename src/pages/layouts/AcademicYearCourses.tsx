import { useParams } from "react-router-dom";

import HeroHeading from "../../components/ui/HeroHeading";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import CourseCard from "../../components/CourseCard";

import { subjects } from "../../lib/subjects";
import { years } from "../../lib/years";

export default function AcademicYearCourses() {
  const { academicYear } = useParams();

  const yearTitle = years[academicYear as keyof typeof years].title;
  const yearNumber = years[academicYear as keyof typeof years].number;

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)] mt-[40px]">
      <Breadcrumbs />
      <div
        className="w-full 
      flex items-start text-left flex-col"
      >
        <HeroHeading
          params={{
            content: yearTitle,
          }}
        />
        <div className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
          {subjects
            .filter((subject) => subject.course === yearNumber)
            .map((subject) => (
              <CourseCard
                key={subject.id}
                params={{
                  heading: subject.fullName,
                  year: academicYear,
                  semester: `${subject.semester} semester`,
                  decoration: subject.name,
                  link: subject.fullName.toLowerCase().split(" ").join("-"),
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}