import ActivityCardItem from "./ActivityCardItem";

const ActivitySection = ({ activitiesData }) => {
  return (
    <section className="pt-5 lg:pt-10 bg-gradient-to-t from-dark-blue to-light-blue">
      <div className="mb-5 flex w-11/12 mx-auto items-center text-lg lg:text-3xl font-bold tracking-tight">
        <h5 className="text-black">Keberagaman Budaya</h5>
      </div>
      {activitiesData.slice(0, 6).map((item, index) => {
        if (index % 2 === 0) {
          return (
            <ActivityCardItem item={item} fadeLeft={true} fadeLeft2={false} reversed={false} />
          )
        } else {
          return (
            <ActivityCardItem item={item} fadeLeft={false} fadeLeft2={true} reversed={true} />
          )
        }
      })}
    </section>
  )
};

export default ActivitySection;