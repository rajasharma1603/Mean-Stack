var questionsOperations = {
    questions:[],
    add(questionObject){
        this.questions.push(questionObject);
    },
    delete(){
        return this.questions=this.questions.filter(qobj=>qobj.isMarked==false);
    },
    countMarked(){
        return this.questions.filter(qobj=>qobj.isMarked).length;
    },
    toggleMarked(id){
        this.search(id).toggle();
    },
    update(){

    },
    search(id){
        return this.questions.find(questionObject=>questionObject.id==id);
    },
    sort(){

    },
};