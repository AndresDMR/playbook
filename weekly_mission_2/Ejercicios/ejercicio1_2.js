const issue = {
    title: "Semana 2, live 2",
    repositoryNameAssociated: "LaunchX-InnovaccionVirtual",
    status: "finalizado",
    numberOfComments: "63",
    labels: "3",
    author: "Carlo Gilmar",
    dateCreated: "13/04/2022",
    lastUpdated: "05/05/2022",
    getTitleAndAuthor: function(){
        return `Repo Title: ${this.title}\nRepo Author: ${this.author}`
    },
    getGeneralInfo: function(){
        return `General Info: 
        Title = ${issue.title} 
        Repository Name Associated = ${issue.repositoryNameAssociated}`
    }
}
console.log("Organización del issue: "+issue.repositoryNameAssociated)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())