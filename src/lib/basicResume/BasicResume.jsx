import React from 'react';

import './basicResume.scss';

import { getChildren } from '../components/utils';

import { Name } from '../components/Name';
import { Summary } from '../components/Summary';
import { Address } from '../components/Address';
import { Phone } from '../components/Phone';
import { Email } from '../components/Email';
import { Item } from '../components/Item';
import { StartDate, EndDate } from '../components/Date';
import { Experiences, Experience, Title, Company, Description } from '../components/Experiences';
import { Educations, Education, Institite, Degree, Major } from '../components/Educations';
import { Appendix } from '../components/Appendix';

export class BasicResume extends React.Component {
    render() {
        const props = this.props;
        const children = getChildren(props.children);
        return <div id='resumePrintDiv' className='basicResume'>
            <div className="section nameSection">
                <span className='name'>{children[Name.name]}</span>
            </div>
            <div className='section contactSection'>
                <div className='floatLeft'>
                    {children[Address.name]}
                </div>
                <div className='floatRight'>
                    <div className='phone'>Phone: {children[Phone.name]}</div>
                    <div className='email'>Email: {children[Email.name]}</div>
                </div>
            </div>
            {children[Summary.name] && <div className='section summarySection'>
                <div className='header'>Summary</div>
                <hr />
                {children[Summary.name]}
            </div>}

            {children[Experiences.name] && children[Experiences.name].map((experiences, i) => (
                <div key={i} className='section experiencesSection'>
                    <div className='header'>Professional Experience</div>
                    <hr />
                    <div className='experiences'>
                        <ExperiencesRenderer>{experiences}</ExperiencesRenderer>
                    </div>
                </div>
            ))}

            {children[Educations.name] && children[Educations.name].map((educations, i) => (
                <div key={i} className='section educationSection'>
                    <div className='header'>Education</div>
                    <hr />
                    <div className='educations'>
                        <ul>
                            <EducationsRenderer>{educations}</EducationsRenderer>
                        </ul>
                    </div>
                </div>
            ))}
            {children[Appendix.name] && children[Appendix.name].map((a, i) => (
                <div key={i} className='section appendixSection'>
                    <div className='header'>{a.props.title}</div>
                    <hr />
                    <ul>
                        <ItemDivRenderer>{a}</ItemDivRenderer>
                    </ul>
                </div>
            ))}
        </div>
    }
}

function ExperiencesRenderer(props) {
    return React.Children.map(props.children.props.children, (child) => {
        if (child.type.name === Experience.name) {
            return <ExperienceRenderer>{child}</ExperienceRenderer>;
        } else {
            return null;
        }
    });
}

function ExperienceRenderer(props) {
    const children = getChildren(props.children.props.children);
    return <div className='experience'>
        <p className='timePeriod'>{children[StartDate.name]} &ndash; {children[EndDate.name]}</p>
        <div className='content'>
            <p className='b'>{children[Title.name]}</p>
            <p><span className='b'>{children[Company.name]}</span> &ndash; {children[Address.name]}</p>
            <ul className='description'>
                {children[Description.name].map((desc, i) => (
                    <ItemDivRenderer key={i}>{desc}</ItemDivRenderer>
                ))}
            </ul>
        </div>
    </div>
}

function ItemDivRenderer(props) {
    return React.Children.map(props.children.props.children, (child) => {
        if (child.type.name === Item.name) {
            return <li className='item'>{child}</li>;
        } else {
            return <div>{child}</div>;
        }
    });
}

function EducationsRenderer(props) {
    return React.Children.map(props.children.props.children, (child) => {
        if (child.type.name === Education.name) {
            return <EducationRenderer>{child}</EducationRenderer>;
        } else {
            return null;
        }
    });
}

function EducationRenderer(props) {
    const children = getChildren(props.children.props.children);
    return <div className='education'>
        <li><span className='b'>{children[Institite.name]}</span></li>
        <p>{children[Degree.name]}, {children[Major.name]}, {children[StartDate.name]} &ndash; {children[EndDate.name]}</p>
    </div>
}

