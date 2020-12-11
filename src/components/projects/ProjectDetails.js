import React from 'react';

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet fermentum odio. Fusce tincidunt risus a diam cursus gravida. Ut turpis ipsum, bibendum consectetur pretium in, pretium a nulla. Donec erat massa, pulvinar a velit vel, pharetra blandit mi. Sed consectetur porta magna, sit amet tincidunt elit commodo sit amet. Ut sit amet lectus semper, commodo diam et, rutrum tortor. Curabitur ultrices ac metus sit amet pretium. Donec fringilla, urna a facilisis convallis, massa sem dictum magna, quis pretium augue diam in nulla. Nam sit amet fringilla mauris, sed pharetra nulla. Mauris hendrerit ipsum ultricies dolor sodales imperdiet. Nam malesuada enim id commodo cursus. Donec vel suscipit magna. Vestibulum a quam a justo tristique vehicula.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Thaiwhoe</div>
                    <div>3rd September, 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails