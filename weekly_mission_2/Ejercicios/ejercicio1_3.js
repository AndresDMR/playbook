pullRequest = {
    title: "Enviando el blog de Visual Patner",
    autor: "AndrésDMR",
    branchName: "main",
    dateCreated: "25/04/2022",
    status: "open",
    repositoryNameAssociated: "visualpartnership",
    getStatus: function(){
        return "Status: "+this.status
    },
    getTitleAndAutor: function(){
        return `Title: ${this.tittle}\nAutor: ${this.autor}`
    }
}
console.log("Pull Request Info")
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())