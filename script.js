// Role data - edit this object to add/remove/modify roles
const rolesData = {
    "crewmates": [
        {
            "name": "Engineer",
            "icon": "engineer.png",
            "description": "Can use the vents to travel around the map.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Engineer"
        },
        {
            "name": "Lookout",
            "icon": "lookout.png",
            "description": "Can watch a player to see who visits them.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Lookout"
        },
        {
            "name": "Mayor",
            "icon": "mayor.png",
            "description": "Can store votes and release them all at once in a meeting.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Mayor"
        },
        {
            "name": "Medic",
            "icon": "medic.png",
            "description": "Can grant a player a one-time shield that prevents a kill.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Medic"
        },
        {
            "name": "Medium",
            "icon": "medium.png",
            "description": "Can hear from dead players during meetings.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Medium"
        },
        {
            "name": "Mystic",
            "icon": "mystic.png",
            "description": "Can check if a dead player's alignment was Good or Evil.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Mystic"
        },
        {
            "name": "Seer",
            "icon": "seer.png",
            "description": "Can investigate a player to see their exact role.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Seer"
        },
        {
            "name": "Snitch",
            "icon": "snitch.png",
            "description": "Learns Impostors' identities after finishing their tasks.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/information/Snitch"
        },
        {
            "name": "Trapper",
            "icon": "trapper.png",
            "description": "Can place a trap that reveals who triggered it.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Trapper"
        }
    ],
    "impostors": [
        {
            "name": "Blackmailer",
            "icon": "blackmailer.png",
            "description": "Can prevent a player from speaking during meetings.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Blackmailer"
        },
        {
            "name": "Bomber",
            "icon": "bomber.png",
            "description": "Can plant a remote bomb on another player to kill them.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Bomber"
        },
        {
            "name": "Eclipsal",
            "icon": "eclipsal.png",
            "description": "Can cause a total darkness where only Impostors can see.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Eclipsal"
        },
        {
            "name": "Escapist",
            "icon": "escapist.png",
            "description": "Can guess a player's role, and if correct, remove them from the game.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Escapist"
        },
        {
            "name": "Janitor",
            "icon": "janitor.png",
            "description": "Can clean a body, making it unreportable.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Janitor"
        },
        {
            "name": "Miner",
            "icon": "miner.png",
            "description": "Can place temporary vents anywhere on the map.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Miner"
        },
        {
            "name": "Undertaker",
            "icon": "undertaker.png",
            "description": "Can drag a body, which will auto-report after some time.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Undertaker"
        }
    ],
    "neutrals": [
        {
            "name": "Amnesiac",
            "icon": "amnesiac.png",
            "description": "Can remember the role of a dead player and take on their goal.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Amnesiac"
        },
        {
            "name": "Executioner",
            "icon": "executioner.png",
            "description": "Wins if their specific target is voted out.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/evil/Executioner"
        },
        {
            "name": "Fairy",
            "icon": "fairy.png",
            "description": "Wins if their linked target survives to the end of the game.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Fairy"
        },
        {
            "name": "Jester",
            "icon": "jester.png",
            "description": "Wins if they get voted out by the other players.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/evil/Jester"
        }
    ]
};

function loadRoles() {
    renderRoleSection('crewmates', rolesData.crewmates, 'Crewmates', 'crewmate-heading');
    renderRoleSection('impostors', rolesData.impostors, 'Impostors', 'impostor-heading');
    renderRoleSection('neutrals', rolesData.neutrals, 'Neutrals', 'neutral-heading');
}

function renderRoleSection(sectionId, roles, title, headingClass) {
    const container = document.getElementById(sectionId);
    if (!container) return;

    // Create section heading
    const heading = document.createElement('h2');
    heading.className = headingClass;
    heading.textContent = title;
    container.appendChild(heading);

    // Create roles container
    const rolesContainer = document.createElement('div');
    rolesContainer.className = 'roles-container';

    // Add role cards
    roles.forEach(role => {
        const roleCard = createRoleCard(role, sectionId.slice(0, -1)); // Remove 's' from section name
        rolesContainer.appendChild(roleCard);
    });

    container.appendChild(rolesContainer);
}

function createRoleCard(role, roleType) {
    const card = document.createElement('a');
    card.href = role.url;
    card.target = '_blank';
    card.className = `role-card ${roleType}`;

    const icon = document.createElement('img');
    icon.className = 'role-icon';
    icon.src = `images/${role.icon}`;
    icon.alt = `${role.name} Icon`;

    const description = document.createElement('p');
    description.className = 'role-description';
    description.textContent = role.description;

    card.appendChild(icon);
    card.appendChild(description);

    return card;
}

// Load roles when the page is ready
document.addEventListener('DOMContentLoaded', loadRoles);