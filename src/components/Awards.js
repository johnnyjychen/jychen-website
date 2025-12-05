import awardsData from "./awardsData";

const Awards = () => {
  return (
    <div className="project-container">
      <h2>Awards & Honors</h2>
      <ul>
        {awardsData.map((awards, index) => (
          <li key={index}>
            [{awards.date}] <span dangerouslySetInnerHTML={{ __html: awards.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;