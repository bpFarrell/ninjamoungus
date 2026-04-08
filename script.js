// Role data - edit this object to add/remove/modify roles
const rolesData = {
    "crewmates": [
        // Afterlife
        {
            "name": "Haunter",
            "icon": "haunter.png",
            "description": "The Haunter is the ghost of a crewmate who must complete their tasks without being caught to reveal the Impostors to the living.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/afterlife/Haunter"
        },
        // Investigative
        {
            "name": "Aurial",
            "icon": "aurial.png",
            "description": "The Aurial can sense when someone nearby uses an ability of any kind, and will see an arrow pointing towards the location where the ability was used. If the ability is used within the Aurial's aura (range), the arrow will match the colour of the player, revealing their identity. If the ability is used further away, the Aurial will see a white arrow.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Aurial"
        },
        {
            "name": "Forensic",
            "icon": "forensic.png",
            "description": "The Forensic can inspect crime scenes and examine players to see if they were at the scene. When examining a player, the screen will flash red if the player was near the crime scene.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Forensic"
        },
        {
            "name": "Investigator",
            "icon": "investigator.png",
            "description": "The Investigator is able to see the footprints of other players during each round, helping them investigate whereabouts and alibis.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Investigator"
        },
        {
            "name": "Lookout",
            "icon": "lookout.png",
            "description": "The Lookout can watch other players during rounds, and will discover which roles interacted with the watched players during meetings.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Lookout"
        },
        {
            "name": "Medium",
            "icon": "medium.png",
            "description": "The Medium can become a ghost temporarily by using their Mediate ability, projecting their spirit outside of their body to investigate and discover clues. While Mediating, the Medium's body is left behind, still and unprotected, but their spirit can pass through walls and see other ghosts. Once time is up, their spirit will return to their body, and they can no longer see ghosts of other players.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Medium"
        },
        {
            "name": "Mystic",
            "icon": "mystic.png",
            "description": "The Mystic is alerted whenever someone dies, seeing a blue flash and a brief arrow pointing in the direction of the death.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Mystic"
        },
        {
            "name": "Seer",
            "icon": "seer.png",
            "description": "The Seer can compare the alignments of other players, learning if players are friendly or enemies by using their Intuit and Gaze abilities, or Reveal if comparing alignments only.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Seer"
        },
        {
            "name": "Snitch",
            "icon": "snitch.png",
            "description": "The Snitch must race to complete their tasks in order to reveal the Impostors.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Snitch"
        },
        {
            "name": "Sonar",
            "icon": "sonar.png",
            "description": "The Sonar can place markers on other players to track their general location. By placing a marker, the Tracker will see an arrow pointing towards the tracked player's position across the map. The arrows match the tracked player's colour, and will update at set intervals, allowing the Tracker to follow suspicious players and identify unusual movement.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Sonar"
        },
        {
            "name": "Spy",
            "icon": "spy.png",
            "description": "The Spy gains extra information by using the Admin table.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Spy"
        },
        {
            "name": "Trapper",
            "icon": "trapper.png",
            "description": "The Trapper can place traps around the map to learn the roles of other players. Players must stand in, or walk through, the trap for a set time to 'trap' their roles. The Trapper will see a list of the roles in the next meeting, in a randomised order.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/investigative/Trapper"
        },
        // Protective
        {
            "name": "Altruist",
            "icon": "altruist.png",
            "description": "The Altruist can revive dead players in one of three possible ways. However, killers will be alerted and know the locations of revived players and the Altruist.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Altruist"
        },
        {
            "name": "Cleric",
            "icon": "cleric.png",
            "description": "The Cleric can protect other players by Cleansing their negative effects, as well as placing Barriers on them to prevent interactions.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Cleric"
        },
        {
            "name": "Medic",
            "icon": "medic.png",
            "description": "The Medic can give a Shield to a player of their choice, protecting the player from being killed.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Medic"
        },
        {
            "name": "Mirrorcaster",
            "icon": "mirrorcaster.png",
            "description": "The Mirrorcaster can cast a Magic Mirror on a player to protect them. If the player is attacked directly, the Mirrorcaster will be notified, and they can attempt to unleash the absorbed attack onto another player.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Mirrorcaster"
        },
        {
            "name": "Oracle",
            "icon": "oracle.png",
            "description": "The Oracle can use their Confess ability on another player to find out if they are evil. During a meeting, the Oracle will be given the names of three players (including the chosen Confessor) as potential Evils. If the Oracle dies before the meeting, the chosen Confessor will reveal their faction to everybody during the meeting (depending on the accuracy setting).",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Oracle"
        },
        {
            "name": "Warden",
            "icon": "warden.png",
            "description": "The Warden can fortify players to prevent them from being interacted with. If anyone tries to interact with a Fortified player, the ability will not work and both the Warden and Fortified player will be alerted with a purple flash.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/protective/Warden"
        },
        // Support
        {
            "name": "Engineer",
            "icon": "engineer.png",
            "description": "The Engineer can use the vent systems and fix active sabotages remotely.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Engineer"
        },
        {
            "name": "Imitator",
            "icon": "imitator.png",
            "description": "The Imitator can use the roles of dead players. During meetings, the Imitator can select a dead player and will imitate the target's role and abilities in the next round.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Imitator"
        },
        {
            "name": "Plumber",
            "icon": "plumber.png",
            "description": "The Plumber can Barricade vents to block them, and Flush the vent system, forcing any venters out. The Plumber will get an arrow pointing to any flushed player for one second.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Plumber"
        },
        {
            "name": "Sentry",
            "icon": "sentry.png",
            "description": "The Sentry can place additional cameras across the map, which can then be viewed from Security or by players with portable cameras.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Sentry"
        },
        {
            "name": "Transporter",
            "icon": "transporter.png",
            "description": "The Transporter can transport two players, dead or alive, to swap their locations.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/support/Transporter"
        },
        // Killing
        {
            "name": "Deputy",
            "icon": "deputy.png",
            "description": "The Deputy can Camp other players. Once a camped player dies, the Deputy is alerted to their death with a red flash. In the following meeting, the Deputy may then attempt to shoot the killer of the camped player. If successful, the killer dies and if not, nothing happens.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/killing/Deputy"
        },
        {
            "name": "Hunter",
            "icon": "hunter.png",
            "description": "The Hunter can Stalk players and will be alerted by a brief green flash if the stalked player uses an ability of any kind (the player's name will also turn black). The Hunter then has the option to kill the player at any point during the game, without consequence if they kill a fellow crewmate (as long as they are not an alerted Veteran).",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/killing/Hunter"
        },
        {
            "name": "Sheriff",
            "icon": "sheriff.png",
            "description": "The Sheriff can shoot a suspicious player to attempt to kill them.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/killing/Sheriff"
        },
        {
            "name": "Veteran",
            "icon": "veteran.png",
            "description": "The Veteran can go on alert and will kill anyone who interacts with them, except for Pestilence and shielded players, who will ignore the attack.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/killing/Veteran"
        },
        {
            "name": "Vigilante",
            "icon": "vigilante.png",
            "description": "The Vigilante can guess evil roles during meetings to kill evil players. If they guess correctly, the evil player will die. If they guess incorrectly and the Vigilante has no safe shots, the Vigilante will die.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/killing/Vigilante"
        },
        // Power
        {
            "name": "Jailor",
            "icon": "jailor.png",
            "description": "The Jailor can jail other players. During a meeting, everyone will see who is jailed. The Jailor can privately talk with the jailed player using the private chatbox. The Jailor can then decide whether to execute the jailed player (unless the Jailor is an Imitator). If the executed player is a Crewmate, the Jailor will lose the ability to Jail.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Jailor"
        },
        {
            "name": "Mayor",
            "icon": "mayor.png",
            "description": "After successfully campaigning half of the Crewmates as the Politician, the Mayor can then reveal themselves during a meeting. The Mayor gains 3 total votes, in addition to changing their appearance in meetings. Once revealed, the Mayor cannot be guessed in meetings, but their role will be visible to all during rounds.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Mayor"
        },
        {
            "name": "Monarch",
            "icon": "monarch.png",
            "description": "The Monarch can knight other players to give them additional votes.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Monarch"
        },
        {
            "name": "Politician",
            "icon": "politician.png",
            "description": "The Politician must successfully campaign at least half of the Crewmates in order to reveal themselves as The Mayor.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Politician"
        },
        {
            "name": "Prosecutor",
            "icon": "prosecutor.png",
            "description": "The Prosecutor can exile a player during a meeting, casting their vote to overpower all others. They can also see who voted for who, even if voting is anonymous.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Prosecutor"
        },
        {
            "name": "Swapper",
            "icon": "swapper.png",
            "description": "The Swapper can swap the votes of two players in a meeting. The 2 chosen players will visually swap positions at the end of a meeting. If Player 1 received the most votes and they are swapped with Player 2, then Player 2 will be ejected.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Swapper"
        },
        {
            "name": "Time Lord",
            "icon": "time lord.png",
            "description": "The Time Lord can rewind time for a set duration, forcing players to retrace their steps and potentially reviving dead players!",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/crewmate/power/Time%20Lord"
        }
    ],
    "impostors": [
        // Concealing
        {
            "name": "Eclipsal",
            "icon": "eclipsal.png",
            "description": "The Eclipsal can blind nearby players, reducing their vision to only be able to see the map and prevent reporting. After a set duration, blinded players' vision will return to normal.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Eclipsal"
        },
        {
            "name": "Escapist",
            "icon": "escapist.png",
            "description": "The Escapist is able to mark a location on the map and then recall (teleport) to that location from anywhere.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Escapist"
        },
        {
            "name": "Grenadier",
            "icon": "grenadier.png",
            "description": "The Grenadier can throw down a grenade to flash nearby players, blinding them by turning their vision entirely grey for a set duration.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Grenadier"
        },
        {
            "name": "Morphling",
            "icon": "morphling.png",
            "description": "The Morphling can Sample another player and Morph into the player to disguise themselves temporarily.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Morphling"
        },
        {
            "name": "Swooper",
            "icon": "swooper.png",
            "description": "The Swooper can temporarily turn invisible to avoid being seen.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Swooper"
        },
        {
            "name": "Venerer",
            "icon": "venerer.png",
            "description": "The Venerer can unlock three new abilities by killing, preventing others from catching them. Each ability is used per use, stacking as they are earned (e.g. if all three abilities are unlocked, they will all be used at once). If the Venerer has any visual modifiers (Giant, Mini, Flash), these will not be visible when the abilities are active.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/concealing/Venerer"
        },
        // Support
        {
            "name": "Blackmailer",
            "icon": "blackmailer.png",
            "description": "The Blackmailer can stop a player from speaking in the next meeting by blackmailing them (marked with a black M).",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Blackmailer"
        },
        {
            "name": "Hypnotist",
            "icon": "hypnotist.png",
            "description": "The Hypnotist can hypnotize players (marked with a red @). During a meeting, they can release Mass Hysteria, which makes all hypnotised players see different visuals applied to players in the following round.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Hypnotist"
        },
        {
            "name": "Janitor",
            "icon": "janitor.png",
            "description": "The Janitor can clean dead bodies, making them disappear to clear evidence (besides the victim's pet, if any).",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Janitor"
        },
        {
            "name": "Miner",
            "icon": "miner.png",
            "description": "The Miner can place additional vents around the map which will connect together as one system. Miner vents will not connect to base-game vents.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Miner"
        },
        {
            "name": "Undertaker",
            "icon": "undertaker.png",
            "description": "The Undertaker can drag dead bodies around the map and drop them elsewhere to prevent them from being reported easily.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/support/Undertaker"
        },
        // Killing
        {
            "name": "Ambusher",
            "icon": "ambusher.png",
            "description": "The Ambusher can pursue a player, getting an arrow to their location. When the pursued player is next to another player, the Ambusher can ambush to force their pursued target to kill the nearby player. If successful, they will drag the body into the shadows, teleporting it back to the Ambusher.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Ambusher"
        },
        {
            "name": "Bomber",
            "icon": "bomber.png",
            "description": "The Bomber can place a bomb on the map, which detonates after a set amount of time. Anybody within the bomb radius when it detonates will be killed!",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Bomber"
        },
        {
            "name": "Parasite",
            "icon": "parasite.png",
            "description": "The Parasite can overtake a nearby player and temporarily control their movement before killing them.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Parasite"
        },
        {
            "name": "Scavenger",
            "icon": "scavenger.png",
            "description": "The Scavenger must kill their targets (this will be the closest player to the Scavenger when their target resets). If they kill their target, they get a reduced kill cooldown, but if they don't, their cooldown is increased significantly.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Scavenger"
        },
        {
            "name": "Warlock",
            "icon": "warlock.png",
            "description": "The Warlock can charge up attacks to wipe out the crew quickly with a multi-kill attack.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/killing/Warlock"
        },
        // Power
        {
            "name": "Ambassador",
            "icon": "ambassador.png",
            "description": "The Ambassador can retrain Impostors into other Impostor roles of the same caliber.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/power/Ambassador"
        },
        {
            "name": "Herbalist",
            "icon": "herbalist.png",
            "description": "The Herbalist can use three different abilities to help the Impostors or affect what other players see. The abilities—Expose, Confuse, and Protect—are linked to one cooldown, separate from the Kill Cooldown, allowing the Herbalist to choose which ability they wish to use on another player.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/power/Herbalist"
        },
        {
            "name": "Puppeteer",
            "icon": "puppeteer.png",
            "description": "The Puppeteer can take control of another player and force them to kill someone else. When using the Control ability, the Puppeteer will see a menu to choose their victim from and can then control them for a set time. During the Control duration, the Puppeteer will stand still.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/power/Puppeteer"
        },
        {
            "name": "Spellslinger",
            "icon": "spellslinger.png",
            "description": "The Spellslinger can hex a player, priming them for detonation. Once all non-Impostors are hexed, they may set off a Hex Bomb after a set amount of time to win!",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/power/Spellslinger"
        },
        {
            "name": "Traitor",
            "icon": "traitor.png",
            "description": "If all Impostors die, one Crewmate may become the Traitor after a meeting, depending on set conditions. The Traitor sets out to win the game for the fallen Impostors and kill off the Crew. Only Crewmates can become the Traitor, with the exception of the Mayor.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/impostor/power/Traitor"
        }
    ],
    "neutrals": [
        // Benign
        {
            "name": "Amnesiac",
            "icon": "amnesiac.png",
            "description": "The Amnesiac must remember who they are by finding a dead body and taking the role of the dead player. If the dead body's role is a unique role, they will remember the base faction's role instead.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Amnesiac"
        },
        {
            "name": "Fairy",
            "icon": "fairy.png",
            "description": "The Fairy must protect their target from getting killed or ejected. They can give their target a temporary shield to protect them from being killed during rounds. The Guardian Angel wins if their target does.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Fairy"
        },
        {
            "name": "Mercenary",
            "icon": "mercenary.png",
            "description": "The Mercenary can only win by bribing players, allowing them to gain multiple win conditions.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Mercenary"
        },
        {
            "name": "Survivor",
            "icon": "survivor.png",
            "description": "The Survivor must survive for the entire game in order to win alongside whichever team wins the game. They are able to protect themselves with a temporary safeguard vest, preventing them from being killed.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/benign/Survivor"
        },
        // Evil
        {
            "name": "Doomsayer",
            "icon": "doomsayer.png",
            "description": "The Doomsayer wins by guessing a set number of players' roles. If enabled, they may observe players and will receive a list of potential roles of the observed player in the next meeting.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/evil/Doomsayer"
        },
        {
            "name": "Executioner",
            "icon": "executioner.png",
            "description": "The Executioner wins by getting their target ejected in a meeting.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/evil/Executioner"
        },
        {
            "name": "Jester",
            "icon": "jester.png",
            "description": "The Jester wins by getting themselves ejected in a meeting.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/evil/Jester"
        },
        // Killing
        {
            "name": "Arsonist",
            "icon": "arsonist.png",
            "description": "The Arsonist must douse and ignite players within their radius and wins by being the last killer alive.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Arsonist"
        },
        {
            "name": "Glitch",
            "icon": "glitch.png",
            "description": "The Glitch wins by being the last killer alive. They can Mimic into another player, temporarily taking on their appearance, or they can Hack a player, temporarily preventing them from using any abilities.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Glitch"
        },
        {
            "name": "Juggernaut",
            "icon": "juggernaut.png",
            "description": "The Juggernaut wins by being the last killer alive. With each kill, their cooldown gets reduced.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Juggernaut"
        },
        {
            "name": "Pestilence",
            "icon": "pestilence.png",
            "description": "The Pestillence wins by being the last killer alive. They are invincible to all interactions and attacks, instantly killing anybody who interacts with them. They can only be defeated by being exiled or guessing incorrectly during meetings.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Pestilence"
        },
        {
            "name": "Plaguebearer",
            "icon": "plaguebearer.png",
            "description": "The Plaguebearer must infect all other players to transform into Pestilence. The Plaguebearer's infection will spread to other players via interactions, including reporting infected bodies.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Plaguebearer"
        },
        {
            "name": "Soul Collector",
            "icon": "soulcollector.png",
            "description": "The Soul Collector can reap the soul of players, leaving behind a lifeless decoy that looks identical to the reaped player standing still wherever they were reaped. Because of this, the Soul Collector cannot trigger the Bait or Noisemaker modifiers.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Soul%20Collector"
        },
        {
            "name": "Vampire",
            "icon": "vampire.png",
            "description": "The Vampire wins by being the last killer alive, or being the last team remaining. They can bite players, converting others into Vampires, or killing them.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Vampire"
        },
        {
            "name": "Werewolf",
            "icon": "werewolf.png",
            "description": "The Werewolf wins by being the last killer alive. They can go on a rampage to increase their vision and gain the ability to kill multiple times within a set duration.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/killing/Werewolf"
        },
        // Afterlife
        {
            "name": "Spectre",
            "icon": "spectre.png",
            "description": "When a Neutral role dies, they have a chance to respawn as the Spectre, who must complete their tasks without being clicked on to win.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/afterlife/Spectre"
        },
        // Outlier
        {
            "name": "Chef",
            "icon": "chef.png",
            "description": "The Chef must discover dead bodies and cook them in order to serve them as meals to other players. Once the Chef meets their quota, they will win alongside any other faction.",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/outlier/Chef"
        },
        {
            "name": "Inquisitor",
            "icon": "inquisitor.png",
            "description": "The Inquisitor wins by eliminating Heretics (targets). The Inquisitor will have a list of roles and can use their inquire ability on a player to find out if they are a Heretic during a meeting. The Inquisitor must eliminate the Heretics by any means necessary; vote them out, wait for them to die, or Vanquish (kill) them!",
            "url": "https://au-avengers.github.io/docs.toum.gg/docs/roles/neutral/outlier/Inquisitor"
        }
    ]
};

