class Question {
    constructor(id, name, option1, option2, option3, option4, rans, score) {
        this.id = id;
        this.name = name;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.rans = rans;
        this.score = score;
        this.isMarked=false;
    }
    toggle(){
        this.isMarked=!this.isMarked;
    }
}