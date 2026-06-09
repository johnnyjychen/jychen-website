import { useMemo, useState } from "react";

const publications = [
    {
        year: "2026",
        type: "conference",
        sectionTitle: "Peer-Reviewed Conference Papers",
        venue: "HFES 2026",
        authors: (
            <>
                <span className="highlight-text">Jiongyu Chen</span> and Qiaoning Zhang.
            </>
        ),
        title: "Title temporarily withheld for review.",
        doi: "#",
        pdf: "#"
    },
    {
        year: "2025",
        type: "conference",
        sectionTitle: "Peer-Reviewed Conference Papers",
        venue: "CHI 2025",
        authors: (
            <>
                Yoon Jeong Cha, <span className="highlight-text">Jiongyu Chen</span>, Yasemin Gunal, Qiying Zhu, Mark W. Newman, and Sun Young Park.
            </>
        ),
        title: "Collaborative health-tracking technologies for children and parents: A review of current studies and directions for future research.",
        doi: "https://dl.acm.org/doi/full/10.1145/3706598.3713596",
        pdf: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713596"
    },
    {
        year: "2026",
        type: "journal",
        sectionTitle: "Peer-Reviewed Journal Papers",
        venue: "Under Review at IJHCI 2026",
        authors: (
            <>
                <span className="highlight-text">Jiongyu Chen</span> and Qiaoning Zhang.
            </>
        ),
        title: "Title temporarily withheld for review.",
        doi: "#",
        pdf: "#"
    },
    {
        year: "2026",
        type: "journal",
        sectionTitle: "Peer-Reviewed Journal Papers",
        venue: "Under Review at IJHCI 2026",
        authors: (
            <>
                Yoon Jeong Cha, <span className="highlight-text">Jiongyu Chen</span>, Melissa Wang, Allison Liu, Hanning Li, Joyce Lee, Mark W. Newman, and Sun Young Park.
            </>
        ),
        title: "Title temporarily withheld for review.",
        doi: "#",
        pdf: "#"
    },
    {
        year: "2026",
        type: "late-breaking-poster",
        sectionTitle: "Peer-Reviewed Posters & Late-Breaking Work",
        venue: "CHI 2026",
        authors: (
            <>
                <span className="highlight-text">Jiongyu Chen</span>, Camille Chalifoux, Na Du, and Qiaoning Zhang.
            </>
        ),
        title: "Who needs what? The interaction between empathy communication and trait empathy in a home-based virtual healthcare robotic agent for older adults.",
        doi: "https://doi.org/10.1145/3772363.3798526",
        pdf: "https://dl.acm.org/doi/pdf/10.1145/3772363.3798526"
    },
];

const publicationTypes = [
    { key: "conference", label: "Conference" },
    { key: "journal", label: "Journal" },
    { key: "late-breaking-poster", label: "Posters & Late-Breaking Work" }
];

const Publications = () => {
    const [selectedTypes, setSelectedTypes] = useState({
        conference: true,
        journal: true,
        "late-breaking-poster": true
    });

    const [yearFilter, setYearFilter] = useState("");

    const handleTypeChange = (typeKey) => {
        setSelectedTypes((previousTypes) => ({
            ...previousTypes,
            [typeKey]: !previousTypes[typeKey]
        }));
    };

    const publicationsWithVisibility = useMemo(() => {
        return publications.map((publication) => {
            const matchesType = selectedTypes[publication.type];

            const matchesYear =
                yearFilter.trim() === "" ||
                publication.year.includes(yearFilter.trim());

            return {
                ...publication,
                isVisible: matchesType && matchesYear
            };
        });
    }, [selectedTypes, yearFilter]);

    const groupedPublications = useMemo(() => {
        return publicationsWithVisibility.reduce((groups, publication) => {
            if (!groups[publication.sectionTitle]) {
                groups[publication.sectionTitle] = [];
            }

            groups[publication.sectionTitle].push(publication);
            return groups;
        }, {});
    }, [publicationsWithVisibility]);

    const hasVisiblePublications = publicationsWithVisibility.some(
        (publication) => publication.isVisible
    );

    return (
        <div className="project-container">
            <h1>Selected Publications</h1>

            <div className="publication-filter-bar">
                <div className="publication-filter-row">
                    <span className="publication-filter-title">Type: </span>

                    <div className="publication-checkbox-group">
                        {publicationTypes.map((type) => (
                            <label key={type.key} className="publication-checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedTypes[type.key]}
                                    onChange={() => handleTypeChange(type.key)}
                                />
                                <span>{type.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="publication-filter-row">
                    <label
                        htmlFor="publication-year-input"
                        className="publication-filter-title"
                    >
                        Year:
                    </label>

                    <input
                        id="publication-year-input"
                        className="publication-year-input"
                        type="text"
                        value={yearFilter}
                        onChange={(event) => setYearFilter(event.target.value)}
                    />
                </div>
            </div>

            {!hasVisiblePublications && (
                <p className="no-results-message">
                    No publications match the selected filters.
                </p>
            )}

            {Object.entries(groupedPublications).map(([sectionTitle, sectionPublications]) => {
                const sectionIsVisible = sectionPublications.some(
                    (publication) => publication.isVisible
                );

                return (
                    <div
                        key={sectionTitle}
                        className={`publication-section ${sectionIsVisible ? "show" : "hide"}`}
                    >
                        <h2>{sectionTitle}</h2>

                        <ul className="research-pub">
                            {sectionPublications.map((publication, index) => (
                                <li
                                    key={`${publication.venue}-${index}`}
                                    className={`publication-item ${publication.isVisible ? "show" : "hide"}`}
                                >
                                    ({publication.venue}). {publication.authors}{" "}
                                    <span className="publication-title">
                                        {publication.title}{" "}
                                    </span>

                                    {publication.doi && publication.doi !== "#" && (
                                        <>
                                            [
                                            <a
                                                href={publication.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                doi
                                            </a>
                                            ]{" "}
                                        </>
                                    )}

                                    {publication.pdf && publication.pdf !== "#" && (
                                        <>
                                            [
                                            <a
                                                href={publication.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                pdf
                                            </a>
                                            ]
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Publications;