// WHITELIST: Comment out any role names you want to hide
// Simply add // in front of any line to hide that role
const enabledRoles = [
    // === CREWMATE ROLES ===
    // Afterlife
    //"Haunter",
    // Investigative
    //"Aurial",
    //"Forensic", 
    //"Investigator",
    //"Lookout",
    //"Medium",
    "Mystic",
    "Seer",
    "Snitch",
    //"Sonar",
    //"Spy",
    "Trapper",
    // Protective
    //"Altruist",
    //"Cleric",
    "Medic",
    //"Mirrorcaster",
    //"Oracle",
    //"Warden",
    // Support
    "Engineer",
    //"Imitator",
    //"Plumber",
    //"Sentry",
    //"Transporter",
    // Killing
    //"Deputy",
    //"Hunter",
    //"Sheriff",
    //"Veteran",
    //"Vigilante",
    // Power
    //"Jailor",
    "Mayor",
    //"Monarch",
    "Politician",
    //"Prosecutor",
    //"Swapper",
    //"Time Lord",
    
    // === IMPOSTOR ROLES ===
    // Concealing
    "Eclipsal",
    "Escapist",
    //"Grenadier",
    //"Morphling",
    //"Swooper",
    //"Venerer",
    // Support
    //"Blackmailer",
    //"Hypnotist",
    "Janitor",
    "Miner",
    //"Undertaker",
    // Killing
    //"Ambusher",
    //"Bomber",
    //"Parasite",
    //"Scavenger",
    //"Warlock",
    // Power
    //"Ambassador",
    //"Herbalist",
    //"Puppeteer",
    //"Spellslinger",
    //"Traitor",
    
    // === NEUTRAL ROLES ===
    // Benign
    "Amnesiac",
    "Fairy",
    //"Mercenary",
    //"Survivor",
    // Evil
    //"Doomsayer",
    "Executioner",
    "Jester",
    // Killing
    //"Arsonist",
    //"Glitch",
    //"Juggernaut",
    //"Pestilence",
    //"Plaguebearer",
    //"Soul Collector",
    //"Vampire",
    //"Werewolf",
    // Afterlife
    //"Spectre",
    // Outlier
    //"Chef",
    //"Inquisitor"
];

function filterRolesByWhitelist(roles) {
    return roles.filter(role => enabledRoles.includes(role.name));
}

function loadRoles() {
    const filteredCrewmates = filterRolesByWhitelist(rolesData.crewmates);
    const filteredImpostors = filterRolesByWhitelist(rolesData.impostors);
    const filteredNeutrals = filterRolesByWhitelist(rolesData.neutrals);
    
    renderRoleSection('crewmates', filteredCrewmates, 'Crewmates', 'crewmate-heading');
    renderRoleSection('impostors', filteredImpostors, 'Impostors', 'impostor-heading');
    renderRoleSection('neutrals', filteredNeutrals, 'Neutrals', 'neutral-heading');
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

// Popup toggle function
function toggleInstallPopup() {
    const popup = document.getElementById('install-popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById('install-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// Load roles when the page is ready
document.addEventListener('DOMContentLoaded', loadRoles);
