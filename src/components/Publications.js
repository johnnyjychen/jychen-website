const Publications = () => {
    return (
        <div className="project-container">
            <h1>Selected Publication</h1>
            <h2>Peer-Reviewed Conference Papers</h2>
            <ul className='research-pub'>
                <li>
                    (CHI 2025). Cha, Y. J., <span className='highlight-author'>Chen, J.</span>, Gunal, Y., Zhu, Q., Newman, M. W., and Park, S. Y.
                    <span className="publication-ttle"> Collaborative Health-Tracking Technologies for Children and Parents: A Review of Current Studies and Directions for Future Research. </span>
                    [<a href='https://dl.acm.org/doi/full/10.1145/3706598.3713596' target="_blank">doi</a>] [<a href='https://dl.acm.org/doi/pdf/10.1145/3706598.3713596' target="_blank">pdf</a>]
                </li>
            </ul>


            <h2>Peer-Reviewed Late-Breaking Work & Posters</h2>
            <ul className='research-pub'>
                <li>
                    (CHI 2026). <span className='highlight-author'>Chen, J.</span>, Chalifoux, C., Du N., Zhang, Q.
                    <span className="publication-ttle"> Who Needs What? The Interaction Between Empathy Communication and Trait Empathy in a Home-Based Virtual Healthcare Robotic Agent for Older Adults. </span>
                </li>
            </ul>
        </div>
    );
}

export default Publications;
