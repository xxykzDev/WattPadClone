class Story {
    constructor(title, description, author, genre) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.genre = genre;
        this.chapters = [];
        this.creationDate = new Date();
    }

    // Métodos y lógica específica de la entidad Historia
}

module.exports = Story;
