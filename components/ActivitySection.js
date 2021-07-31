import ActivityCardItem from "./ActivityCardItem";

const ActivitySection = ({ activitiesData }) => {
  return (
    <section className="pt-5 text-gray-50 lg:pt-10 lg:pb-5 bg-dark-blue">
      <div className="mb-5 flex w-11/12 mx-auto items-center text-lg lg:text-3xl font-bold tracking-tight">
        <h5 className="font-serif">Keberagaman Budaya</h5>
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