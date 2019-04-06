import { Post, Author } from "models";

export class DataGenerator {

    generatePosts(count: number, authors: Author[]): Post[] {

        var result: Post[] = []

        for (let index = 0; index < count; index++) {
            const content = this.getRandomContent();
            result.push({
                authorId: this.getRandomItem(authors).id,
                title: this.getRandomAbstract(index),
                content: content,
                id: index,
                tags: this.getRandomTags()
            })

        }

        return result;
    }

    generateAuthors(): Author[] {

        const firstNames = [...this.firstNames];
        const lastNames = [...this.lastNames];

        var result: Author[] = [];

        while (firstNames.length > 0) {

            const firstName = this.getRandomItem(firstNames);
            const lastName = this.getRandomItem(lastNames);

            const newAuthor = {
                name: `${firstName} ${lastName}`,
                id: result.length
            }
            
            result.push(newAuthor);                              
            firstNames.splice(firstNames.indexOf(firstName, 0), 1);
            lastNames.splice(lastNames.indexOf(lastName, 0), 1);
        }
        

        return result;
    }

    private getRandomItem<T>(items: T[]): T {
        return items[Math.floor(Math.random() * items.length)];
    }

    private getRandomTags(): string[] {
        const first = this.getRandomItem(this.tags);
        let second: string;

        while (first === (second = this.getRandomItem(this.tags))) { }
        return ["StarTrek", first, second];
    }

    private getRandomContent(): string {

        const result: string[] = [];
        const paragraphCount = Math.floor(Math.random() * 3) + 1;

        for (let index = 0; index < paragraphCount; index++) {
            result.push(this.getRandomParagraph() + "\n")
        }

        return result.join(" ");
    }

    private getRandomParagraph(): string {

        const result: string[] = [];
        const sentenceCount = Math.floor(Math.random() * 4) + 3;

        for (let index = 0; index < sentenceCount; index++) {
            result.push(this.getRandomItem(this.contentParts))
        }

        return result.join(" ");
    }

    private getRandomAbstract(index: number): string {
        return `The ${index}. Article and it is about ${this.getRandomItem(this.starships)}`;
    }

    private readonly starships: string[] = [
        "USS Enterprise-E", "USS Voyager", "NX-01 Enterprise", "Deep Space 9",
        "USS Prometeus", "Klingon Bird of Prey", "Romulan War Bird", "Borg Cube",
        "Borg Sphere"
    ]

    private readonly contentParts: string[] = [
        "Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. ",
        "Computer, belay that order. ",
        "You're going to be an interesting companion, Mr. Data. ",
        "I think you've let your personal feelings cloud your judgement. ",
        "And attack the Romulans. ",
        "That might've been one of the shortest assignments in the history of Starfleet. ",
        "Wouldn't that bring about chaos? ",
        "How long can two people talk about nothing? ",
        "About four years. ",
        "I got tired of hearing how young I looked. ",
        "Yes, absolutely, I do indeed concur, wholeheartedly! ",
        "Maybe we better talk out here; the observation lounge has turned into a swamp. ",
        "The game's not big enough unless it scares you a little. ",
        "But the probability of making a six is no greater than that of rolling a seven. ",
        "Besides, you look good in a dress. ",
        "Flair is what marks the difference between artistry and mere competence. ",
        "They were just sucked into space. ",
        "Shields up! Rrrrred alert! Your shields were failing, sir. ",
        "Some days you get the bear, and some days the bear gets you. ",
        "And blowing into maximum warp speed, you appeared for an instant to be in two places at once. ",
        "I'll be sure to note that in my log. ",
        "I'm afraid I still don't understand, sir. ",
        "The Federation's gone; the Borg is everywhere! ",
        "Worf, It's better than music. It's jazz. ",
        "Did you come here for something in particular or just general Riker-bashing? ",
        "Sorry, Data. ",
        "When has justice ever been as simple as a rule book? ",
        "Mr. Worf, you do remember how to fire phasers? This should be interesting. ",
        "Smooth as an android's bottom, eh, Data? ",
        "You enjoyed that. Earl Grey tea, watercress sandwiches... and Bularian canapés? ",
        "Are you up for promotion? What? We're not at all alike! Sure. ",
        "You'd be surprised how far a hug goes with Geordi, or Worf. ",
        "Mr. Crusher, ready a collision course with the Borg ship. ",
        "Ensign Babyface! ",
        "My oath is between Captain Kargan and myself. ",
        "Your only concern is with how you obey my orders. ",
        "Or do you prefer the rank of prisoner to that of lieutenant? ",
        "Wait a minute - you've been declared dead. ",
        "You can't give orders around here. ",
        "Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister. ",
        "Now we know what they mean by 'advanced' tactical training. ",
        "Well, that's certainly good to know. ",
        "Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. ",
        "Commander William Riker of the Starship Enterprise. ",
        "You bet I'm agitated! ",
        "I may be surrounded by insanity, but I am not insane. ",
        "Travel time to the nearest starbase? ",
        "I'd like to think that I haven't changed those things, sir. ",
        "We have a saboteur aboard. ",
        "The look in your eyes, I recognize it. ",
        "You used to have it for me. ",
        "Captain, why are we out here chasing comets? ",
        "I'll alert the crew. ",
        "Why don't we just give everybody a promotion and call it a night - 'Commander'? ",
        "I recommend you don't fire until you're within 40,000 kilometers. ",
        "We could cause a diplomatic crisis. "
    ];

    private readonly tags: string[] = [
        "DS9", "TNG", "Titan", "TOS", "TAS", "Canon", "NonCanon", "ENT", "Series"
    ]

    private readonly firstNames: string[] = [
        "Alex", "Steffi", "Stefan", "Christian",
        "Jonas", "Michael", "Johannes", "Matthias",
        "Darleen", "Yvonne"
    ]

    private readonly lastNames: string[] = [
        "Horn", "Drescher", "Langer", "Hannig", "Schubert",
        "Hufnagel", "Kaiser", "Stierstorfer", "Wurzel", "Gottinger",
    ]

}