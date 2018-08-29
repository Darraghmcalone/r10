import React, { Component } from 'react';
import About from './About';

const allConducts = [
    {
        "title": "Purpose",
        "description": "R10 believes our community should be truly open for everyone. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, preferred operating system, programming language, or text editor. This code of conduct outlines our expectations for participant behaviour as well as the consequences for unacceptable behaviour. We invite all sponsors, volunteers, speakers, attendees, and other participants to help us realize a safe and positive conference experience for everyone.",
        "id": "cjh2i9iwl15rh0122r4kd8p8n"
    },
    {
        "title": "Open Source Citizenship",
        "description": "A supplemental goal of this code of conduct is to increase open source citizenship by encouraging participants to recognize and strengthen the relationships between what we do and the community at large. In service of this goal, R10 organizers will be taking nominations for exemplary citizens throughout the event and will recognize select participants after the conference on the website. If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, let a volunteer or organizer know.",
        "id": "cjh2ian0e15so0122aza58g3m"
    },
    {
        "title": "Expected Behaviour",
        "description": "Expected behaviours include: being considerate, respectful, and collaborative; refraining from demeaning discriminatory or harassing behaviour and speech; being mindful of your surroundings and of your fellow participants; alerting conference organizers if you notice a dangerous situation or someone in distress; and participating in an authentic and active way.",
        "id": "cjh2ib63i15t20122ug42bc8r"
    },
    {
        "title": "Unacceptable Behaviour",
        "description": "Unacceptable behaviours include: intimidating, harassing, abusive, discriminatory, derogatory or demeaning conduct by any attendees of R10 and related events. All R10 venues may be shared with members of the public; please be respectful to all patrons of these locations. Harassment includes: offensive verbal comments related to gender, sexual orientation, race, religion, disability; inappropriate use of nudity and/or sexual images in public spaces (including presentation slides); deliberate intimidation, stalking or following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact, and unwelcome sexual attention.",
        "id": "cjh2ibq1215ta0122vzkij1aj"
    },
    {
        "title": "Consequences Of Unacceptable Behaviour",
        "description": "Unacceptable behaviour will not be tolerated whether by other attendees, organizers, venue staff, sponsors, or other patrons of R10 venues. Anyone asked to stop unacceptable behaviour is expected to comply immediately. If a participant engages in unacceptable behaviour, the conference organizers may take any action they deem appropriate, up to and including expulsion from the conference without warning or refund.",
        "id": "cjh2ic73a15ti0122183wkb80"
    },
    {
        "title": "What To Do If You Witness Or Are Subject To Unacceptable Behaviour",
        "description": "If you are subject to unacceptable behaviour, notice that someone else is being subject to unacceptable behaviour, or have any other concerns, please notify a conference organizer as soon as possible. The R10 team will be available to help participants contact venue security or local law enforcement, to provide escorts, or to otherwise assist those experiencing unacceptable behaviour to feel safe for the duration of the conference. Both volunteers and organizers will all be wearing specially marked, visible lanyards. Any volunteer can connect you with a conference organizer. You can also come to the special registration desk in the lobby and ask for the organizers.",
        "id": "cjh2icsmy15u40122e39u0v9v"
    },
    {
        "title": "Scope",
        "description": "We expect all conference participants (sponsors, volunteers, speakers, attendees, and other guests) to abide by this code of conduct at all conference venues and conference-related social events.",
        "id": "cjh2idbtf15ui01222it9fkjj"
    },
    {
        "title": "Contact Information",
        "description": "Organizers and volunteers will be clearly identifiable at the venue, and the registration desk will be staffed the entire event. Please feel free to let us know of any issues or concerns that arise.",
        "id": "cjh2ids6y15uu01223rylf5tv"
    },
    {
        "title": "License and Attribution",
        "description": "This Code of Conduct is a direct swipe from the awesome work of Open Source Bridge, but with our event information substituted. The original is available at Open Source Bridge website and is released under a CreativeCommonsAttribution-ShareAlikelicense.",
        "id": "cjh2ie6v315v10122bb6zqcek"
    }
];

export default class AboutContainer extends Component {
    render() {
        return (
            <About allConducts={allConducts} />
        );
    }
}