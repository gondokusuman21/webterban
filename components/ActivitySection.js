import ActivityCardItem from "./ActivityCardItem";

const ActivitySection = ({ activitiesData }) => {
  return (
    <section className="pt-5 pb-1 lg:py-10 bg-light-blue">
      <div className="mb-5 font-serif flex justify-center w-11/12 mx-auto items-center text-xl lg:text-3xl font-bold tracking-tight">
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