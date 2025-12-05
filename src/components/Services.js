import serviceData from "./serviceData";

const Services = () => {
  return (
    <div className="project-container">
      <h2>Services</h2>

      {serviceData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="service-section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>
                [{item.date}]{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
